define(require => {

    const msgBus = require('skbJet/component/gameMsgBus/GameMsgBus');
    const PIXI = require('com/pixijs/pixi');
    const Pressable = require('skbJet/componentManchester/standardIW/components/pressable');
    const prizeBonusButton = require('game/components/bonus/prizeBonusButton');
    const resLib = require('skbJet/component/resourceLoader/resourceLib');
    const textStyles = require('skbJet/componentManchester/standardIW/textStyles');
    const SKBeInstant = require('skbJet/component/SKBeInstant/SKBeInstant');
    const meterData = require('skbJet/componentManchester/standardIW/meterData');
    const prizeData = require('skbJet/componentManchester/standardIW/prizeData');
    const audio = require('skbJet/componentManchester/standardIW/audio');
    const gameConfig = require('skbJet/componentManchester/standardIW/gameConfig');

    require('com/gsap/TweenLite');
    require('com/gsap/easing/EasePack');

    const Tween = window.TweenLite;

    class PrizeBonus extends Pressable {

        constructor(props) {
            super(props);
            this.prefix = props.prefix;
            this.container = props.container;
            this.index = props.index;

            this.coverContainer = new PIXI.Container();
            this.backgroundSpineAnimContainer = new PIXI.Container();
            this.coinAnimContainer = new PIXI.Container();

            this.coinAnimContainer.x = 10;

            this.value = null;
            this.valueText = new PIXI.Text("");
            this.valueText.style = textStyles.parse('collectBonusValuePicker');
            this.valueText.x = -5;
            this.valueText.y = -10;
            this.valueText.maxWidth = 148;
            this.valueText.anchor.set(0.5);
            this.interactive = false;

            this.hitAreaBounds = new PIXI.Rectangle(
                -100,
                -65,
                200,
                120
            );

            this.hitArea = this.hitAreaBounds;

            this.addChild(this.backgroundSpineAnimContainer, this.coinAnimContainer, this.coverContainer);
            this.container.addChild(this.valueText, this);

            this.reveal = undefined;

            this.initSpine();
            

            this.coverAnim.stateData.setMix('PrizeBonus/GoldBar' + this.prefix + '_mouseover', 'PrizeBonus/GoldBar' + this.prefix + '_loop', 0.2);
            this.coverAnim.stateData.setMix('PrizeBonus/GoldBar' + this.prefix + '_loop', 'PrizeBonus/GoldBar' + this.prefix + '_mouseover', 0.2);
        }

        initSpine() {
            const _this = this;
            this.coverAnim = new PIXI.spine.Spine(resLib.spine['Bonuses'].spineData);
            this.coverAnim.state.setAnimation(0, 'PrizeBonus/GoldBar' + this.prefix + '_loop', true);
            this.coverContainer.addChild(_this.coverAnim);

            this.backgroundAnim = new PIXI.spine.Spine(resLib.spine['Bonuses'].spineData);
            this.backgroundSpineAnimContainer.addChild(_this.backgroundAnim);

            this.coinAnim = new PIXI.spine.Spine(resLib.spine['Bonuses'].spineData);
            this.coinAnim.state.setAnimation(0, 'PrizeBonus/CoinStackLoop', true);
            this.coinAnimContainer.addChild(_this.coinAnim);

            this.coverContainer.renderable = false;
            this.backgroundSpineAnimContainer.renderable = false;
            this.coinAnimContainer.renderable = false;
            this.backgroundSpineAnimContainer.alpha = 0;
        }

        playLandAudio(){
            if(gameConfig.collectBonusIntroDelay > 0.3) {
                audio.play('GoldBar'+this.index, false, 0.6);
            } else {
                if(!audio.isPlaying('AllGoldBars')) {
                    audio.play('AllGoldBars',false,0.6);
                }
            }
        }

        intro() {
            return new Promise(resolve => {
                
                Tween.delayedCall(gameConfig.collectBonusIntroDelay * this.index,()=> {
                    Tween.delayedCall(0.35,this.playLandAudio, null, this);
                    this.coverAnim.state.setAnimation(0, 'PrizeBonus/GoldBar' + this.prefix + '_intro', false);
                    this.coverAnim.state.addAnimation(0, 'PrizeBonus/GoldBar' + this.prefix + '_loop', true, 0);
                    this.coverContainer.renderable = true;

                    Tween.delayedCall(1, () => {
                        if (this.index === 9) {
                            prizeBonusButton.enableButton();
                        }
                        resolve();
                    }, null, this);
                });
            });
        }

        enable() {
            return new Promise(resolve => {
                this.reveal = resolve;
                this.setEvents(true);
            }).then(() => {
                this.enabled = false;
                this.setEvents(false);
            });
        }

        showValue(value, colourPostFix) {
            return new Promise(resolve => {
                this.value = value;
                if(this.coverAnim.state.tracks[1]){
                    this.coverAnim.state.setEmptyAnimation(1,0);
                }

                this.coverAnim.state.setAnimation(0, 'PrizeBonus/GoldBar' + this.prefix + '_reveal', false);
                this.backgroundAnim.state.setAnimation(0, 'PrizeBonus/GoldBar' + this.prefix + '_revealed_' + colourPostFix, true);

                this.backgroundSpineAnimContainer.renderable = true;
                Tween.to(this.backgroundSpineAnimContainer, 0.25, {
                    alpha: 1
                });

                if (this.value === "Z") {
                    prizeBonusButton.disableButton();
                    msgBus.publish('game.collect.end');
                    this.coinAnimContainer.renderable = true;
                    // show the coin roll animation paused at the start
                    this.coinAnim.state.setAnimation(0, 'PrizeBonus/CoinStackReveal', false);
                    this.coinAnim.state.timeScale = 0;
                    // once the reveal anim has finished play the anim then roll into the loop
                    Tween.delayedCall(1.5, function showCoinRoll(){
                      this.coinAnim.state.timeScale = 1;
                      this.coinAnim.state.addAnimation(0, 'PrizeBonus/CoinStackLoop', true, 0);
                    }, null, this);
                    
                } else {
                    this.valueText.text = SKBeInstant.formatCurrency(prizeData.prizeTable[this.value]).formattedAmount;

                    Tween.delayedCall(1, () => {
                        msgBus.publish('game.collect.addToTotal', prizeData.prizeTable[this.value]);
                        resolve();
                    });
                }
            });
        }

        addToTotal() {
            meterData.win += prizeData.prizeTable[this.value];
        }

        reset() {
            this.setEvents(false);
            this.coverContainer.renderable = false;
            this.backgroundSpineAnimContainer.renderable = false;
            this.backgroundSpineAnimContainer.alpha = 0;
            this.coinAnimContainer.renderable = false;
            this.value = null;
            this.valueText.text = " ";
            this.reveal = undefined;
        }

        disable(delayToShowDisbaled) {
            this.interactive = false;
            this.reveal = undefined;
            this.enabled = false;
            Tween.delayedCall(delayToShowDisbaled,()=>{
                if(!this.value){
                    this.coverAnim.state.setAnimation(0, 'PrizeBonus/GoldBar' + this.prefix + '_desaturates', false);
                }
            });
        }

        onPress(){
            this.reveal();
        }

        onHover(){
            // set the mouseover animation to play on track 1, then set the "alpha" of track 1 to 0 and tween it in - blends the animation on track 1 with the loop already playing on track 0
            this.coverAnim.state.setAnimation(1, 'PrizeBonus/GoldBar' + this.prefix + '_mouseover', true);
            this.coverAnim.state.tracks[1].alpha = 0;
            Tween.to(this.coverContainer.scale,0.3,{
                x:1.2,
                y:1.2
            });
            Tween.to(this.coverAnim.state.tracks[1],0.2,{ alpha:1 });
        }

        onHoverOut(){
            Tween.to(this.coverContainer.scale,0.3,{
                x:1,
                y:1
            });
            // blend out the mouseover animation
            if(this.coverAnim.state.tracks[1]){
                Tween.to(this.coverAnim.state.tracks[1],0.2,{ alpha:0 });
            }
        }

        setEvents(bool) {
            if(bool){
                this.on('press', this.onPress);
                this.on('pointerover', this.onHover);
                this.on('pointerout', this.onHoverOut);
            }
            else {
                this.off('press', this.onPress);
                this.off('pointerover', this.onHover);
                this.off('pointerout', this.onHoverOut);
            }
        }
    }

    return PrizeBonus;

});