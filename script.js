

let video = document.getElementById("video1");
let btnPlayPause = document.getElementById("playPause");
let btnPausePlay = document.getElementById("pausePlay")

let listavideo1 = document.getElementById("listavideo1")
let listavideo2 = document.getElementById("listavideo2")
let listavideo3 = document.getElementById("listavideo3")
let listavideo4 = document.getElementById("listavideo4")
let listavideo5 = document.getElementById("listavideo5")


function retroceder() {
        video.currentTime -= 15;
}

function diminuirVel() {
        video.playbackRate -= 0.1
}

function playP() {
        if (video.paused) {
                btnPlayPause.setAttribute("src", "./assets/images/pause.svg");
                video.play();
                console.log("play");
                
        } else{
                btnPlayPause.setAttribute("src", "./assets/images/play.svg");
                video.pause();
                console.log("pause");
        }
}


function stop() {
        video.pause();
        video.currentTime = 0;
        video.playbackRate = 1;
        btnPlayPause.setAttribute("src", "./assets/images/play.svg");   
}

function aumentarVel() {
        video.playbackRate += 0.1;
}

function avancar() {
        video.currentTime += 15;
}


function mouseEmCima() {
        document.getElementsByClassName("controle")[0].style.display = "block";
}

function mouseFora() {
        document.getElementsByClassName("controle")[0].style.display = "none";
}

listavideo1.addEventListener("click", function () {
        video.innerHTML = video.setAttribute("src", "./assets/video/The Witcher 3- A night to remember.mp4")
        video.innerHTML = video.setAttribute("poster", "./assets/images/witcher-poster.jpg")
        btnPlayPause.setAttribute("src", "./assets/images/play.svg");
})

listavideo2.addEventListener("click", function () {
        video.innerHTML = video.setAttribute("src", "./assets/video/The Witcher 3- Wild Hunt - Killing Monsters Cinematic Trailer.mp4")
        video.innerHTML = video.setAttribute("poster", "./assets/images/the witcher 3 - killing monsters.jpg")
        btnPlayPause.setAttribute("src", "./assets/images/play.svg");
})

listavideo3.addEventListener("click", function () {
        video.innerHTML = video.setAttribute("src", "./assets/video/Cyberpunk 2077 Teaser Trailer.mp4")
        video.innerHTML = video.setAttribute("poster", "./assets/images/cyberpunk2077.jpg")
        btnPlayPause.setAttribute("src", "./assets/images/play.svg");
})

listavideo4.addEventListener("click", function () {
        video.innerHTML = video.setAttribute("src", "./assets/video/Assassin's Creed 3  - E3 Official Trailer.mp4")
        video.innerHTML = video.setAttribute("poster", "./assets/images/assassins creed 3.jpg")
        btnPlayPause.setAttribute("src", "./assets/images/play.svg");
})

listavideo5.addEventListener("click", function () {
        video.innerHTML = video.setAttribute("src", "./assets/video/Assassin's Creed 2 E3 Trailer.mp4")
        video.innerHTML = video.setAttribute("poster", "./assets/images/assassins creed 2.jpg")
        btnPlayPause.setAttribute("src", "./assets/images/play.svg");
})