// ASSESSMENT:
// There is a div in the index.html file which will be animated
// Edit question4.css and this file for this assessment(You should do the css part in css file)

// Before animating, center this div both vertically and horizontally in the middle of viewport
// After that, when we click the buttons inside of this div
// The div should animate
// For 'Rotate 360' button, it should do 360° rotation on its center in 1 second
// For 'Go Up and Down' button, it should go up touch the top of the viewport and return to middle in 1 second
// Example is presented in question4.gif
// Don't forget to add your css and javascript to index.html file

const rotate = document.getElementById("rotate-button");
const anime = document.getElementById("to-be-animated");
const up_down = document.getElementById("up-down-button");

rotate.addEventListener("click",döndür);
up_down.addEventListener("click",zıplat);

function döndür(){
    console.log("button tetiklendi")
    anime.style.transform="rotate(360deg)";
    anime.style.transition="all 1s ease-in-out";
}

function zıplat(){
    console.log("zıplat tetiklendi")
    anime.style.animationName="up-down";
    anime.style.animationDuration="1s";
}