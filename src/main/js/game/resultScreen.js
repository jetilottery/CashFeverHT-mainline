define(function (require) {
    const gameFlow = require('skbJet/componentManchester/standardIW/gameFlow');
    const meterData = require('skbJet/componentManchester/standardIW/meterData');
    const audio = require('skbJet/componentManchester/standardIW/audio');
    const gameConfig = require('skbJet/componentManchester/standardIW/gameConfig');
    const SKBeInstant = require('skbJet/component/SKBeInstant/SKBeInstant');
    const displayList = require('skbJet/componentManchester/standardIW/displayList');
    const msgBus = require('skbJet/component/gameMsgBus/GameMsgBus');
    const PIXI = require('com/pixijs/pixi');
    const resLib = require('skbJet/component/resourceLoader/resourceLib');
    const playerNumbers = require('game/components/playerNumbers');

    require('com/gsap/TweenMax');
    const Tween = window.TweenMax;
    let glowAnimation;
    
    function init(){
      glowAnimation = new PIXI.spine.Spine(resLib.spine['WinAnnounce'].spineData);
      glowAnimation.renderable = false;
      glowAnimation.alpha = 0;
      displayList.winPlaqueGlow.addChild(glowAnimation);
      displayList.winPlaqueCloseButton.on('press', hideResult);
    }

    function hideResult(){
      Tween.to(glowAnimation, 0, { alpha: 0, onComplete : function(){
          glowAnimation.renderable = false;
        }
      });
    }

    function resultScreen() {
        // ResultPlaques template component handles populating and showing the result screen
        // All that needs doing here is playing the result screen audio

        playerNumbers.onResultPlaque();

        const terminator = meterData.totalWin > 0 ? 'winTerminator' : 'loseTerminator';
        let fadeBaseMusic = false;
        if (gameConfig.backgroundMusicEnabled) {
            if(audio.isPlaying('music')){
                fadeBaseMusic = true;
                audio.fadeOut('music', gameConfig.resultMusicFadeOutDuration);
            }
        }
        msgBus.publish('game.winningNumber.resetBagDropFlag');

        if(fadeBaseMusic){
            Tween.delayedCall(gameConfig.resultTerminatorFadeInDelay, () =>
                audio.fadeIn(terminator, gameConfig.resultTerminatorFadeInDuration, false)
            );
        }
        else {
            audio.play(terminator, false);
        }

        // Roll up the win value here
        if (meterData.totalWin > 0 && gameConfig.rollUpTotalWin) {

            glowAnimation.state.setAnimation(0,'PlaqueGlow_GOLD', true);
            glowAnimation.renderable = true;

            Tween.to(glowAnimation, 0.3, { alpha: 1, delay : 0.1 });

            Tween.to({curr: 1}, gameConfig.totalWinRollupInSeconds, {
                curr: meterData.totalWin, onStart: function () {
                    msgBus.publish('Result.RollupStarted');
                }, onUpdate: function () {
                    displayList.winPlaqueValue.text = SKBeInstant.formatCurrency(this.target.curr).formattedAmount;
                }, onComplete: function () {
                    msgBus.publish('Result.RollupComplete');
                    if (gameConfig.pulseTotalWinAfterRollup) {
                        Tween.fromTo(displayList.winPlaqueValue.scale, gameConfig.pulseTotalWinDuration, {
                            x: 1,
                            y: 1
                        }, {x: 1.25, y: 1.25, yoyo: true, repeat: 1});
                    }
                }
            });
        }
    }

    msgBus.subscribe('UI.hideResult', hideResult);
    gameFlow.handle(resultScreen, 'RESULT_SCREEN');

    return { 
        init
    };
});
