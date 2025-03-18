document.addEventListener("DOMContentLoaded", function () {
    let music = document.getElementById("background-music");
    let toggleButton = document.getElementById("music-toggle");

    toggleButton.addEventListener("click", function () {
        if (music.paused) {
            music.play();
            toggleButton.textContent = "Pause Music";
        } else {
            music.pause();
            toggleButton.textContent = "Play Music";
        }
    });
});