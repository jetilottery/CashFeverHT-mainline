define(require => {
  const displayList = require('skbJet/componentManchester/standardIW/displayList');
  const msgBus = require('skbJet/component/gameMsgBus/GameMsgBus');
  const resLib = require('skbJet/component/resourceLoader/resourceLib');
  const PIXI = require('com/pixijs/pixi');
  
  require('com/gsap/TweenMax');

  let symbolsFound = [];

  let wheelBonusSpine;
  let prizeBonusSpine;

  function init() {

    // set up the graphics
    wheelBonusSpine = new PIXI.spine.Spine(resLib.spine['BonusTriggers'].spineData);
    wheelBonusSpine.state.setAnimation(0,'INFO_WheelIconSTATIC', false);
    displayList.icon_wheelBonusGraphic.addChild(wheelBonusSpine);

    prizeBonusSpine = new PIXI.spine.Spine(resLib.spine['BonusTriggers'].spineData);
    prizeBonusSpine.state.setAnimation(0,'INFO_PrizeIconSTATIC', false);
    displayList.icon_prizeBonusGraphic.addChild(prizeBonusSpine);

    // set up the text
    let maxTextWidth = 225;
    let wheelText = new PIXI.Sprite(new PIXI.Texture.fromFrame('wheel-bonus-text'));
    wheelText.anchor.set(0.5);
    displayList.icon_wheelBonusText.addChild(wheelText);
    wheelText.scale.set(Math.min(maxTextWidth / wheelText.width, 1));

    // set up the text
    let collectText = new PIXI.Sprite(new PIXI.Texture.fromFrame('collect-bonus-text'));
    collectText.anchor.set(0.5);
    displayList.icon_prizeBonusText.addChild(collectText);
    collectText.scale.set(Math.min(maxTextWidth / collectText.width, 1));
  }

  function reset() {
    symbolsFound = [];
  }

  function bonusCollectManager(data){
    symbolsFound = [];
    symbolsFound.push(data.symbol);
  }

  function triggerRevealAllBonusIcons(){
    if(symbolsFound.includes('WheelBonus')){
      wheelBonusSpine.state.setAnimation(0, 'INFO_WheelIconREVEAL', false);
      wheelBonusSpine.state.addAnimation(0, 'WheelIconIDLE', true, 0);
    }
    if(symbolsFound.includes('CollectBonus')){
      prizeBonusSpine.state.setAnimation(0, 'INFO_PrizeIconREVEAL', false);
      prizeBonusSpine.state.addAnimation(0, 'PrizeIconIDLE', true, 0);
    }
  }


  msgBus.subscribe('Game.BonusSymFound', bonusCollectManager);
  msgBus.subscribe('Game.TriggerRevealAllBonusIcons', triggerRevealAllBonusIcons);
  //msgBus.subscribe('Game.StopBonusCardIcon', stopBonusIconAnimation);

  return {
    init,
    reset
  };
});