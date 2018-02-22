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
// VARIABLES AND OBJECTS
//
const MAX = 10;
const DEBUG = false;

var gameSection = ["available","yourCharacter","enemiesAvailable"];

var char1 = {
    charName1: "Character Name 1",
    healthPoints: 100,
    imgName: "char1.png",
    currentSection: ""
};






//------------------------------------------------------------------------------------------
//
// FUNCTIONS
//




//------------------------------------------------------------------------------------------
//
// MAIN PROCEDURE
//

$(document).ready(function() {
//  var elem1 = $("#e1");
  var x = 2;
  console.log("rpg game x:" + x);
});

// $(document).on("click",".button", function() {})
