var character = document.getElementById("character");
var board = document.getElementById("board");
var flower = document.getElementById("flower");
var score = document.getElementById("score");
var bird = document.getElementById("bird");
var fall = 0;
var counter = 0;
var currentClouds = [];
var both = 0;
var feet = 0;


function moveLeft(){
    var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if (left > 0) {
        character.style.left = left - 2 + "px";
    }
}

function moveRight(){
    var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if (left < 900) {
        character.style.left = left + 2 + "px";
    }
}

function jump() {
    var top = parseFloat(window.getComputedStyle(character).getPropertyValue("top"));
    if (top == 149) {
        fall = 1;
    }
    if (top == 317) {
        fall = 0;
        clearInterval(interval);
    }
    if (fall == 0) {
        if (top >= 150) {
            character.style.top = top - 2 + "px";
    }
} else { 
        if (top <= 315) {
            character.style.top = top + 2 + "px";
        }
    }
}

document.addEventListener("keydown", event => {
    if (both == 0) {
    if (event.keyCode == 32) {
        interval = setInterval(jump, 1);
    } else if(event.key =="ArrowLeft"){
        interval = setInterval(moveLeft, 1);
    } else if(event.key == "ArrowRight"){
        interval = setInterval(moveRight, 1);
    }
    both++;
}
});


document.addEventListener("keyup", event => {
    var top = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(event.key == "ArrowLeft" || event.key == "ArrowRight"){
        both = 0;
        clearInterval(interval);
    }
});

setInterval(function() {
    feet++;
    score.innerHTML="FEET SHREDED  " + Math.floor(feet / 50);
    var flowerLeft = parseInt(window.getComputedStyle(flower).getPropertyValue("left"));
    var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    var birdLeft = parseInt(window.getComputedStyle(bird).getPropertyValue("left"));
    var flowerTop = parseInt(window.getComputedStyle(flower).getPropertyValue("top"));
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    birdTop += 197;
    birdLeft += 885;
    flowerLeft += 780;
    flowerTop += 50;
    if (birdLeft <= (characterLeft + 75) && birdLeft >= (characterLeft - 75)){
        if (birdTop > characterTop) {
            if(!alert("Remember to press SPACE BAR to OLIE and the ARROW KEYS to move FORWARD and BACKWARD, little dude. AND don't gnar the flowers or yeet the birds. Nature is steezy!")){window.location.reload();}
        } 
    }
    if (flowerLeft <= (characterLeft + 150) && flowerLeft >= (characterLeft)) {
         if (flowerTop < characterTop) {
            if (!alert("Remember to press SPACE BAR to OLIE and the ARROW KEYS to move FORWARD and BACKWARD, little dude. AND don't gnar the flowers or yeet the birds. Nature is steezy!")){window.location.reload();}
         }
     }
},1);



 


