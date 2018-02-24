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
      // add id and value 

      // Give each "divCard" a value called buttonVale.
      //divCardOuter.attr("value", obj.buttonVal);
      // Then give each divCardOuter a its character name.
      //divCardOuter.text(obj.charName);
      // Append each divCardOuter to the "#available-chars" div.
      $("#available-chars").append(divCardOuter);
      // add class to button
      divButton.addClass("char-button");
      // add button to divCardOuter div
      $(divCardOuter).append(divButton);
      // add classes to upperCardBody
      $(upperCardBody).addClass("card-body");
      // append upperCardBody to divButton
      $(divButton).append(upperCardBody);
      // add classes to upper card paragraph
      $(upperCardPar).addClass("card-text");
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
      $(lowerCardPar).addClass("card-text");
      $(lowerCardPar).attr("id",obj.imgId + "-health");
      $(lowerCardPar).text("Health: " + obj.healthPoints);
      // append lowerCardPar to lowerCardBody
      $(lowerCardBody).append(lowerCardPar);



      $.each( obj, function( key, value ) {
        /* create each character using a bootstrap card layout */
        console.log( key + ": " + value );
/*         var divCardOuter = $("<div>");
        // give divCardOuter the following classes 
        divCardOuter.addClass("card col-sm-12 col-md-12 col-lg-2");
        // add id and value 

        // Give each "divCard" a value called buttonVale.
        divCardOuter.attr("value", value.buttonVal);

        // Then give each "letterBtns" a text equal to "letters[i]".
        divCardOuter.text(value.charName);

        // Append each divCardOuter to the "#available-chars" div.
        $("#available-chars").append(divCardOuter); */
      });
    });

/*     <div class="card col-sm-12 col-md-12 col-lg-2" style="width: 25rem;" id="char1" value="character1">
    <button class="char-button">
    <div class="card-body">
        <p class="card-text" id="char1-name">Character1 Name.</p>
    </div>
      <img class="sw-char img-fluid card-img-top ml-1 mr-1" id="char1-img" src="./assets/images/char1.png" alt="Character 1">
    <div class="card-body">
      <p class="card-text" id="char1-health">Health Points.</p>
    </div>
  </button>
  </div> */


  }

  function initializeGame() {
    console.log("In initializeGame()");

    /* empty section elements */
    $("#available-chars, #hero, #enemies").empty();

    /* fill available characters, reset health points */
    displayAllChars();

    $(".char-button").on("click", function() {
      //$(".sw-char").animate({ height: "500px" });
      console.log("button charbutton clicked");
      var msg = $(this).val();
      console.log("msg: " + msg);
    });

    /* later, put music background */
  }

/*   $(".char-button").on("click", function() {
    //$(".sw-char").animate({ height: "500px" });
    console.log("button charbutton 1 clicked");
    var msg = $(this).val();
    console.log("msg: " + msg);
  }); */
  // initialize game, get available star war characters


  initializeGame();

}); // End of document.ready function

// End of File
