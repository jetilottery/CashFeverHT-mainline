define(require => {
  const PIXI = require('com/pixijs/pixi');
  const displayList = require('skbJet/componentManchester/standardIW/displayList');
  const msgBus = require('skbJet/component/gameMsgBus/GameMsgBus');
  //const fontColors = require('skbJet/componentManchester/standardIW/fontColors');
  const resources = require('skbJet/component/pixiResourceLoader/pixiResourceLoader');
  const orientation = require('skbJet/componentManchester/standardIW/orientation');
  const rollupUtils = require('game/components/utils/rollupUtils');

  let page1Container;
  let page2Container;
  let page3Container;
  let widthOfButtons = 72;
  let isGenerated = false;
  let spacingBuffer = 2;
  let page1Landscape;
  let page2Landscape;
  let page3Landscape;
  let page1Portrait;
  let page2Portrait;
  let page3Portrait;

  let page1PortraitStars;
  let page1PortraitWheel;
  let page1PortraitStack;

  let portraitWidth = 500;

  let positioning = {
    portrait:{
      containerWidth: 610,
      page1:{
        line1:{
          x:405,
          y:380,
          wordWrap:true,
          wordWrapWidth:portraitWidth
        },
        line2:{
          x:405,
          y:500,
          wordWrap:true,
          wordWrapWidth:portraitWidth
        },
        line3:{
          x:405,
          y:670,
          wordWrap:true,
          wordWrapWidth:portraitWidth
        },
        line4:{
          x:405,
          y:840,
          wordWrap:true,
          wordWrapWidth:portraitWidth
        }
      },
      page2:{
        line1:{
          x:405,
          y:700,
          wordWrap:true,
          wordWrapWidth:portraitWidth
        }
      },
      page3:{
        line1:{
          x:405,
          y:700,
          wordWrap:true,
          wordWrapWidth:portraitWidth
        }
      }      
    },
    landscape:{
      containerWidth: 1440,
      page1:{
        line1:{
          x:720,
          y:0,
          wordWrap:true,
          wordWrapWidth:720
        },
        line2:{
          x:720,
          y:75,
          wordWrap:true,
          wordWrapWidth:720
        },
        line3:{
          x:720,
          y:150,
          wordWrap:true,
          wordWrapWidth:720
        }
      },
      page2:{
        line1:{
          x:720,
          y:0,
          wordWrap:true,
          wordWrapWidth:720
        },
        line2:{
          x:720,
          y:140,
          wordWrap:true,
          wordWrapWidth:720
        }
      },
      page3:{
        line1:{
          x:720,
          y:0,
          wordWrap:true,
          wordWrapWidth:720
        },
        line2:{
          x:720,
          y:140,
          wordWrap:true,
          wordWrapWidth:720
        }
      }      
    }
  }; 

  function init() {

    page1Container = displayList.howToPlayPage1Container;
    page2Container = displayList.howToPlayPage2Container;
    page3Container = displayList.howToPlayPage3Container;

    //generate both orientations
    createBonusTexture();
    generateLandscape();
    generatePortrait();

    page1Landscape = rollupUtils.spriteFromTexture('tutorialPage1Landscape');
    page2Landscape = rollupUtils.spriteFromTexture('tutorialPage2Landscape');
    page3Landscape = rollupUtils.spriteFromTexture('tutorialPage3Landscape');
    page1Landscape.anchor.set(0.5);
    page2Landscape.anchor.set(0.5);
    page3Landscape.anchor.set(0.5);

    page1Portrait = rollupUtils.spriteFromTexture('tutorialPage1Portrait');
    page2Portrait = rollupUtils.spriteFromTexture('tutorialPage2Portrait');
    page3Portrait = rollupUtils.spriteFromTexture('tutorialPage3Portrait');
    page1Portrait.anchor.set(0.5);
    page2Portrait.anchor.set(0.5);
    page3Portrait.anchor.set(0.5);

    page1Landscape.x = page2Landscape.x = page3Landscape.x = 720;
    page1Landscape.y = page2Landscape.y = page3Landscape.y = 405;

    page1Portrait.x = page2Portrait.x = page3Portrait.x = 405;
    page1Portrait.y = page2Portrait.y = page3Portrait.y = 630;

    page1PortraitStars = rollupUtils.spriteFromTexture('portraitTutorialStars');

    page1PortraitStars.anchor.set(0.5);
    page1PortraitStars.x = 405;
    page1PortraitStars.y = 578;

    page1PortraitWheel = rollupUtils.spriteFromTexture('tutorial_wheel_icon');
    page1PortraitStack = rollupUtils.spriteFromTexture('tutorial_stack');
    page1PortraitWheel.x = 405;
    page1PortraitStack.x = 414;
    page1PortraitWheel.y = 747;
    page1PortraitStack.y = 922;

    page1Container.addChild(page1Landscape , page1Portrait, page1PortraitStars, page1PortraitWheel, page1PortraitStack);
    page2Container.addChild(page2Landscape , page2Portrait);
    page3Container.addChild(page3Landscape , page3Portrait);


    //hide all
    page1Landscape.visible = page2Landscape.visible = page3Landscape.visible = false;
    page1Portrait.visible = page2Portrait.visible = page3Portrait.visible = false;

    //generated
    isGenerated = true;

    //show the current one
    show(orientation.get());
  }

    function showPortraitPage1Icons(bool){
        page1PortraitStars.visible = bool;
        page1PortraitWheel.visible = bool;
        page1PortraitStack.visible = bool;
    }

    function show(inOrientation){
        if (!isGenerated){
          return;
        }
        page1Landscape.visible = page2Landscape.visible = page3Landscape.visible = false;
        page1Portrait.visible = page2Portrait.visible = page3Portrait.visible = false;
        showPortraitPage1Icons(false);

        if(inOrientation === 'landscape'){
          page1Landscape.visible = page2Landscape.visible = page3Landscape.visible = true;
          showPortraitPage1Icons(false);
        }
        else if(inOrientation === 'portrait'){
          page1Portrait.visible = page2Portrait.visible = page3Portrait.visible = true;
          showPortraitPage1Icons(true);
        }
    }


  function generateLandscape(){
    //we need to generate both pages of the tutorial plaque
    //then create sprites from the container - this means we can have four sprites (both pages, both orientations)
    //so we can simply show/hide the correct sprites instead of messing around repositioning everything on each game resize
    //or orientation change
    //so there are many things we need to set up here
    //now then, let's pass all the strings and splice them where the image placeholders are
    var tempArr1 = [
      resources.i18n.Game.howToPlay.page1.landscape.text1,
      resources.i18n.Game.howToPlay.page1.landscape.text2,
      resources.i18n.Game.howToPlay.page1.landscape.text3
    ];
    var tempArr2 = [
      resources.i18n.Game.howToPlay.page2.landscape.text1,
      resources.i18n.Game.howToPlay.page2.landscape.text2
    ];
    var tempArr3 = [
      resources.i18n.Game.howToPlay.page3.landscape.text1,
      resources.i18n.Game.howToPlay.page3.landscape.text2
    ];
    var page1Lines = getStrings(tempArr1);
    var page2Lines = getStrings(tempArr2);
    var page3Lines = getStrings(tempArr3);

    //page 1
    processFirstPage(page1Lines, 'landscape');
    processOtherPages(2, page2Lines, 'landscape');
    processOtherPages(3, page3Lines, 'landscape');
  }

  function processFirstPage(inArr, inOrientation){

    var i, j;
    var pageObjects = [];
    var pageContainers = [];
    var targetContainer = new PIXI.Container();

    for (i = 0; i < inArr.length; i++){
      pageObjects[i] = [];
      pageContainers[i] = new PIXI.Container();
      for (j = 0; j < inArr[i].length; j++){
        if (inArr[i][j] !== '{0}'){
          //not an image
          pageObjects[i][j] = new PIXI.Text(inArr[i][j],{
            fontFamily: 'oswald',
            fontSize: 30,
            lineHeight : inOrientation === 'portrait' ? 49 : 32,
            fontWeight: 'normal',
            align: 'center',
            fill: '#FFFFFF' //fontColorsfill: fontColors('fontColourTutorialBodyText')
          });
          
        }else{
          var tempTex;
          if (i === 1){
            tempTex = 'tutorial_star';
          }else if (i === 2){
            tempTex = 'tutorial_starx2';
          }
          pageObjects[i][j] = rollupUtils.spriteFromTexture(tempTex);
        }
        //set anchor
        pageObjects[i][j].anchor.set(0.5);
        //add to container
        pageContainers[i].addChild(pageObjects[i][j]);     
      }
      targetContainer.addChild(pageContainers[i]);
    }

    //now do some positioning and arranging
    var xPos, yPos;
    for (i = 0; i < pageContainers.length; i++){
      xPos = positioning[inOrientation].page1["line"+(i+1)].x;
      yPos = positioning[inOrientation].page1["line"+(i+1)].y;
      pageContainers[i].x = xPos;
      pageContainers[i].y = yPos;
      arrangeWithinContainer('page1', pageObjects, i, pageContainers[i], inOrientation);
    }

    //generate a sprite name
    var tempOrient = (inOrientation === 'landscape') ? 'Landscape' : 'Portrait';
    var texName = 'tutorialPage1'+tempOrient;
    //create sprite from container
    rollupUtils.createTextureFromContainer(targetContainer, texName);
  }

  function processOtherPages(pageNumber, inArr, inOrientation){
    var i, j;
    var pageObjects = [];
    var pageContainers = [];
    var targetContainer = new PIXI.Container();
    for (i = 0; i < inArr.length; i++){
      pageObjects[i] = [];
      pageContainers[i] = new PIXI.Container();
      for (j = 0; j < inArr[i].length; j++){
        if (inArr[i][j] !== '{0}'){
          //not an image
          pageObjects[i][j] = new PIXI.Text(inArr[i][j],{
            fontFamily: 'oswald',
            fontSize: 30,
            lineHeight : 45,
            fontWeight: 'normal',
            align: 'center',
            fill: '#FFFFFF', //fontColors fill: fontColors('fontColourTutorialBodyText'),
            wordWrap:true
          });

          var wordWrapWidth = (inOrientation === 'landscape') ? 1264 : portraitWidth;
          pageObjects[i][j].style.wordWrapWidth = wordWrapWidth;
          
        }else{
          if(pageNumber === 2){
            pageObjects[i][j] = rollupUtils.spriteFromTexture('tutorial_wheel_icon');
          }
          else {
            pageObjects[i][j] = rollupUtils.spriteFromTexture('tutorial_stack');
          }
        }
        //set anchor
        pageObjects[i][j].anchor.set(0.5);
        //add to container
        pageContainers[i].addChild(pageObjects[i][j]);     
      }
      targetContainer.addChild(pageContainers[i]);
    }

    //now do some positioning and arranging
    var xPos, yPos;
    for (i = 0; i < pageContainers.length; i++){
      xPos = positioning[inOrientation]['page'+pageNumber]["line"+(i+1)].x;
      yPos = positioning[inOrientation]['page'+pageNumber]["line"+(i+1)].y;
      pageContainers[i].x = xPos;
      pageContainers[i].y = yPos;
      arrangeWithinContainer('page'+pageNumber,pageObjects, i, pageContainers[i], inOrientation);
    }

    //generate a sprite name
    var tempOrient = (inOrientation === 'landscape') ? 'Landscape' : 'Portrait';
    var texName = 'tutorialPage'+pageNumber+tempOrient;
    //create sprite from container
    rollupUtils.createTextureFromContainer(targetContainer, texName);
  }

  function generatePortrait(){
    //we need to generate both pages of the tutorial plaque
    //then create sprites from the container - this means we can have four sprites (both pages, both orientations)
    //so we can simply show/hide the correct sprites instead of messing around repositioning everything on each game resize
    //or orientation change
    //so there are many things we need to set up here
    //now then, let's pass all the strings and splice them where the image placeholders are
    var tempArr1 = [
      resources.i18n.Game.howToPlay.page1.portrait.text1,
      resources.i18n.Game.howToPlay.page1.portrait.text2,
      resources.i18n.Game.howToPlay.page1.portrait.text3,
      resources.i18n.Game.howToPlay.page1.portrait.text4
    ];
    var tempArr2 = [
      resources.i18n.Game.howToPlay.page2.portrait.text1
    ];
    var tempArr3 = [
      resources.i18n.Game.howToPlay.page3.portrait.text1
    ];
    var page1Lines = getStrings(tempArr1);
    var page2Lines = getStrings(tempArr2);
    var page3Lines = getStrings(tempArr3);

    processFirstPage(page1Lines, 'portrait');
    processOtherPages(2, page2Lines, 'portrait');
    processOtherPages(3, page3Lines, 'portrait');
  }



  function createBonusTexture(){
    var starsContainer = new PIXI.Container();
    var star1 = rollupUtils.spriteFromTexture('tutorial_star');
    var star2 = rollupUtils.spriteFromTexture('tutorial_starx2');

    star1.anchor.set(0.5);
    star2.anchor.set(0.5);
    star1.x = 0;
    star2.x = 80;
    //star1.y = star2.y = 0;

    //add to container
    starsContainer.addChild(star1, star2);
    //create sprite from container
    rollupUtils.createTextureFromContainer(starsContainer, 'portraitTutorialStars');
  }

  function arrangeWithinContainer(pageNumber, inArr, inVal, inContainer, inOrientation){
    //basically, we need to space everything out within this container
    //in theory it is straightforward, but it does not account for wrapping onto two lines
    //we need to add together the width of all children (with a small buffer)
    //start by setting everything to zero
    var i;
    for (i = 0; i < inArr[inVal].length; i++){
      inArr[inVal][i].x = 0;
    }

    //pass to a function to arrange these sequentially
    arrangeAndCenter(pageNumber, inArr[inVal], inContainer);

    //well well well, we now need to work out whether the current width of the container
    //is wider than the width of the tutorialPlaque
    var maxWidth = positioning[inOrientation].containerWidth - widthOfButtons*2;
    if (inContainer.width > maxWidth){
      //we definitely need to do some resizing
      for (i = 0; i < inArr[inVal].length; i++){
        if (inArr[inVal].length > 1){
          var j;
          //var currentWidth = 0;
          //this is a text field with an image
          //for the time being we need to whack everything back into the center
          //also find the height of the tallest object, we'll need it later
          //var tallest = 0;
          for (j = 0; j < inArr[inVal].length; j++){
            inArr[inVal][j].x = 0;
          }
          
          //right, here we need to work out exactly how much will fit on each line
          //we need to loop through the array, adding the cumulative width
          //as soon as the width has been exceeded, we bump that child down to the next line
          //we know the width of the container with everything centered
          var currentWidth = 0;
          var lineFit = [];
          var lineOverflow = [];
          var lineOverflow2 = [];
          for (j = 0; j < inArr[inVal].length; j++){            
            currentWidth += inArr[inVal][j].width;
            if (currentWidth < maxWidth){
              //current width is less than the max width
              lineFit.push(inArr[inVal][j]);
            }else{
              //current width is greater than the max width
              //bump this child down a tad
              lineOverflow.push(inArr[inVal][j]);
            }
          }

          //ahh, now we need to look at the overflow array and make sure that itself doesn't overflow
          //we can only have one or two elements in the overflow array (an image and the string either side)
          //so if the length is greater than 1 AND the total width of both > container width
          //then move the end one into lineOverflow2
          if (lineOverflow.length > 1){
            if ((lineOverflow[0].width + lineOverflow[1].width) > maxWidth){
              lineOverflow2.push(lineOverflow[1]);
              lineOverflow.splice(1,1);
            }
          }

          //some vertical positioning, we need to space the lines out depending on whether we have two or three
          var numOfLines = 2;
          if (lineOverflow2.length > 0){numOfLines = 3;}

          if (numOfLines === 2){
            //Right, we simply need to work out if the any of the containers in lineFit overlap any of those in lineOverflow
            //as long as we have an overlap, keep subtracting 1 from lineFit and keep adding 1 to lineOverflow
            while(checkOverlap(lineFit, lineOverflow)){
              adjustPosition(lineFit, -1);
              adjustPosition(lineOverflow, 1);
            }

            //now add a buffer
            adjustPosition(lineFit, -spacingBuffer);
            adjustPosition(lineOverflow, spacingBuffer);

          }else if (numOfLines === 3){
            //Keep the centre line in the middle, so raise lineFit
            while(checkOverlap(lineFit, lineOverflow)){
              adjustPosition(lineFit, -1);
              adjustPosition(lineOverflow, 0);
            }

            //now add a buffer
            adjustPosition(lineFit, -spacingBuffer);

            //Keep the centre line in the middle, so lower lineOverflow2
            while(checkOverlap(lineOverflow, lineOverflow2)){
              adjustPosition(lineOverflow, 0);
              adjustPosition(lineOverflow2, 1);
            }

            //now add a buffer
            adjustPosition(lineOverflow2, spacingBuffer);
          }

          //arrange both
          arrangeAndCenter(pageNumber, lineFit, inContainer);
          arrangeAndCenter(pageNumber, lineOverflow, inContainer);
          arrangeAndCenter(pageNumber, lineOverflow2, inContainer);
        }else{
          //single text field, resize using wordWrapWidth
          inArr[inVal][0].style.wordWrap = true;
          var wordWrapWidth = (inOrientation === 'landscape') ? 1264 : portraitWidth;
          inArr[inVal][0].style.wordWrapWidth = wordWrapWidth;
        }     
      }
    }
  }

  function checkOverlap(inArr1, inArr2){
    //we need to check if any containers in inArr1 overlap with any in inArr2
    var outVal = false;
    for (var i = 0; i < inArr1.length; i++){
      //grab this container
      var tempCont = inArr1[i];
      for (var j = 0; j < inArr2.length; j++){
        var tempCont2 = inArr2[j];
        //does tempCont overlap with tempCont2?
        var ab = tempCont.getBounds();
        var bb = tempCont2.getBounds();
        if (ab.x + ab.width > bb.x && ab.x < bb.x + bb.width && ab.y + ab.height > bb.y && ab.y < bb.y + bb.height){
          outVal = true;
        }
      }
    }
    return outVal;
  }

  function adjustPosition(inArr, inVal){
    for (var i = 0; i < inArr.length; i++){
      inArr[i].y += inVal;
    }
  }

  function arrangeAndCenter(pageNumber, arrayOfObjects){
    if (arrayOfObjects.length === 0){return;}
    var totalWidth = 0;
    var thisChild, lastChild;

    // page 1 offsets for icons
    var glowOffset = 50;
    var yOffset = 15;

    // other page offsets
    if(pageNumber === 'page2'){
      glowOffset = 52;
      yOffset = 20;      
    }
    else if(pageNumber === 'page3'){
      glowOffset = 50;
      yOffset = 20;
    }

    for (var i = 0; i < arrayOfObjects.length; i++){
      thisChild = arrayOfObjects[i];
      lastChild = arrayOfObjects[i-1];
      //we don't need to shufty the first child anywhere
      //but we do for subsequent ones
      if (i > 0){
        totalWidth += ((lastChild.width/2 -  glowOffset) + thisChild.width/2);
        thisChild.x += totalWidth;
        thisChild.y += yOffset;
      }else{
        totalWidth += 0;
      }
    }

    //center children
    centerChildren(arrayOfObjects);
  }

  function centerChildren(arrayOfObjects){
    var tempWidth = 0;
    var halfInitWidth = arrayOfObjects[0].width >> 1;
    for (var i = 0; i < arrayOfObjects.length; i++){
      tempWidth += arrayOfObjects[i].width;
      if (arrayOfObjects.length > 1){
        arrayOfObjects[i].x += halfInitWidth;
      }      
    }

    for (var j = 0; j < arrayOfObjects.length; j++){
      if (arrayOfObjects.length > 1){
        arrayOfObjects[j].x -= tempWidth >> 1;
      }      
    }
  }

  function getStrings(inArr){
    var outArr = [];
    for (var i = 0; i < inArr.length; i++){
      var imageFound = false;
      outArr[i] = [];
      var thisStrings = [];
      //search this array for an image placeholder
      if (inArr[i].indexOf('{img}') < 0){
        //no image
        thisStrings.push(inArr[i]);
      }else{
        //we have an image
        thisStrings = inArr[i].split('{img}');
        imageFound = true;
      }

      if (imageFound){
        thisStrings[0] = '{0}';
      }

      outArr[i] = thisStrings.slice();
    }

    return outArr;
  }

  function onOrientationChange(){
    show(orientation.get());
  }

  //HITGA-74 - HITGA_COM:Game UI display bad after resize window
  //HITGA-86 - HITGA_COM_rotation:game UI display bad
  msgBus.subscribe('GameSize.OrientationChange', onOrientationChange);

  return {
    init
  };
});