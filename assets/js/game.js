/*****************************************************************************************
 *  
 * File name: game.js
 * Author: Fabian Flores
 * Date: February, 2018
 * Description: This javascript file implements the Star Wars RPG game. The user selects
 *  an attacker and a defender. The goal of the game is for the attacker to beat the enemy
 *  defender.
 * 
 ******************************************************************************************/

//------------------------------------------------------------------------------------------
//
// GLOBAL VARIABLES AND OBJECTS
//
const MAX = 10;
const DEBUG = false;
const IMG_PATH = "./assets/images/";


//------------------------------------------------------------------------------------------
//
// GLOBAL FUNCTIONS
//


//------------------------------------------------------------------------------------------
//
// MAIN PROCEDURE
//

$(document).ready(function() {
//------------------------------------------------------------------------------------------
// VARIABLES
//
  var gameSection = ["available","yourCharacter","enemiesAvailable"];
  /* star war character objects */
  var swChar1 = {
      buttonVal: "character1",
      charName: "Character1 Name",
      healthPoints: 100,
      swCharId: "swchar-1",
      imgName: "char1.png",
      currentSection: 0, 
      charNum: 1
    }, 
    swChar2 = {
      buttonVal: "character2",
      charName: "Character2 Name",
      healthPoints: 100,
      swCharId: "swchar-2",
      imgName: "char2.png",
      currentSection: 0, 
      charNum: 2
    }, 
    swChar3 = {
      buttonVal: "character3",
      charName: "Character3 Name",
      healthPoints: 100,
      swCharId: "swchar-3",
      imgName: "char3.png",
      currentSection: 0, /* default section is available*/
      charNum: 3
    }, 
    swChar4 = {
      buttonVal: "character4",
      charName: "Character4 Name",
      healthPoints: 100,
      swCharId: "swchar-4",
      imgName: "char4.png",
      currentSection: 0, /* default section is available*/
      charNum: 4
    };

/* the data structure for the characters is an array of objects */
  var swObjArray = [ swChar1, swChar2, swChar3, swChar4];
  var x = 2;
  console.log("rpg game x:" + x);
  console.log("swObjArray: " + swObjArray);

//------------------------------------------------------------------------------------------
// FUNCTIONS
//
  function displayStarwarChars() {
    /* traverse swObjArray */
    /* dynamically create objects */
    $.each(swObjArray, function( index, obj ) {
      console.log( index + ": " + obj.charName );
      // block elements used to build each character's 'game card'
      var divCardOuter = $("<div>");
      var divButton = $("<button>");
      var upperCardBody = $("<div>");
      var upperCardPar = $("<p>");
      var buttonImg = $("<img>");
      var imgFile = IMG_PATH + obj.imgName;
      var lowerCardBody = $("<div>");
      var lowerCardPar = $("<p>");

      // give divCardOuter the following classes 
      divCardOuter.attr("id", obj.swCharId + "-card");
      divCardOuter.addClass("card col-sm-12 col-md-6 col-lg-2 sw-card");
      divCardOuter.attr("style","width: 25rem;");
      // Append each divCardOuter to the "#available-chars" div.
      $("#available-chars").append(divCardOuter);
      // add class to button
      divButton.addClass("sw-char-button");
      // add button to divCardOuter div
      $(divCardOuter).append(divButton);
      // add classes to upperCardBody
      $(upperCardBody).addClass("card-body");
      // append upperCardBody to divButton
      $(divButton).append(upperCardBody);
      // add classes to upper card paragraph
      $(upperCardPar).addClass("card-text sw-text");
      // add id to paragraph based on button value's id
      $(upperCardPar).attr("id",obj.buttonVal);
      $(upperCardPar).text(obj.charName);
      // append paragraph to upper card body
      $(upperCardBody).append(upperCardPar);
      // add classes and attributes to buttonImg
      $(buttonImg).addClass("sw-char img-fluid card-img-top ml-1 mr-1");
      $(buttonImg).attr("id",obj.swCharId+"-img");
      $(buttonImg).attr("src",imgFile);
      $(buttonImg).attr("alt",obj.charName);
      // append image to divButton
      $(divButton).append(buttonImg);
      // add classes to Lower card body
      $(lowerCardBody).addClass("card-body");
      // append lowerCardBody to divButton
      $(divButton).append(lowerCardBody);
      // lowerCardPar classes and attributes
      $(lowerCardPar).addClass("card-text sw-text");
      $(lowerCardPar).attr("id",obj.swCharId + "-health");
      $(lowerCardPar).text("Health: " + obj.healthPoints);
      // append lowerCardPar to lowerCardBody
      $(lowerCardBody).append(lowerCardPar);
    });
  }

  function initializeGame() {
    // empty section elements 
    $("#available-chars, #hero, #enemies").empty();

    // fill available characters, reset health points
    displayStarwarChars();

    // later, put music background, default is mute 
  }

  /*******************************************************************************
   * selectHero() on clicking a button image of a star war character
   */
  function selectHero() {
 
    console.log("in selectHero()");
    var heroId = "";
    var enemyId = "";
    var isHeroSelected = false;
    var indexSwCard = 0;
    $(".sw-card").on("click", function() {
      // get index of card clicked in swObjArray -- dependent on way card's 'id' is named
      // 'id' is of the form 'swchar-1-card', so number of card is always in seventh position
      indexSwCard = parseInt($(this).attr("id").slice(7,8)) - 1; 
      // only if card's current section value is 0... to avoid having multiple heroes
      if ( (swObjArray[indexSwCard].currentSection === 0) && (isHeroSelected === false) ) {
        // get star war's character id from card-'s value
        heroId = $("#" + $(this).attr("id"));

        console.log("indexSwCard: " + indexSwCard);
        console.log("card: " + $(this).attr("id") + " section: " + swObjArray[indexSwCard].currentSection);
        swObjArray[indexSwCard].currentSection = 1; // 1 represents hero's section
        // have hero character disappear from section, without deleting its content
        $(heroId).detach();
        // attach hero character selected to '#hero' div
        $("#hero").append(heroId);


        // the non-clicked cards will be moved to the enemies section
        $.each(swObjArray, function( index, obj ) {
          console.log("in each loop");
          if (obj.currentSection !== 1) {
            enemyId = $("#" + obj.swCharId + "-card");
            obj.currentSection = 2; // 2 represent's enemies section section
            $(enemyId).detach();
            $("#enemies").append(enemyId);
          }
          console.log("obj.charName: " + obj.charName + " obj.currentSection: " + obj.currentSection);
        });

        isHeroSelected = true;
        console.log("obj current section: " + swObjArray[indexSwCard].currentSection);
      }



    }); 
  }

  /*****************************************************************************************
   * selectEnemy picks enemy hero fights against
   */
  function selectEnemy() {
    console.log("inSelectEnemy");
    var isEnemySelected = false;
    
    $(".sw-card").on("click", function() {

      console.log("in select enemy click");
      indexSwCard = parseInt($(this).attr("id").slice(7,8)) - 1; 
      // only if card's current section value is 0... to avoid having multiple heroes
      if ( (swObjArray[indexSwCard].currentSection === 2) && (isEnemySelected === false)) {
        console.log("potential enemy selected");
        // get star war's character id from card-'s value
        enemyId = $("#" + $(this).attr("id"));

        console.log("indexSwCard: " + indexSwCard);
        console.log("card: " + $(this).attr("id") + " section: " + swObjArray[indexSwCard].currentSection);
        swObjArray[indexSwCard].currentSection = 3; // 1 represents the current enemy section
        // have hero character disappear from section, without deleting its content
        $(enemyId).detach();
        // attach hero character selected to '#hero' div
        $("#current-enemy").append(enemyId);
        console.log("obj current section: " + swObjArray[indexSwCard].currentSection);
        isEnemySelected = true;
      }
    });
  }

  initializeGame();
  selectHero();
  selectEnemy();

}); // End of document.ready function

// End of File
