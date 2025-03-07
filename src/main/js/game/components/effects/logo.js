define(require => {
    const msgBus = require('skbJet/component/gameMsgBus/GameMsgBus');
    const displayList = require('skbJet/componentManchester/standardIW/displayList');
    const SKBeInstant = require('skbJet/component/SKBeInstant/SKBeInstant');
    const prizeData = require('skbJet/componentManchester/standardIW/prizeData');
    const orientation = require('skbJet/componentManchester/standardIW/orientation');
    const PIXI = require('com/pixijs/pixi');
    const gameConfig = require('skbJet/componentManchester/standardIW/gameConfig');

    let logoLayer;
    let logoValue;
    let logoLabel;

    let currentOrientation = 'landscape';

    let logoOverride = false;

    function init() {
        logoLayer = displayList.logoText;
        logoValue = new PIXI.extras.BitmapText("xx", {
            font: "250px CashFeverFont"
        });
        logoLabel = new PIXI.Sprite(PIXI.Texture.fromFrame('landscape_gameLogo'));
        logoLayer.addChild(logoValue, logoLabel);
        msgBus.subscribe('GameSize.OrientationChange', onOrientationChange);
        msgBus.subscribe('PrizeData.PrizeStructure', updateLogo);
        onOrientationChange();

        if(SKBeInstant.config.currency === "PLN") {
            logoOverride = true;
        }
    }


    function updateLogo() {

        // Set the BitmapText
        let prizeAmount = gameConfig.PrizeTier !== undefined && typeof gameConfig.PrizeTier === "string" ? prizeData.prizeTable[gameConfig.PrizeTier.toUpperCase()] : prizeData.prizeTable.B;  // B is the 'XXX' FEVER amount
        let formattedAmount = SKBeInstant.formatCurrency(prizeAmount).formattedAmount;
        logoValue.text = formattedAmount;

        let maxLogoWidth; // max width of "FEVER"
        let combinedMaxWidth = 810;

        if (currentOrientation === 'landscape') {
            maxLogoWidth = 550;
            logoValue.pivot.y = 0;
            logoValue.scale.set(1);
            logoValue.scale.set(1);
            logoLabel.scale.set(Math.min(maxLogoWidth / logoLabel.width, 1));
            logoValue.scale.set(Math.min(490 / logoValue.width, 1));
            logoValue.dirty = true; // let the renderer know to update the display object after any font sizing update
            logoLabel.anchor.set(0.5, 0);
            logoValue.anchor.set(0.5, 0.8);
            logoValue.position.x = 0;
            logoValue.position.y = 190;
            logoLabel.position.x = 0;
            logoLabel.position.y = 250;
            logoLabel.parent.x = 0;
            adjustWinUpto(false);
        } else {
            logoValue.scale.set(1);

            logoLabel.anchor.set(0);
            logoValue.anchor.set(0);

            if (logoLabel.width + logoValue.width > combinedMaxWidth || logoOverride) {
                logoLabel.parent.x = 0;

                logoValue.scale.set(1);
                logoValue.scale.set(Math.min(490 / logoValue.width, 1));
                logoValue.pivot.y = 215;
                logoValue.x = -(logoValue.width / 2);
                logoValue.y = 160;

                logoLabel.x = -(logoLabel.width / 2);
                logoLabel.y = 190;
                adjustWinUpto(true);


            } else {
                logoValue.scale.set(1);
                logoValue.scale.set(Math.min(490 / logoValue.width, 1));
                logoValue.pivot.y = 161;
                logoValue.x = 0;
                logoValue.y = 130;

                logoLabel.y = 130;
                logoLabel.x = logoValue.width;

                logoLabel.parent.x = -(logoLabel.width + logoValue.width) / 2;
                adjustWinUpto(false);

            }
        }
    }

    function adjustWinUpto(combinedMaxWidth) {

        let text = displayList.winUpToInText;
        let value = displayList.winUpToInValue;

        let text2 = displayList.winUpToOutText;
        let value2 = displayList.winUpToOutValue;

        if (combinedMaxWidth && orientation.get() === orientation.PORTRAIT) {

            text.y = text2.y = 50;
            value.y = value2.y = 50;

            text.anchor.x = text2.anchor.x = 0;
            value.anchor.x = value2.anchor.x = 0;

            value.x = text.width + 10;
            value2.x = text2.width + 10;

            displayList.winUpToIn.pivot.x = (text.width + value.width) / 2;
            displayList.winUpToOut.pivot.x = (text.width + value.width) / 2;
        } else {
            text.y = text2.y = 0;
            value.y = value2.y = 50;

            text.anchor.x = text2.anchor.x = 0.5;
            value.anchor.x = value2.anchor.x = 0.5;

            value.x = 0;
            value2.x = 0;

            displayList.winUpToIn.pivot.x = 0;
            displayList.winUpToOut.pivot.x = 0;
        }

    }

    function onOrientationChange() {
        currentOrientation = orientation.get();

        updateLogo();
    }

    return {
        init
    };
});



