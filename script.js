let soundy, backy;

//checks to see fi the audio player is playing or not 
function isPlaying(audelem){
    return !audelem.paused;//returns true or false;
}

//wait until page and all html elements load
window.onload = function(){
    soundy = document.querySelector(".myAudio");
    //soundy.preservePitch = false;
    backy = document.querySelector(".colorBlock");
    //executed the function called update every 10000 milisecond
    setInterval(update(),1000);
}

function update(){
if(isPlaying(soundy)){
    soundy.playbackRate = (Math.random()*3.9) + .1;
    }
if(soundy.playbackRate > 2){
    backy.style.backgroundColor = "red";

}
else{
    backy.style.backgroundColor = "blue";

}

}

