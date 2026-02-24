/*    JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
     Author: 
     Date:   

     Filename: js03.js
 */

let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

wubdiw.addEventListener("load", addWeekdays);

// Function to add the weekday names to the calendar
function addWeekdays() {
    let i = 0; // Initial counter value

    // reference the collection of heading cells
    let headingCells = document.getElementByTagName("th");

    // reference the coolection of heading cells
    while (i < 7) {
        headingCells[i].innerHTML = weekDays[i];

        // increase the counter by 1
        i++;
    }
}


window.addEventListener("load", showGames);

// Function to write game information into calendar
function showGames() {
    for (let i = 0; i < gameDates.length; i++) {
        let gameInfo = "";

        // Open the paragraph
        switch (gameResults[i]) {
            case "W":
                gameInfo += "<p class='win'>";
                break;
            case "L":
                gameInfo += "<p class='loss'>";
                break;
            case "S":
                gameInfo += "<p class='suspended'>";
                break;
            case "P":
                gameInfo += "<p class='postponed'>";
                break;
        }

        // Display the game location
        if (gameLocations[i] === "h") {
            gameInfo += "vs. ";
        } else if (gameLocations[i] === "a") {
            gameInfo += "@ ";
        }

        // Include the opponent
        gameInfo += gameOpponents[i] + "<br>";

        // Include the results and score
        gameInfo += gameResults[i] + ": (" + runsScored[i] + " - " + runsAllowed[i] + ")";

        //Display innings played for suspended, shortened, or extra innings games
        if (gameinnings[i] < 5) {
            gameInfo += " [" + gameInnings[i]+"]***";
        } else if (gameInnings[i] < 9) {
            gameInfo += " [" + gameInnings[i]+"]*";
        } else if (gameInnings[i] > 9) {
            gameInfo += " [" + gameInnings[i]+"]";
        }

        // Close the paragraph
        gameInfo += "</p>";

        // Write the information into a table cell
        let tableCell = document.getElementById(gameDates[i]);
        tableCell.insertAdjacentHTML("beforeEnd", gameInfo)

    }
}
