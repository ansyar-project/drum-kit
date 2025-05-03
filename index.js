var drumButtons = document.querySelectorAll(".drum");
var numberOfDrumButtons = drumButtons.length;
var tom_1 = new Audio("./sounds/tom-1.mp3");
var tom_2 = new Audio("./sounds/tom-2.mp3");
var tom_3 = new Audio("./sounds/tom-3.mp3");
var tom_4 = new Audio("./sounds/tom-4.mp3");
var kick = new Audio("./sounds/kick-bass.mp3");
var snare = new Audio("./sounds/snare.mp3");
var crash = new Audio("./sounds/crash.mp3");

for (var i = 0; i<numberOfDrumButtons; i++){
    drumButtons[i].addEventListener("click", function(){
        var buttonInnerHtml = this.innerHTML;
        soundEventCheck(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
}

document.addEventListener("keydown", function(event){
    var keyDowned = event.key;
    soundEventCheck(keyDowned);
    buttonAnimation(keyDowned);
})

function soundEventCheck(key) {
    switch (key) {
        case "w":
            playSound("./sounds/crash.mp3");
            break;
        case "a":
            playSound("./sounds/kick-bass.mp3");
            break;
        case "s":
            playSound("./sounds/snare.mp3");
            break;
        case "d":
            playSound("./sounds/tom-1.mp3");
            break;
        case "j":
            playSound("./sounds/tom-2.mp3");
            break;
        case "k":
            playSound("./sounds/tom-3.mp3");
            break;
        case "l":
            playSound("./sounds/tom-4.mp3");
            break;
    
        default:
            console.log(key)
            break;
    }
}

function playSound(src){
    var sound = new Audio(src);
    sound.play();
}

function buttonAnimation(key){
    var activeButton = document.querySelector(`.${key}`);
    // console.log(activeButton);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}