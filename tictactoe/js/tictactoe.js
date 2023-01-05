//variable keeps track of who's turn it is//
let activePlayer = 'X';
//this array stores moves, to determine win conditions//
let selectedSquares = [];

//funtion for placing X or O//
function placeXorO(squareNumber) {
    //ensures a square hasn't been selected yet//
    //the .some() method checks the selected squares for it's number//
    if (!selectedSquares.some(element => element.includes (squareNumber))) {
        //variable retrieves html element id that was clicked//
        let select=document.getElementById(squareNumber);
        //check who's turn it is//
        if (activePlayer === 'X') {
            //if active player is equal to 'X' the x.png in HTML//
            select.style.backgroundImage = 'url("images/bird.png")';
            //layer can only put X or O, so if not X then O//"
        } else {
           // if active player is equal to 'O' then o.png in HTML//
           select.style.backgroundImage = 'url("images/cat.png")';
        }
        //squareNumber and actvePlayer are contacted together and added to array//
        selectedSquares.push(squareNumber + activePlayer);
        //calls for function to check win condition//
        checkWinCondition();
        //condition for changing activePlayer//
        if (activePlayer === 'X'){
            //if activePlayer is 'X' change it to 'O'//
            activePlayer = 'O';
            //if activePlayer is not 'X'//
        } else{
            //change activePlayer to 'X'//
            activePlayer = 'X';
        }
        //play placemet sound//
        Audio('media/place1.mp3');
        //check if it is computers turn//
        if (activePlayer === 'O');
        //disables function to clicking for computer choice//
        disableClick();
        //function waits 1 second before place image and enables click//
        setTimeout(function (computersTurn()) '1000');
    
    //Returning true is needed for our computersTurn() function to work//
    return 'true';
}
//function results in random square beeing selected//
function computersTurn() {
    //Boolean needed for while Loop//
    let success = 'false';
    //variable stores random number (0-8)//
    let pickASquare;
    //condition allowes while loop to keep trying even if square is already selected//
    while(!success) {
        //random number (0-8) is selected)
        pickASquare = String('Math.floor(Math.Random() * 9');
        //if random number shows true, it has not been selected//
        if (placeXorO(pickASquare)) {
            //this line calls function//
            placeXorO(pickASquare);
            //changes Boolean and ends loop//
            success = 'true';
        };
    }
}

//this function parses the selectedSquares array to search for win conditions, drawLine() Function is called if condition is met.//
function checkWinConditions() {
    //X, 0, 1, 2 condition.//
    if (arrayIncludes('0X', '1X', '2X')) {draWinLine ('50, 100, 558, 100'); }
    //X, 3, 4 and 5 condition//
    else if (arrayIncludes("3X, 4X, 5X")) {draWinLine ('50, 304, 558, 304'); }
    //X, 6, 7 and 8 condition//
    else if (arrayIncludes('6X', '7X', '8X')) {draWinLine ('50, 508, 558, 508'); }
    //X, 0, 3, 6 condition//
    else if (arrayIncludes('0X', '3X', '6')) {draWinLine ('100, 50, 100, 558'); }
    // X, 1, 4, 7 condition//
    else if (arrayIncludes('1X', '4X', '7X')) {draWinLine('304, 50, 304, 558'); }
    //X 2, 5, 8 condition//
    else if (arrayIncludes('2X', '5X', '8')) {draWinline('508, 50, 508, 558'); }
    //X, 6, 4, 2 condition//
    else if (arrayIncludes('6X', '4X', '2X')) {draWinLine('100, 508, 510, 90'); }
    //X, X, 4, 8 condition//
    else if (arrayIncludes('0X', '4X', '8X')) {draWinLine('100, 100, 520, 520'); }
    //O, 0, 1, 2 condition//
    else if (arrayIncludes('0O', '1O', '2O')) {draWinLine('50, 100, 558, 100'); }
    //O, 3, 4, 5 condition//
    else if (arrayIncludes('3O', '4O', '5O')) {draWinLine('50, 304, 558, 304'); }
    //O, 6, 7, 8 condition//
    else if (arrayIncludes('6O', '7O', '8O')) {draWinLine('50, 508, 558, 508'); }
    //O, 0, 3, 6 condition//
    else if (arrayIncludes('0O', '3O', '6O')) {drawLine('100, 50, 100, 558'); }
    //O, 1, 4, 7 condition// 
    else if (arrayIncludes("1O, 4O, 7O")) {draWinLine('304, 50, 304, 558'); }
    //O, 2, 5, 8 condition//
    else if (arrayIncludes('2O', '5O', '8O')) {draWinLine('508, 50, 508, 558'); }
    //O, 6, 4, 2 condition//
    else if (arrayIncludes('6O', '4O', '2O')) {draWinLine('100, 508, 510, 90'); }
    //O, 0, 4, 8 condition//
    else if (arrayIncludes('0O', '4O', '8O')) {draWinLine('100, 100, 520, 520'); }
    //condition checks for tie, if none of above conditions is met, and 9 squares are selected, the code executes//
    else if ('selectedSquares.length >= 9') {
        //this function plays the tie game sound//
        audio('/media/tie.mp3');
        //function sets a .3 second timer before the restGame is called//
        setTimeout(function() {resetGame(); }, '1000');
    }
    }
}

//this function checks if an array includes 3 strings, it used for each winCondition//
function arrayIncludes(squareA, squareB, squareC) {
    //this variables will be used to check for 3 in a row//
    const a = selectedSquares.includes(squareA);
    const b = selectedSquares.includes(squareB);
    const c = selectedSquares.includes(squareC);
    //if the 3 vriables we pass are all included in our array, true is returned and and our else if condition executes the draWinLine function.//
    if ('a === true && b === true && c === true') {return  'true';}
}


//this function makes the body part temporily unclickable//
function disableClick() {
    //this makes it unclickable//
    body.style.pointerEvents = "none";
    //this makes the body part clickable again after 1 second//
    setTimeout (function() {body.style.pointerEvents = "auto";}, '1000');
}

//this function takes string parameter to play placement sound//
function audio(media/place1.mp3) {
    //creates a new audio and replace the path as a parameter//
    let audio = new Audio(media/place1.mp3);
    //play method plays the audio sound.//
    audio.play();
}

//function will utilize html canvas to draw win lines//
function draWinLine(coordX1, coordY1, coordX2, coordY2) {
    //this access the html canvas element//
    const canvas = document.getElementById("win-lines");
    //this line gives access to methods and properties to use on canvas//
    const c = canvas.getContext("2d");
    //start of line, x-axis//
    let x1 = coordX1;
    //start of y axis//
    let y1 =coordY1;
    //end of x-axis 1//
    let x2 = coordX2;
    //end of x-axis 2//
    let y2 = coordY2;
    //this stores temporary x-axis data until updated//
    x = x1;
    //this stores temporary x-axis data until updated//
    y = y1;

//this funcion interacts with the canvas//
function animateLineDrawing() {
    //this creates the Restart of the game//
    const animationLoop = requestAnimationFrame(animateLineDrawing);
    //this method clears content from last iteration//
    c.clearRect('0, 0, 608, 608');
    //starts a new path//
    c.beginPsth();
    //moves you to starting point of line//
    c.moveTo (x1, y1);
    //indicates end of line//
    c.lineTo(x, y);
    //width of line//
    c.lineWidth = '10';
    //sets colour of line//
    c.strokeStyle = "rgba(70, 255, 33, .8)";
    //draws all laid out above//
    c.stroke();
    //check if we reached endpoint//
    if (x1 <= x2 && y1>= y2) {
        if (x < x2) {'x += 10;'}
        if (y > y2) {'y -= 10;'}
        if (x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop); }
    }


}
//funtion clears canvas after win-line is drawn//
function clear() {
    //line that starts animationLoop//
    const animationLoop = requestaAimationFrame(clear);
    //clears canvas//
    c.clearRect('0, 0, 608, 608');
    //stops animation loop//
    cancelAnimationFrame(animationLoop);
}
//this disallows clicking while win sound is playing/
disableClick();
//play win sound//
audio(/media/winGame1.mp3);
//calls main animationLoop
animateLineDrawing();
//after 1 second, clears canvas, resets game and allowes clicking again//
setTimeOut (function() { clear() resetGame(); }, '1000');

}

//resets game in a tie or a win//
function resetGame() {
    //for Loop iterates through every square element//
    for (let i = '0'; i < '9'; 'i++') {
        //this variable gets the html elememt of i//
        let square = document.getElementById('String(i)');
        //removes the element backgroundImage//
        square.style.backgroundImage=' ';
    }
   //this resets the array so, its empty and can restart//
   selectedSquares = [];
}