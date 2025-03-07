define(require => {
    const PIXI = require('com/pixijs/pixi');
    const prizeData = require('skbJet/componentManchester/standardIW/prizeData');
    const SKBeInstant = require('skbJet/component/SKBeInstant/SKBeInstant');
    const textStyles = require('skbJet/componentManchester/standardIW/textStyles');
    const audio = require('skbJet/componentManchester/standardIW/audio');

    require('com/gsap/TimelineLite');
    require('com/gsap/easing/EasePack');

    const TimelineLite = window.TimelineLite;

    class Segment extends PIXI.Container {
        constructor(data) {
            super();

            this.type = data.type;
            this.text = new PIXI.Text("");
            this.prize = 0;
            this.index = data.index;
            this.text.style = this.type === 'outer' ? textStyles.parse('wheelBonusMultiplierValues') : textStyles.parse('wheelBonusValues');
            this.rotation = data.rotation;
            this.pivot.x = data.pivot - data.offset;
            this.data = data.assignedData;

            this.winContainer = new PIXI.Sprite();

            this.winText1 = null;
            this.winText2 = null;
            this.winText3 = null;
            this.winStyle = null;

            if(data.type==='outer'){
              this.text.anchor.set(0.55,0.5);
              this.text.rotation = 1.5708;
            }
            else {
              this.text.anchor.set(1,0.5);
            }

            this.addChild(
                this.text
            );

        }
        
        setupWin(){
          this.winStyle = this.type === 'outer' ? textStyles.parse('wheelBonusMultiplierValues') : textStyles.parse('wheelBonusValues');
          this.winText1 = new PIXI.Text(this.text.text, this.winStyle);
          this.winText2 = new PIXI.Text(this.text.text, this.winStyle);
          this.winText3 = new PIXI.Text(this.text.text, this.winStyle);
          this.winText1.alpha = this.winText2.alpha = this.winText3.alpha = 0;
          if(this.type==='outer'){
            this.winText1.anchor = this.winText2.anchor = this.winText3.anchor = {x : 0.55, y : 0.5};
            this.winText1.rotation = this.winText2.rotation = this.winText3.rotation = 1.5708;
          }
          else {
            this.winText1.anchor = this.winText2.anchor = this.winText3.anchor = {x : 1, y : 0.5};
          }
          this.winContainer.addChild(this.winText1, this.winText2, this.winText3);
          this.addChildAt(this.winContainer, 0);
        }

        update() {
            if (typeof this.data === 'string') {
              if(this.type==='inner'){
                // prize value inner wheel
                this.prize = prizeData.prizeTable[this.data];
                this.text.text = SKBeInstant.formatCurrency(this.prize).formattedAmount;
              }
              else {
                // multiplier outer wheel
                this.text.text = this.data;
              }
            }
        }

        land() {
            let tl = new TimelineLite();
            this.winText2.scale.set(0);
            this.winText3.scale.set(0);
            this.text.scale.set(0);
            this.text.alpha = 0;

            this.winText1.alpha = 1;
            let scaleTime = 0.3;
            let scaleAmount = 1.3;

            if(this.type==='inner'){
              audio.play('prizeWin', false);
            }
            else {
              audio.play('MultiplierWin', false);
            }
            // 1 out
            tl.to(this.winText1.scale, scaleTime, {x:scaleAmount, y:scaleAmount, ease : window.Power2.easeOut }, 0);
            tl.to(this.winText1, scaleTime, { alpha : 0, ease : window.Power2.easeOut }, 0.02);

            // 2 in 
            tl.to(this.winText2.scale, scaleTime, {x:1, y:1, ease : window.Power2.easeOut }, 0.15);
            tl.to(this.winText2, scaleTime, { alpha : 1, ease : window.Power2.easeOut }, 0.15);

            // 2 out
            tl.to(this.winText2.scale, scaleTime, {x:scaleAmount, y:scaleAmount, ease : window.Power2.easeOut }, 0.3);
            tl.to(this.winText2, scaleTime, { alpha : 0, ease : window.Power2.easeOut }, 0.32);

            // 3 in
            tl.to(this.text.scale, scaleTime, {x:1, y:1, ease : window.Power2.easeOut }, 0.45);
            tl.to(this.text, scaleTime, { alpha : 1, ease : window.Power2.easeOut }, 0.45);

            // // 3 out
            // tl.to(this.winText3.scale, scaleTime, {x:scaleAmount, y:scaleAmount, ease : window.Power2.easeOut }, 0.6);
            // tl.to(this.winText3, scaleTime, { alpha : 0, ease : window.Power2.easeOut }, 0.62);
            //
            // // text in
            // tl.to(this.text.scale, scaleTime, {x:1, y:1, ease : window.Power2.easeOut }, 0.75);
            // tl.to(this.text, scaleTime, { alpha : 1, ease : window.Power2.easeOut }, 0.75);
        }

        reset(){
          this.winText1 = null;
          this.winText2 = null;
          this.winText3 = null;
          this.winStyle = null;
          this.winContainer.removeChildren();
        }

    }

    return Segment;

});