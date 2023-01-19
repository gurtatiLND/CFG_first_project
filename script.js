// go over functions and how to call them
// explain what an alert and a prompt is -- adding interaction to the page

function sayHello() {
    let name = prompt("What is your name?");
    alert("Hello, " + name + "! Welcome to my website.");
}


// this function simulates a dice roll
// explain random values and how you can use them to create a game

function rollDice() {
    let dice = Math.floor(Math.random() * 6) + 1;
    alert("You rolled a " + dice + "!");
}


// use the same logic from the roll dice function to determine how many weeks it will take to 
// get your first developer job (completely random!)

function jobSearch() {
    let weeks = 0;
    let dice = Math.floor(Math.random() * 6) + 1;
    weeks += dice;
    alert("It will take you " + weeks + " weeks to get your first developer job!");
}



// this function takes in your levels of comfort with HTML, CSS and JavaScript on a scale of 1-10 and returns 
// a motivational string depending on the average of the three numbers

function comfortLevel(html, css, js) {
    let average = (html + css + js) / 3;
    if (average >= 7) {
        console.log("You're already on your way to being a pro!");
    } else if (average >= 4) {
        console.log("Don't worry, you'll get there! It just takes time and practice.");
    } else {
        console.log("The only way to get better is to keep trying! You can do this!");
    }
}

let helloButton = document.getElementById("hello-button");
helloButton.addEventListener("click", sayHello);

let rollDiceButton = document.getElementById("roll-dice-button");
rollDiceButton.addEventListener("click", rollDice);

let jobSearchButton = document.getElementById("job-search-button");
jobSearchButton.addEventListener("click", jobSearch);

let comfortLevelButton = document.getElementById("comfort-level-button");
comfortLevelButton.addEventListener("click", function () {
    let html = prompt("Enter your comfort level with HTML (1-10)");
    let css = prompt("Enter your comfort level with CSS (1-10)");
    let js = prompt("Enter your comfort level with JavaScript (1-10)");
    comfortLevel(html, css, js);
});