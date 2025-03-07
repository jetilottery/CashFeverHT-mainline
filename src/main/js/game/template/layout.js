define({
    _BASE_APP: {
        children: ['background', 'baseGameContainer', 'WheelBonusContainer', 'CollectBonusContainer']
    },
    baseGameContainer: {
        children: ['logo', 'winUpTo', 'bonusCardContainer', 'numberContainer']
    },

    /*
     * BACKGROUND
     */
    background: {
        type: 'sprite',
        children: ['bonusBackground', 'basegameBackground', 'backgroundElements', 'backgroundShapes']
    },
    basegameBackground: {
        type: 'sprite',
        x: 0,
        y: 0
    },
    bonusBackground: {
        type: 'sprite',
        x: 0,
        y: 0
    },
    backgroundElements: {
        type: 'sprite',
        x: 0,
        y: 0
    },
    backgroundShapes: {
        type: 'sprite',
        x: 0,
        y: 0
    },

    /*
     * LOGO
     */
    logo: {
        type: 'sprite',
        children: ['logoText'],
        landscape: {
            x: 1156,
            y: -80,
            anchor: {
                x: 0.5,
                y: 0
            },
        },
        portrait: {
            x: 405,
            y: -70,
            anchor: {
                x: 0,
                y: 0
            },
        }
    },
    logoText: {
        type: 'sprite',
        anchor: {
            x: 0.5,
            y: 0
        },
        landscape: {
            y:0
        },
    },

    /*
     * WIN UP TO
     */
    winUpTo: {
        type: 'container',
        children: ['winUpToContainer'],
        landscape: {
            x: 1156,
            y: 295
        },
        portrait: {
            x: 405,
            y: 192
        }
    },
    winUpToContainer: {
        type: 'container',
        children: ['winUpToIn', 'winUpToOut']
    },
    winUpToIn: {
        type: 'sprite',
        anchor: 0.5,
        children: ['winUpToInText', 'winUpToInValue']
    },
    winUpToInText: {
        type: 'text',
        string: 'winUpToText',
        anchor: 0.5,
        maxWidth: 200,
        landscape: {
            style: 'winUpToText'
        },
        portrait: {
            style: 'winUpToTextPortrait'
        }
    },
    winUpToInValue: {
        type: 'text',
        anchor: 0.5,
        maxWidth: 200,
        landscape: {
            y: 40,
            style: 'winUpToValue'
        },
        portrait: {
            y: 50,
            style: 'winUpToValuePortrait'
        }
    },
    winUpToOut: {
        type: 'sprite',
        anchor: 0.5,
        children: ['winUpToOutText', 'winUpToOutValue']
    },
    winUpToOutText: {
        type: 'text',
        string: 'winUpToText',
        anchor: 0.5,
        maxWidth: 200,
        landscape: {
            style: 'winUpToText'
        },
        portrait: {
            style: 'winUpToTextPortrait'
        }
    },
    winUpToOutValue: {
        type: 'text',
        anchor: 0.5,
        maxWidth: 200,
        landscape: {
            y: 40,
            style: 'winUpToValue'
        },
        portrait: {
            y: 50,
            style: 'winUpToValuePortrait'
        }
    },

    /*
     * WINNING NUMBERS
     */
    winningNumbers: {
        type: 'container',
        children: ['winningNumbersTitle', 'winningNumber1', 'winningNumber2', 'winningNumber3', 'winningNumber4', 'winningNumber5'],
        landscape: {
            x: 100,
            y: 21
        },
        portrait: {
            x: 86,
            y: 380
        }
    },
    winningNumbersTitle: {
        type: 'text',
        string: 'luckyNumbers',
        landscape: {
            style: 'winningNumbersTitle',
            maxWidth: 750,
            anchor: 0.5,
            x: 329,
            y: 45
        },
        portrait: {
            style: 'winningNumbersTitlePortrait',
            maxWidth: 405,
            anchor: 0.5,
            x: 319,
            y: 25
        }
    },
    winningNumber1: {
        type: 'container',
        landscape: {
            x: 22,
            y: 133
        },
        portrait: {
            x: 0,
            y: 120
        }
    },
    winningNumber2: {
        type: 'container',
        landscape: {
            x: 179,
            y: 133
        },
        portrait: {
            x: 160,
            y: 120
        }
    },
    winningNumber3: {
        type: 'container',
        landscape: {
            x: 336,
            y: 133
        },
        portrait: {
            x: 320,
            y: 120
        }
    },
    winningNumber4: {
        type: 'container',
        landscape: {
            x: 493,
            y: 133
        },
        portrait: {
            x: 480,
            y: 120
        }
    },
    winningNumber5: {
        type: 'container',
        landscape: {
            x: 650,
            y: 133
        },
        portrait: {
            x: 640,
            y: 120
        }
    },

    /*
     * BONUS AREA
     */
    bonusCardContainer: {
        type: 'container',
        children: ['bonusCard'],
        landscape: {
            x: 1156,
            y: 475
        },
        portrait: {
            x: 405,
            y: 189
        }
    },
    bonusCard: {
        type: 'sprite',
        children: ['icon_instantWin', 'icon_wheelBonus', 'icon_prizeBonus'],
        anchor: 0.5
    },
    icon_instantWin: {
        type: 'sprite',
        texture: 'tutorial_instant_win',
        anchor: 0.5,
        landscape: {
            x: 0,
            y: -57
        },
        portrait: {
            x: 0,
            y: 130
        }
    },
    icon_wheelBonus: {
        type: 'container',
        children: ['icon_wheelBonusGraphic', 'icon_wheelBonusText'],
        landscape: {
            x: -153,
            y: 15
        },
        portrait: {
            x: -264,
            y: 135
        }
    },
    icon_wheelBonusGraphic: {
        type: 'sprite',
        anchor: 0.5,
        y: -3
    },
    icon_wheelBonusText: {
        type: 'sprite',
        anchor: 0.5,
        y: 20
    },
    icon_prizeBonus: {
        type: 'container',
        children: ['icon_prizeBonusGraphic', 'icon_prizeBonusText'],
        landscape: {
            x: 162,
            y: 15
        },
        portrait: {
            x: 264,
            y: 135
        }
    },
    icon_prizeBonusGraphic: {
        type: 'sprite',
        anchor: 0.5,
        y: -20
    },
    icon_prizeBonusText: {
        type: 'sprite',
        anchor: 0.5,
        y: 20
    },

    /*
     * NUMBER CONTAINER
     */
    numberContainer: {
        type: 'container',
        children: ['playerNumbers', 'numberDivider', 'winningNumbers']
    },

    /*
     * PLAYER NUMBERS
     */
    playerNumbers: {
        type: 'container',
        children: ['playerNumbersTitle', 'playerNumber1', 'playerNumber2', 'playerNumber3', 'playerNumber4', 'playerNumber5', 'playerNumber6', 'playerNumber7', 'playerNumber8', 'playerNumber9', 'playerNumber10', 'playerNumber11', 'playerNumber12', 'playerNumber13', 'playerNumber14', 'playerNumber15', 'playerNumber16', 'playerNumber17', 'playerNumber18', 'playerNumber19', 'playerNumber20', 'playerNumber21', 'playerNumber22', 'playerNumber23', 'playerNumber24', 'playerNumber25'],
        landscape: {
            x: 29,
            y: 170
        },
        portrait: {
            x: 53,
            y: 570
        }
    },
    numberDivider: {
        type: 'sprite',
        anchor: 0.5,
        texture: 'light-separator',
        landscape: {
            x: 415,
            y: 202
        },
        portrait: {
            x: 405,
            y: 552
        }
    },
    playerNumbersTitle: {
        type: 'text',
        string: 'yourNumbers',
        landscape: {
            style: 'winningNumbersTitle',
            maxWidth: 750,
            anchor: 0.5,
            x: 393,
            y: 85
        },
        portrait: {
            style: 'winningNumbersTitlePortrait',
            maxWidth: 405,
            anchor: 0.5,
            x: 352,
            y: 38
        }
    },
    playerNumber1: {
        type: 'container',
        landscape: {
            x: 92,
            y: 153
        },
        portrait: {
            x: 40,
            y: 120
        }
    },
    playerNumber2: {
        type: 'container',
        landscape: {
            x: 236,
            y: 153
        },
        portrait: {
            x: 184,
            y: 120
        }
    },
    playerNumber3: {
        type: 'container',
        landscape: {
            x: 380,
            y: 153
        },
        portrait: {
            x: 328,
            y: 120
        }
    },
    playerNumber4: {
        type: 'container',
        landscape: {
            x: 524,
            y: 153
        },
        portrait: {
            x: 472,
            y: 120
        }
    },
    playerNumber5: {
        type: 'container',
        landscape: {
            x: 668,
            y: 153
        },
        portrait: {
            x: 616,
            y: 120
        }
    },
    playerNumber6: {
        type: 'container',
        landscape: {
            x: 154,
            y: 250
        },
        portrait: {
            x: 96,
            y: 217
        }
    },
    playerNumber7: {
        type: 'container',
        landscape: {
            x: 298,
            y: 250
        },
        portrait: {
            x: 240,
            y: 217
        }
    },
    playerNumber8: {
        type: 'container',
        landscape: {
            x: 442,
            y: 250
        },
        portrait: {
            x: 384,
            y: 217
        }
    },
    playerNumber9: {
        type: 'container',
        landscape: {
            x: 586,
            y: 250
        },
        portrait: {
            x: 528,
            y: 217
        }
    },
    playerNumber10: {
        type: 'container',
        landscape: {
            x: 730,
            y: 250
        },
        portrait: {
            x: 672,
            y: 217
        }
    },
    playerNumber11: {
        type: 'container',
        landscape: {
            x: 92,
            y: 347
        },
        portrait: {
            x: 40,
            y: 311
        }
    },
    playerNumber12: {
        type: 'container',
        landscape: {
            x: 236,
            y: 347
        },
        portrait: {
            x: 184,
            y: 311
        }
    },
    playerNumber13: {
        type: 'container',
        landscape: {
            x: 380,
            y: 347
        },
        portrait: {
            x: 328,
            y: 311
        }
    },
    playerNumber14: {
        type: 'container',
        landscape: {
            x: 524,
            y: 347
        },
        portrait: {
            x: 472,
            y: 311
        }
    },
    playerNumber15: {
        type: 'container',
        landscape: {
            x: 668,
            y: 347
        },
        portrait: {
            x: 616,
            y: 311
        }
    },
    playerNumber16: {
        type: 'container',
        landscape: {
            x: 154,
            y: 444
        },
        portrait: {
            x: 96,
            y: 405
        }
    },
    playerNumber17: {
        type: 'container',
        landscape: {
            x: 298,
            y: 444
        },
        portrait: {
            x: 240,
            y: 405
        }
    },
    playerNumber18: {
        type: 'container',
        landscape: {
            x: 442,
            y: 444
        },
        portrait: {
            x: 384,
            y: 405
        }
    },
    playerNumber19: {
        type: 'container',
        landscape: {
            x: 586,
            y: 444
        },
        portrait: {
            x: 528,
            y: 405
        }
    },
    playerNumber20: {
        type: 'container',
        landscape: {
            x: 730,
            y: 444
        },
        portrait: {
            x: 672,
            y: 405
        }
    },
    playerNumber21: {
        type: 'container',
        landscape: {
            x: 92,
            y: 541
        },
        portrait: {
            x: 40,
            y: 499
        }
    },
    playerNumber22: {
        type: 'container',
        landscape: {
            x: 236,
            y: 541
        },
        portrait: {
            x: 184,
            y: 499
        }
    },
    playerNumber23: {
        type: 'container',
        landscape: {
            x: 380,
            y: 541
        },
        portrait: {
            x: 328,
            y: 499
        }
    },
    playerNumber24: {
        type: 'container',
        landscape: {
            x: 524,
            y: 541
        },
        portrait: {
            x: 472,
            y: 499
        }
    },
    playerNumber25: {
        type: 'container',
        landscape: {
            x: 668,
            y: 541
        },
        portrait: {
            x: 616,
            y: 499
        }
    },
    /////////////////////////////////////////////////////
    /////// COLLECT BONUS
    ///////////////////////////////////////////////
    CollectBonusContainer: {
        type: 'container',
        children: ['pickerContainer', 'collectInfoContainer']
    },
    pickerContainer: {
        type: 'container',
        children: ['picker_1', 'picker_2', 'picker_3', 'picker_4', 'picker_5', 'picker_6', 'picker_7', 'picker_8', 'picker_9'],
        landscape: {
            x: 180,
            y: 240
        },
        portrait: {
            x: 180,
            y: 780
        }
    },
    picker_1: {
        type: 'container',
        landscape: {
            x: 0,
            y: 0
        },
        portrait: {
            x: 0,
            y: 0
        }
    },
    picker_2: {
        type: 'container',
        landscape: {
            x: 230,
            y: 0
        },
        portrait: {
            x: 230,
            y: 0
        }
    },
    picker_3: {
        type: 'container',
        landscape: {
            x: 460,
            y: 0
        },
        portrait: {
            x: 460,
            y: 0
        }
    },
    picker_4: {
        type: 'container',
        landscape: {
            x: 0,
            y: 170
        },
        portrait: {
            x: 0,
            y: 170
        }
    },
    picker_5: {
        type: 'container',
        landscape: {
            x: 230,
            y: 170
        },
        portrait: {
            x: 230,
            y: 170
        }
    },
    picker_6: {
        type: 'container',
        landscape: {
            x: 460,
            y: 170
        },
        portrait: {
            x: 460,
            y: 170
        }
    },
    picker_7: {
        type: 'container',
        landscape: {
            x: 0,
            y: 340
        },
        portrait: {
            x: 0,
            y: 340
        }
    },
    picker_8: {
        type: 'container',
        landscape: {
            x: 230,
            y: 340
        },
        portrait: {
            x: 230,
            y: 340
        }
    },
    picker_9: {
        type: 'container',
        landscape: {
            x: 460,
            y: 340
        },
        portrait: {
            x: 460,
            y: 340
        }
    },
    collectInfoContainer: {
        type: 'container',
        children: ['collectInfoLogoGlow', 'collectInfoLogo', 'collectInfoLogoText', 'collectInfoText', 'collectInfoSprite', 'collectInfoTotalWinHeader', 'collectInfoTotalWinSpineAnimContainer', 'collectInfoTotalWinValue', 'collectInfoRevealAllButton'],
        landscape: {
          x:1125,
          y:130
        },
        portrait: {
          x: 405,
          y: 160,
        }
    },
    collectInfoLogoGlow: {
        type: 'container',
        x: 0,
        y: 0
    },
    collectInfoLogo: {
        type: 'sprite',
        texture: 'collect-bonus-symbol',
        anchor: 0.5,
        x: 0,
        y: 0,
        scale: 0.9
    },
    collectInfoLogoText: {
        type: 'sprite',
        anchor: 0.5,
        x: 0,
        y: 110,
    },
    collectInfoText: {
        type: 'text',
        string: 'collectBonusInfo',
        style: 'collectBonusInfo',
        x: -70,
        y: 190,
        maxWidth:300
    },
    collectInfoSprite: {
        type: 'sprite',
        texture: 'coin-stack',
        x: -220,
        y: 190
    },
    collectInfoTotalWinHeader: {
        type: 'text',
        string: 'collectBonusTotalWin',
        style: 'collectBonusTotalWin',
        x: 0,
        y: 360,
        anchor:0.5,
        maxWidth:600
    },
    collectInfoTotalWinSpineAnimContainer: {
        type: 'container',
        x: 0,
        y: 450
    },
    collectInfoTotalWinValue: {
        type: 'text',
        style: 'collectBonusValue',
        anchor: 0.5,
        x: 0,
        y: 450
    },
    collectInfoRevealAllButton: {
        type: 'button',
        string: 'button_autoPlayCollectBonus',
        landscape: {
            x: 0,
            y: 570
        },
        portrait: {
            x: 0,
            y: 1120
        },
        maxWidth:250,
        textures: {
            enabled: 'buyButtonEnabled',
            over: 'buyButtonOver',
            pressed: 'buyButtonPressed',
            disabled: 'buyButtonDisabled'
        },
        style: {
            enabled: 'buyButtonEnabled',
            over: 'buyButtonOver',
            pressed: 'buyButtonPressed',
            disabled: 'buyButtonDisabled'
        }
    },
    /////////////////////////////////////////////////////
    /////// WHEEL BONUS
    ///////////////////////////////////////////////
    WheelBonusContainer: {
        type: 'container',
        children: ['wheelBonusLogo', 'bonusWheelContainer', 'bonusWheelContainerPortrait', 'wheelBonusInfo', 'wheelBonusWinInfo', 'wheelBonusWinInfoPortrait']
    },

    bonusWheelContainer: {
      type:'container',
      children:['wheelWinUptoLandscapeContainer','bonusWheel'],
      x: 20,
      y: 385,
    },
    bonusWheelContainerPortrait: {
      type:'container',
        children:['wheelWinUptoPortraitContainer'],
      x: 405,
      y: 1322,
    },
    wheelWinUptoLandscapeContainer: {
        type: 'container',
        anchor: 0.5,
        landscape: {
            x:1020,
            y: 0
        },
    },
    wheelWinUptoPortraitContainer: {
        type: 'container',
        anchor: 0.5,
        landscape: {
            x:0,
            y: -940
        },
    },


    bonusWheel: {
        type: 'sprite',
        children: ['wheelGlow', 'wheelBack', 'wheelRim', 'innerWheel', 'innerWheelParticles', 'outerWheel', 'outerWheelParticles', 'wheelCenter', 'wheelWinWindow', 'wheelShine'],
        landscape: {
            rotation: 0
        },
        portrait: {
            rotation: -1.5708
        }
    },
    wheelBonusInfo: {
        type: 'sprite',
        children: ['wheelWinUpto', 'wheelSpinButton'],
        anchor: 0.5,
        landscape: {
            x: 1015,
            y: 400
        },
        portrait: {
            x: 405,
            y: 0
        }
    },
    wheelWinUpto: {
        type: 'sprite',
        children: ['wheelWinUptoLine1', 'wheelWinUptoLine2'],
        anchor: 0.5,
        landscape: {
            x:0,
            y:0
        },
        portrait: {
            x:0,
            y:0
        }
    },
    wheelWinUptoLine1: {
        type: 'sprite',
        anchor: 0.5
    },
    wheelWinUptoLine2: {
        type: 'text',
        string: 'winUpToText',
        anchor: 0.5,
        maxWidth: 480,
        landscape: {
            style: 'wheelWinUpToLine2Text',
            y: 100
        },
        portrait: {
            style: 'wheelWinUpToLine2TextPortrait',
            y: 100
        }
    },
    wheelSpinButton: {
        type: 'button',
        string: 'button_wheel',
        landscape: {
            x:1020,
            y: 238
        },
        portrait: {
            x: 0,
            y: -40
        },
        textures: {
            enabled: 'buyButtonEnabled',
            over: 'buyButtonOver',
            pressed: 'buyButtonPressed',
            disabled: 'buyButtonDisabled'
        },
        style: {
            enabled: 'buyButtonEnabled',
            over: 'buyButtonOver',
            pressed: 'buyButtonPressed',
            disabled: 'buyButtonDisabled'
        }
    },
    wheelBonusWinInfo: {
        type: 'sprite',
        visible: false,
        alpha: 0,
        children: ['wheelWinTop', 'wheelWinDivider', 'wheelWinBottom'],
        anchor: 0,
        landscape: {
            x: 776,
            y: 315
        },
        portrait: {
            x: 165,
            y: 300
        }
    },
    wheelBonusWinInfoPortrait: {
        type: 'sprite',
        visible: false,
        alpha: 0,
        anchor: 0,
        landscape: {
            x: 776,
            y: 315
        },
        portrait: {
            x: 165,
            y: 300
        }
    },
    wheelWinTop: {
        type: 'sprite',
        children: ['wheelWinPrizeLabel', 'wheelWinMultiplierLabel', 'wheelWinPrizeValue', 'wheelWinMultiplierValue'],
        anchor: 0,
        landscape: {
            x: 0,
            y: 18
        },
        portrait: {
            x: 0,
            y: 18
        }
    },
    wheelWinPrizeLabel: {
        type: 'text',
        string: '',
        style: 'wheelBonusTotalWinLabel',
        anchor: {
            x: 0,
            y: 0.5
        },
        maxWidth: 330,
        landscape: {
            x: 0,
            y: 20
        },
        portrait: {
            x: 0,
            y: 20
        }
    },
    wheelWinMultiplierLabel: {
        type: 'text',
        string: '',
        style: 'wheelBonusTotalWinLabel',
        anchor: {
            x: 0,
            y: 0.5
        },
        maxWidth: 330,
        landscape: {
            x: 0,
            y: 95
        },
        portrait: {
            x: 0,
            y: 95
        }
    },
    wheelWinPrizeValue: {
        type: 'text',
        string: '',
        style: 'wheelWinPrizeValueStyle',
        anchor: 0.5,
        maxWidth: 200,
        landscape: {
            x: 440,
            y: 20
        },
        portrait: {
            x: 440,
            y: 20
        }
    },
    wheelWinMultiplierValue: {
        type: 'text',
        string: '',
        style: 'wheelWinPrizeValueStyle',
        anchor: 0.5,
        maxWidth: 200,
        landscape: {
            x: 440,
            y: 95
        },
        portrait: {
            x: 440,
            y: 95
        }
    },
    wheelWinBottom: {
        type: 'sprite',
        children: ['wheelTotalWinGlow', 'wheelTotalWinLabel', 'wheelTotalWinValue'],
        anchor: 0.5,
        landscape: {
            x: 239,
            y: 240
        },
        portrait: {
            x: 239,
            y: 222
        }
    },
    wheelTotalWinLabel: {
        type: 'text',
        string: '',
        style: 'wheelBonusTotalWinLabel',
        anchor: 0.5,
        maxWidth: 550
    },
    wheelTotalWinValue: {
        type: 'text',
        string: '',
        style: 'wheelBonusTotalWinValue',
        anchor: 0.5,
        maxWidth: 550,
        x: 0,
        y: 95
    },
    wheelTotalWinGlow: {
        type: 'sprite',
        anchor: 0.5,
        x: 0,
        y: 90
    },
    wheelWinDivider: {
        texture: 'wheelBonusWinDivider',
        type: 'sprite',
        anchor: 0.5,
        landscape: {
            x: 245,
            y: 175
        },
        portrait: {
            x: 245,
            y: 168
        }
    },
    wheelGlow: {
        type: 'sprite',
        anchor: 0.5,
        x: 0,
        y: 100
    },
    wheelBack: {
        type: 'sprite',
        anchor: 0.5,
        texture: 'static-wheel'
    },
    wheelRim: {
        type: 'sprite',
        anchor: 0.5,
        texture: 'rim'
    },
    innerWheel: {
        type: 'sprite',
        children: ['wheelPrizeValues'],
        anchor: 0.5,
        texture: 'inner-wheel'
    },
    innerWheelParticles: {
        type: 'sprite',
        anchor: 0.5,
        scale: 0.92,
        x: 480,
        y: 15
    },
    outerWheel: {
        type: 'sprite',
        children: ['wheelMultiplierValues'],
        anchor: 0.5,
        texture: 'outer-wheel'
    },
    outerWheelParticles: {
        type: 'sprite',
        anchor: 0.5,
        x: 582,
        y: 15
    },
    wheelPrizeValues: {
        type: 'container'
    },
    wheelMultiplierValues: {
        type: 'container'
    },
    wheelCenter: {
        type: 'sprite',
        anchor: 0.5,
        texture: 'wheel-center'
    },
    wheelWinWindow: {
        type: 'sprite',
        anchor: 0.5,
        texture: 'wheel-selector',
        x: 392,
        y: -3
    },
    wheelShine: {
        type: 'sprite',
        anchor: 0.5,
        landscape: {
            x: 310,
            y: 18
        },
        portrait: {
            x: 310,
            y: 18
        }
    },
    wheelBonusLogo: {
        type: 'sprite',
        children: ['wheelBonusLogoGlow', 'wheelBonusLogoAsset', 'wheelBonusLogoText'],
        landscape: {
            x: 1013,
            y: 196
        },
        portrait: {
            x: 405,
            y: 180
        }
    },
    wheelBonusLogoAsset: {
        type: 'sprite',
        texture: 'wheel-bonus-symbol',
        anchor: 0.5,
        y: -45,
        landscape: {
            scale: 0.9
        },
        portrait: {
            scale: 0.9
        }
    },
    wheelBonusLogoText: {
        type: 'sprite',
        anchor: 0.5,
        y: 50
    },
    wheelBonusLogoGlow: {
        type: 'sprite',
        anchor: 0.5,
        landscape: {
            x: 0,
            y: -25
        },
        portrait: {
            x: 0,
            y: -25
        }
    },
    bonusPrize1Win: {
        type: 'container',
        children: ['bonusPrize1WinIn', 'bonusPrize1WinOut']
    },
    bonusPrize1NoWin: {
        type: 'container',
        children: ['bonusPrize1NoWinIn', 'bonusPrize1NoWinOut']
    },
    bonusPrize2Win: {
        type: 'container',
        children: ['bonusPrize2WinIn', 'bonusPrize2WinOut']
    },
    bonusPrize2NoWin: {
        type: 'container',
        children: ['bonusPrize2NoWinIn', 'bonusPrize2NoWinOut']
    },
    bonusPrize3Win: {
        type: 'container',
        children: ['bonusPrize3WinIn', 'bonusPrize3WinOut']
    },
    bonusPrize3NoWin: {
        type: 'container',
        children: ['bonusPrize3NoWinIn', 'bonusPrize3NoWinOut']
    },
    bonusPrize4Win: {
        type: 'container',
        children: ['bonusPrize4WinIn', 'bonusPrize4WinOut']
    },
    bonusPrize4NoWin: {
        type: 'container',
        children: ['bonusPrize4NoWinIn', 'bonusPrize4NoWinOut']
    },
    bonusPrize5Win: {
        type: 'container',
        children: ['bonusPrize5WinIn', 'bonusPrize5WinOut']
    },
    bonusPrize5NoWin: {
        type: 'container',
        children: ['bonusPrize5NoWinIn', 'bonusPrize5NoWinOut']
    },
    bonusPrize6Win: {
        type: 'container',
        children: ['bonusPrize6WinIn', 'bonusPrize6WinOut']
    },
    bonusPrize6NoWin: {
        type: 'container',
        children: ['bonusPrize6NoWinIn', 'bonusPrize6NoWinOut']
    },
    bonusPrize1WinIn: {
        type: 'text',
        style: 'bonusWin',
        anchor: 0.5,
        maxWidth: 550
    },
    bonusPrize1NoWinIn: {
        type: 'text',
        style: 'bonusNoWin',
        anchor: 0.5,
        maxWidth: 550
    },
    bonusPrize1WinOut: {
        type: 'text',
        style: 'bonusWin',
        anchor: 0.5,
        maxWidth: 550
    },
    bonusPrize1NoWinOut: {
        type: 'text',
        style: 'bonusNoWin',
        anchor: 0.5,
        maxWidth: 550
    },
    bonusPrize2WinIn: {
        type: 'text',
        style: 'bonusWin',
        anchor: 0.5,
        maxWidth: 550
    },
    bonusPrize2NoWinIn: {
        type: 'text',
        style: 'bonusNoWin',
        anchor: 0.5,
        maxWidth: 550
    },
    bonusPrize2WinOut: {
        type: 'text',
        style: 'bonusWin',
        anchor: 0.5,
        maxWidth: 550
    },
    bonusPrize2NoWinOut: {
        type: 'text',
        style: 'bonusNoWin',
        anchor: 0.5,
        maxWidth: 550
    },
    bonusPrize3WinIn: {
        type: 'text',
        style: 'bonusWin3',
        anchor: 0.5,
        maxWidth: 550
    },
    bonusPrize3NoWinIn: {
        type: 'text',
        style: 'bonusNoWin3',
        anchor: 0.5,
        maxWidth: 550
    },
    bonusPrize3WinOut: {
        type: 'text',
        style: 'bonusWin3',
        anchor: 0.5,
        maxWidth: 550
    },
    bonusPrize3NoWinOut: {
        type: 'text',
        style: 'bonusNoWin3',
        anchor: 0.5,
        maxWidth: 550
    },
    bonusPrize4WinIn: {
        type: 'text',
        style: 'bonusWin4',
        anchor: 0.5,
        maxWidth: 550
    },
    bonusPrize4NoWinIn: {
        type: 'text',
        style: 'bonusNoWin4',
        anchor: 0.5,
        maxWidth: 550
    },
    bonusPrize4WinOut: {
        type: 'text',
        style: 'bonusWin4',
        anchor: 0.5,
        maxWidth: 550
    },
    bonusPrize4NoWinOut: {
        type: 'text',
        style: 'bonusNoWin4',
        anchor: 0.5,
        maxWidth: 550
    },
    bonusPrize5WinIn: {
        type: 'text',
        style: 'bonusWin5',
        anchor: 0.5,
        maxWidth: 550
    },
    bonusPrize5NoWinIn: {
        type: 'text',
        style: 'bonusNoWin5',
        anchor: 0.5,
        maxWidth: 550
    },
    bonusPrize5WinOut: {
        type: 'text',
        style: 'bonusWin5',
        anchor: 0.5,
        maxWidth: 550
    },
    bonusPrize5NoWinOut: {
        type: 'text',
        style: 'bonusNoWin5',
        anchor: 0.5,
        maxWidth: 550
    },
    bonusPrize6WinIn: {
        type: 'text',
        style: 'bonusWin6',
        anchor: 0.5,
        maxWidth: 550
    },
    bonusPrize6NoWinIn: {
        type: 'text',
        style: 'bonusNoWin6',
        anchor: 0.5,
        maxWidth: 550
    },
    bonusPrize6WinOut: {
        type: 'text',
        style: 'bonusWin6',
        anchor: 0.5,
        maxWidth: 550
    },
    bonusPrize6NoWinOut: {
        type: 'text',
        style: 'bonusNoWin6',
        anchor: 0.5,
        maxWidth: 550
    },

    /*
     * How To Play
     */
    howToPlayPages: {
        type: 'container',
        children: ['howToPlayPage1Container', 'howToPlayPage2Container', 'howToPlayPage3Container']
    },
    howToPlayPage1Container: {
        type: 'container',
        children: ['howToPlayPage1Title']
    },
    howToPlayPage2Container: {
        type: 'container',
        children: ['howToPlayPage2Title', 'howToPlayPage2TitleText']
    },
    howToPlayPage3Container: {
        type: 'container',
        children: ['howToPlayPage3Title', 'howToPlayPage3TitleText']
    },
    howToPlayPage1Title: {
        type: 'text',
        string: 'howToPlayTitle',
        style: 'howToPlayTitle',
        anchor: 0.5,
        landscape: {
            x: 720,
            y: 210
        },
        portrait: {
            x: 405,
            y: 280
        }
    },
    howToPlayPage2Title: {
        type: 'sprite',
        children: ['howToPlayPage2TitleAsset', 'howToPlayPage2TitleAssetText'],
        anchor: 0.5,
        landscape: {
            x: 720,
            y: 240
        },
        portrait: {
            x: 405,
            y: 450
        }
    },
    howToPlayPage2TitleAssetText: {
        type: 'sprite',
        texture: 'wheel-bonus-text',
        scale: 0.45,
        anchor: 0.5
    },
    howToPlayPage2TitleAsset: {
        type: 'sprite',
        texture: 'wheel-bonus-symbol',
        scale: 0.45,
        anchor: 0.5,
        y: -50
    },
    howToPlayPage2TitleText: {
        type: 'text',
        string: 'howToPlayTitle',
        style: 'howToPlayTitle',
        anchor: 0.5,
        landscape: {
            x: 720,
            y: 210,
            visible: false
        },
        portrait: {
            x: 405,
            y: 280,
            visible: true
        }
    },


    howToPlayPage3Title: {
        type: 'sprite',
        children: ['howToPlayPage3TitleAsset', 'howToPlayPage3TitleAssetText'],
        anchor: 0.5,
        landscape: {
            x: 720,
            y: 240
        },
        portrait: {
            x: 405,
            y: 450
        }
    },
    howToPlayPage3TitleAsset: {
        type: 'sprite',
        texture: 'collect-bonus-symbol',
        scale: 0.45,
        anchor: 0.5,
        y: -50
    },
    howToPlayPage3TitleAssetText: {
        type: 'sprite',
        texture: 'collect-bonus-text',
        scale: 0.45,
        anchor: 0.5
    },


    howToPlayPage3TitleText: {
        type: 'text',
        string: 'howToPlayTitle',
        style: 'howToPlayTitle',
        anchor: 0.5,
        landscape: {
            x: 720,
            y: 210,
            visible: false
        },
        portrait: {
            x: 405,
            y: 280,
            visible: true
        }
    },

    /*
    * UI Panel
    */
    buttonBar: {
        type: 'container',
        landscape: {
            x: 0,
            y: 655
        },
        portrait: {
            x: 0,
            y: 1250
        },
        children: ['helpButtonStatic', 'helpButton', 'homeButtonStatic', 'homeButton', 'exitButton', 'playAgainButton', 'tryAgainButton', 'buyButton', 'buyButtonAnim', 'tryButton', 'tryButtonAnim', 'moveToMoneyButton', 'retryButton']
    },

    /*Componant overrides - start */
    exitButton: {
        type: 'button',
        landscape: { x: 1155, y: 50 },
        portrait: { x: 405, y: 50 },
        string: 'button_exit',
        textures: {
            enabled: 'mainButtonEnabled',
            over: 'mainButtonOver',
            pressed: 'mainButtonPressed',
            disabled: 'mainButtonDisabled',
        },
        style: {
            enabled: 'mainButtonEnabled',
            over: 'mainButtonOver',
            pressed: 'mainButtonPressed',
            disabled: 'mainButtonDisabled',
        },
    },
    helpButton: {
        type: 'button',
        landscape: {
            x: 1378,
            y: -330
        },
        portrait: {
            x: 755,
            y: 50
        },
        textures: {
            enabled: 'tutorialButtonEnabled',
            disabled: 'tutorialButtonDisabled',
            over: 'tutorialButtonOver',
            pressed: 'tutorialButtonPressed'
        }
    },
    helpButtonStatic: {
        type: 'sprite',
        anchor: 0.5,
        landscape: {
            x: 1378,
            y: -330
        },
        portrait: {
            x: 755,
            y: 50
        },
        texture: 'tutorialButtonDisabled'
    },
    homeButton: {
        type: 'button',
        landscape: {
            x: 942,
            y: -330
        },
        portrait: {
            x: 55,
            y: 50
        },
        textures: {
            enabled: 'homeButtonEnabled',
            over: 'homeButtonOver',
            pressed: 'homeButtonPressed',
            disabled: 'homeButtonDisabled'
        }
    },
    homeButtonStatic: {
        type: 'sprite',
        anchor: 0.5,
        landscape: {
            x: 942,
            y: -330
        },
        portrait: {
            x: 55,
            y: 50
        },
        texture: 'homeButtonDisabled'
    },
    buy_default: {
        type: 'point',
        landscape: {
            x: 1160,
            y: 40
        },
        portrait: {
            x: 405,
            y: 40
        }
    },
    try_default: {
        type: 'point',
        landscape: {
            x: 1160,
            y: 40
        },
        portrait: {
            x: 555,
            y: 50
        }
    },
    buy_multi: {
        type: 'point',
        landscape: {
            x: 1160,
            y: 40
        },
        portrait: {
            x: 405,
            y: 40
        }
    },
    try_multi: {
        type: 'point',
        landscape: {
            x: 1022,
            y: 40
        },
        portrait: {
            x: 555,
            y: 50
        }
    },
    playForMoney_multi: {
        type: 'point',
        landscape: {
            x: 1292,
            y: 40
        },
        portrait: {
            x: 255,
            y: 50
        }
    },


    try_fixed: {
        type: 'point',
        landscape: { x: 1299, y: 50 },
        portrait: { x: 555, y: 50 },
    },

    playForMoney_default: {
        type: 'point',
        landscape: { x: 1019, y: 50 },
        portrait: { x: 255, y: 50 },
    },


    /*Componant overrides - end */
    buyButtonAnim: {
        type: 'sprite',
        anchor: 0.5
    },
    tryButtonAnim: {
        type: 'sprite',
        anchor: 0.5
    },
    footerContainer: {
        type: 'container',
        children: ['footerBG', 'balanceMeter', 'ticketCostMeter', 'winMeter', 'divider_1_3', 'divider_2_3', 'divider_1_2'],
        landscape: {
            y: 761
        },
        portrait: {
            y: 1349
        }
    },
    footerBG: {
        type: 'sprite',
        landscape: {
            texture: 'landscape_footerBar',
            y: 5
        },
        portrait: {
            texture: 'portrait_footerBar',
            y: 5
        }
    },
    autoPlayButton_default: {
        type: 'point',
        landscape: {
            x: 1160,
            y: 695
        },
        portrait: {
            x: 405,
            y: 1297
        }
    },
    autoPlayButton_multi: {
        type: 'point',
        landscape: {
            x: 1160,
            y: 695
        },
        portrait: {
            x: 405,
            y: 1297
        }
    },
    howToPlayContainer: {
        type: 'container',
        children: ['howToPlayOverlay', 'howToPlayBackground', 'howToPlayPages', 'versionText', 'audioButtonContainer', 'howToPlayPrevious', 'howToPlayNext', 'howToPlayClose', 'howToPlayIndicators']
    },
    howToPlayBackground: {
        type: 'sprite',
        anchor: {
            x: 0.5
        },
        landscape: {
            x: 720,
            y: 70,
            texture: 'landscape_tutorialBackground'
        },
        portrait: {
            x: 405,
            y: 158,
            texture: 'portrait_tutorialBackground'
        }
    },
    versionText: {
        type: 'text',
        style: 'versionText',
        x: 44,
        landscape: {
            y: 129
        },
        portrait: {
            y: 221
        },
        alpha: 0.5
    },
    howToPlayClose: {
        type: 'button',
        string: 'button_ok',
        landscape: {
            x: 720,
            y: 658
        },
        portrait: {
            x: 405,
            y: 1071
        },
        textures: {
            enabled: 'tutorialOKButtonEnabled',
            over: 'tutorialOKButtonOver',
            pressed: 'tutorialOKButtonPressed'
        },
        style: {
            enabled: 'tutorialOKButtonEnabled',
            over: 'tutorialOKButtonOver',
            pressed: 'tutorialOKButtonPressed'
        }
    },
    howToPlayPrevious: {
        type: 'button',
        landscape: {
            x: 100,
            y: 418
        },
        portrait: {
            x: 64,
            y: 682
        },
        textures: {
            enabled: 'tutorialLeftButtonEnabled',
            over: 'tutorialLeftButtonOver',
            pressed: 'tutorialLeftButtonPressed'
        }
    },
    howToPlayNext: {
        type: 'button',
        landscape: {
            x: 1345,
            y: 418
        },
        portrait: {
            x: 746,
            y: 682
        },
        textures: {
            enabled: 'tutorialRightButtonEnabled',
            over: 'tutorialRightButtonOver',
            pressed: 'tutorialRightButtonPressed'
        }
    },
    howToPlayIndicators: {
        type: 'container',
        children: ['howToPlayIndicatorActive', 'howToPlayIndicatorInactive'],
        landscape: {
            x: 720,
            y: 581
        },
        portrait: {
            x: 405,
            y: 999
        }
    },
    howToPlayIndicatorActive: {
        type: 'sprite',
        texture: 'tutorialPageIndicatorActive'
    },
    howToPlayIndicatorInactive: {
        type: 'sprite',
        texture: 'tutorialPageIndicatorInactive'
    },
    audioButtonContainer: {
        type: 'container',
        landscape: {
            x: 92,
            y: 664
        },
        portrait: {
            x: 71,
            y: 1071
        }
    },
    resultPlaquesContainer: {
        type: 'container',
        children: ['resultPlaqueOverlay', 'winPlaqueGlow', 'winPlaqueBG', 'winPlaqueMessage', 'winPlaqueValue', 'winPlaqueCloseButton', 'losePlaqueBG', 'losePlaqueMessage', 'losePlaqueCloseButton'],
        landscape: {
            x: 720,
            y: 377
        },
        portrait: {
            x: 405,
            y: 678
        }
    },
    resultPlaqueOverlay: {
        type: 'sprite',
        anchor: 0.5,
        y: -114
    },
    winPlaqueMessage: {
        type: 'text',
        string: 'message_win',
        style: 'winPlaqueBody',
        y: -68,
        anchor: 0.5,
        landscape: {
            scale: 1,
            maxWidth: 670,
        },
        portrait: {
            scale: 0.9,
            maxWidth: 670,
        }
    },
    winPlaqueValue: {
        type: 'text',
        style: 'winPlaqueValue',
        y: 40,
        anchor: 0.5,
        maxWidth: 670,
        landscape: {
            scale: 1
        },
        portrait: {
            scale: 0.9
        }
    },
    winPlaqueBG: {
        type: 'sprite',
        anchor: 0.5,
        landscape: {
            texture: 'landscape_endOfGameMessageNoWinBackground',
            scale: 1
        },
        portrait: {
            texture: 'portrait_endOfGameMessageNoWinBackground',
            scale: 0.9
        }
    },
    winPlaqueGlow: {
        type: 'sprite',
        anchor: 0.5,
        landscape: {
            scale: 1
        },
        portrait: {
            scale: 0.9
        }
    },
    winPlaqueCloseButton: {
        type: 'button',
        alpha: 0,
        landscape: {
            textures: {
                enabled: 'landscape_endOfGameMessageNoWinBackground',
                over: 'landscape_endOfGameMessageNoWinBackground',
                pressed: 'landscape_endOfGameMessageNoWinBackground'
            }
        },
        portrait: {
            textures: {
                enabled: 'portrait_endOfGameMessageNoWinBackground',
                over: 'portrait_endOfGameMessageNoWinBackground',
                pressed: 'portrait_endOfGameMessageNoWinBackground'
            }
        }
    },
    losePlaqueMessage: {
        type: 'text',
        string: 'message_nonWin',
        style: 'losePlaqueBody',
        anchor: 0.5,
        portrait: {
            maxWidth: 746
        },
        landscape: {
            maxWidth: 746
        }
    },
    losePlaqueCloseButton: {
        type: 'button',
        alpha: 0,
        landscape: {
            textures: {
                enabled: 'landscape_endOfGameMessageNoWinBackground',
                over: 'landscape_endOfGameMessageNoWinBackground',
                pressed: 'landscape_endOfGameMessageNoWinBackground'
            }
        },
        portrait: {
            textures: {
                enabled: 'portrait_endOfGameMessageNoWinBackground',
                over: 'portrait_endOfGameMessageNoWinBackground',
                pressed: 'portrait_endOfGameMessageNoWinBackground'
            }
        }
    },
    buyButton: {
        type: 'button',
        string: 'button_buy',
        landscape: {
            x: 1146
        },
        textures: {
            enabled: 'buyButtonEnabled',
            over: 'buyButtonOver',
            pressed: 'buyButtonPressed',
            disabled: 'buyButtonDisabled'
        },
        style: {
            enabled: 'buyButtonEnabled',
            over: 'buyButtonOver',
            pressed: 'buyButtonPressed',
            disabled: 'buyButtonDisabled'
        }
    },
    tryButton: {
        type: 'button',
        string: 'button_try',
        landscape: {
            x: 1299
        },
        textures: {
            enabled: 'buyButtonEnabled',
            over: 'buyButtonOver',
            pressed: 'buyButtonPressed',
            disabled: 'buyButtonDisabled'
        },
        style: {
            enabled: 'buyButtonEnabled',
            over: 'buyButtonOver',
            pressed: 'buyButtonPressed',
            disabled: 'buyButtonDisabled'
        }
    },
    moveToMoneyButton: {
        type: 'button',
        string: 'button_moveToMoney',
        landscape: {
            x: 1019
        },
        textures: {
            enabled: 'mainButtonEnabled',
            over: 'mainButtonOver',
            pressed: 'mainButtonPressed',
            disabled: 'mainButtonDisabled',
        },
        style: {
            enabled: 'mainButtonEnabled',
            over: 'mainButtonOver',
            pressed: 'mainButtonPressed',
            disabled: 'mainButtonDisabled',
        },
    },

    ticketSelectBarSmall: {
        type: 'container',
        landscape: {
            x: 1156,
            y: 592
        },
        portrait: {
            x: 405,
            y: 1197
        },
        children: [
            'ticketSelectBarBG',
            'ticketSelectCostValue',
            'ticketCostDownButtonStatic',
            'ticketCostUpButtonStatic',
            'ticketCostDownButton',
            'ticketCostUpButton',
            'ticketCostIndicators',
        ]
    },
    ticketSelectCostValue: {
        type: 'text',
        portrait: {
            y: 1
        },
        landscape: {
            y: 1
        },
        anchor: 0.5,
        style: 'ticketSelectCostValue'
    },
    ticketCostDownButton: {
        type: 'button',
        landscape: {
            x: -208,
            y: 1
        },
        portrait: {
            x: -208,
            y: 1
        },
        textures: {
            enabled: 'minusButtonEnabled',
            disabled: 'minusButtonDisabled',
            over: 'minusButtonOver',
            pressed: 'minusButtonPressed'
        }
    },
    ticketCostUpButton: {
        type: 'button',
        landscape: {
            x: 208,
            y: 1
        },
        portrait: {
            x: 208,
            y: 1
        },
        textures: {
            enabled: 'plusButtonEnabled',
            disabled: 'plusButtonDisabled',
            over: 'plusButtonOver',
            pressed: 'plusButtonPressed'
        }
    },
    ticketCostDownButtonStatic: {
        type: 'sprite',
        anchor: 0.5,
        landscape: {
            x: -208,
            y: 1
        },
        portrait: {
            x: -208,
            y: 1
        },
        texture: 'minusButtonDisabled'
    },
    ticketCostUpButtonStatic: {
        type: 'sprite',
        anchor: 0.5,
        landscape: {
            x: 208,
            y: 1
        },
        portrait: {
            x: 208,
            y: 1
        },
        texture: 'plusButtonDisabled'
    },
    errorMessage: {
        type: 'text',
        style: 'errorMessage',
        anchor: 0.5,
        wordWrap: true,
        landscape: { x: 720, y: 360, wordWrapWidth: 750 },
        portrait: { x: 405, y: 640, wordWrapWidth: 700 },
    },
    errorExit: {
        type: 'button',
        string: 'button_exit',
        landscape: { x: 720, y: 560 },
        portrait: { x: 405, y: 870 },
        style: {
            enabled: 'errorButtonEnabled',
            over: 'errorButtonOver',
            pressed: 'errorButtonPressed',
        },
        textures: {
            enabled: 'timeOutButtonEnabled',
            over: 'timeOutButtonOver',
            pressed: 'timeOutButtonPressed',
        },
    },
    timeoutExit: {
        type: 'button',
        landscape: {
            x: 585,
            y: 560
        },
        portrait: {
            x: 270,
            y: 870
        },
        style: {
            enabled: 'errorButtonEnabled',
            over: 'errorButtonOver',
            pressed: 'errorButtonPressed'
        },
        textures: {
            enabled: 'timeOutButtonEnabled',
            over: 'timeOutButtonOver',
            pressed: 'timeOutButtonPressed'
        }
    },
    timeoutContinue: {
        type: 'button',
        landscape: {
            x: 855,
            y: 560
        },
        portrait: {
            x: 540,
            y: 870
        },
        style: {
            enabled: 'errorButtonEnabled',
            over: 'errorButtonOver',
            pressed: 'errorButtonPressed'
        },
        textures: {
            enabled: 'timeOutButtonEnabled',
            over: 'timeOutButtonOver',
            pressed: 'timeOutButtonPressed'
        }
    },
    losePlaqueBG: {
        type: 'sprite',
        anchor: 0.5,
        landscape: { texture: 'landscape_endOfGameMessageNoWinBackground', scale:1},
        portrait: { texture: 'portrait_endOfGameMessageNoWinBackground', scale:0.9},
    },

});