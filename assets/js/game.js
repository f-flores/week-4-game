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
      imgId: "swchar-1",
      imgName: "char1.png",
      currentSection: 0, 
      toggleState: 1
    }, 
    swChar2 = {
      buttonVal: "character2",
      charName: "Character2 Name",
      healthPoints: 100,
      imgId: "swchar-2",
      imgName: "char2.png",
      currentSection: 0, 
      toggleState: 1
    }, 
    swChar3 = {
      buttonVal: "character3",
      charName: "Character3 Name",
      healthPoints: 100,
      imgId: "swchar-3",
      imgName: "char3.png",
      currentSection: 0, /* default section is available*/
      toggleState: 1
    }, 
    swChar4 = {
      buttonVal: "character4",
      charName: "Character4 Name",
      healthPoints: 100,
      imgId: "swchar-4",
      imgName: "char4.png",
      currentSection: 0, /* default section is available*/
      toggleState: 1
    };

/* the data structure for the characters is an array of objects */
  var swObjArray = [ swChar1, swChar2, swChar3, swChar4];
  var x = 2;
  console.log("rpg game x:" + x);
  console.log("swObjArray: " + swObjArray);

//------------------------------------------------------------------------------------------
// FUNCTIONS
//
  function displayAllChars() {
    /* traverse swObjArray */
    /* dynamically create objects */
    $.each(swObjArray, function( index, obj ) {
      console.log( index + ": " + obj.charName );
      var divCardOuter = $("<div>");
      var divButton = $("<button>");
      var upperCardBody = $("<div>");
      var upperCardPar = $("<p>");
      var buttonImg = $("<img>");
      var imgFile = IMG_PATH + obj.imgName;
      var lowerCardBody = $("<div>");
      var lowerCardPar = $("<p>");

      // give divCardOuter the following classes 
      divCardOuter.addClass("card col-sm-12 col-md-6 col-lg-2");
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
      $(buttonImg).attr("id",obj.imgId);
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
      $(lowerCardPar).attr("id",obj.imgId + "-health");
      $(lowerCardPar).text("Health: " + obj.healthPoints);
      // append lowerCardPar to lowerCardBody
      $(lowerCardBody).append(lowerCardPar);

      $.each( obj, function( key, value ) {
        /* create each character using a bootstrap card layout */
        console.log( key + ": " + value );
      });
    });
  }

  function initializeGame() {
    console.log("In initializeGame()");

    /* empty section elements */
    $("#available-chars, #hero, #enemies").empty();

    /* fill available characters, reset health points */
    displayAllChars();

    /* later, put music background, default is mute */
  }

  /*******************************************************************************
   * selectHero() on clicking a button image of a star war character
   */
  function selectHero() {
    console.log("in selectHero()");

    $(".sw-char-button").on("click", function() {
      //$(".sw-char").animate({ height: "500px" });
      console.log("button charbutton clicked");
      var msg = $(this).val();
      console.log("msg: " + msg);
    }); 
  }

/*   $(".char-button").on("click", function() {
    //$(".sw-char").animate({ height: "500px" });
    console.log("button charbutton 1 clicked");
    var msg = $(this).val();
    console.log("msg: " + msg);
  }); */
  // initialize game, get available star war characters


  initializeGame();
  selectHero();
//  selectEnemy();

}); // End of document.ready function

// End of File
