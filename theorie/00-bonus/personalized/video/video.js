"use strict";
/**
 * Une fois un élément vidéo selectionné, nous avons accès à plusieurs méthodes et propriété comme :
 * .play() qui lance la vidéo.
 * .pause() qui met la vidéo en pause.
 * .currentTime qui donne ou paramètre le temps de la vidéo en seconde.
 * .muted qui est un boolean indiquant si le son de la vidéo est coupé ou non
 * .volume qui prend un chiffre entre 0 et 1 indiquant le volume.
 * .controls qui est un boolean affichant ou non les contrôls par défaut de HTML5
 * .duration qui indique la durée totale de la vidéo.
 * .paused qui est un boolean indiquant si la vidéo est en pause.
 * .ended qui est un boolean indiquant si la vidéo est terminé.
 * Et pleins d'autres qui peuvent avoir leur utilité.
 */

const video = document.querySelector('video');
const controls = document.querySelector('#videoControls');
const play = document.querySelector('#play');
const playPause = document.querySelectorAll('.playPause use');
const current = document.querySelector('#current');
const duration = document.querySelector('#duration');
const search = document.querySelector('#progressSearch');
const progress = document.querySelector('#progressBar');
const tSearch = document.querySelector('#timeSearch');
const centerPlay = document.querySelector('#playCenter');
const contain = document.querySelector('#videoContainer');

const videoWorks = !!document.createElement('video').canPlayType;

/* Si javascript est activé et que le navigateur gère canPlayType 
alors on désactive les contrôles par défaut et affiche les notres */
if(videoWorks){
    video.controls = false;
    controls.classList.remove("hide");
}
play.addEventListener('click', togglePlay);
video.addEventListener('click', ()=>{
    togglePlay();
    animateCenterPlay();
});
video.addEventListener('play', updatePlayPause);
video.addEventListener('pause', updatePlayPause);
video.addEventListener('loadedmetadata', initializeVideo);
video.addEventListener("mouseenter", showControls);
video.addEventListener("mouseleave", hideControls);
controls.addEventListener("mouseenter", showControls);
controls.addEventListener("mouseleave", hideControls);
video.addEventListener("timeupdate", ()=>{
    updateCurrent();
    updateProgress();
});
search.addEventListener('mousemove', updateTimeSearch);
search.addEventListener('input', jumpTo);
document.body.addEventListener('keypress', keyboardShortcuts);
function togglePlay(){
    /* si notre vidéo est en pause ou fini, alors on la joue, sinon
    on la met en pause.  */
    if(video.paused || video.ended){
        video.play();
    }else{
        video.pause();
    }
}
function updatePlayPause(){
    playPause.forEach(icon => icon.classList.toggle("hide"));
    if(video.paused){
        play.setAttribute('data-title', "Play");
    }else{
        play.setAttribute('data-title', "Pause");
    }
}
function formatTime(timeInSeconds){
    // toISOSTRING  formate comme cela : YYYY-MM-DDTHH:mm:ss:sssZ
    const result = new Date(timeInSeconds * 1000).toISOString().substring(11,19);
    return {
        minutes: result.substring(3, 5),
        seconds: result.substring(6,8)
    }
}
function initializeVideo(){
    const videoDuration = Math.round(video.duration);
    search.setAttribute("max", videoDuration);
    progress.setAttribute("max", videoDuration);
    const time = formatTime(videoDuration);
    duration.innerText = `${time.minutes}:${time.seconds}`;
    duration.setAttribute("datetime", `${time.minutes}m ${time.seconds}s`);
}
function updateCurrent(){
    const time = formatTime(Math.round(video.currentTime));
    current.innerText = `${time.minutes}:${time.seconds}`;
    current.setAttribute("datetime", `${time.minutes}m ${time.seconds}s`);
}
function updateProgress(){
    search.value = Math.floor(video.currentTime);
    progress.value = Math.floor(video.currentTime);
}
function updateTimeSearch(event){
    /* On multiplie l'attribut max de la cible de l'évènement par la position X de la sourie divisé par la largeur de la cible.
    le tout arrondi. */
    const skipTo = Math.round((event.offsetX / event.target.clientWidth)* parseInt(event.target.getAttribute("max"), 10));
    /* on paramètre un attribut data-search à notre élément "search" */
    search.setAttribute("data-search", skipTo);
    const t = formatTime(skipTo);
    tSearch.textContent = `${t.minutes}:${t.seconds}`;
    /* On récupère les dimensions de l'élément vidéo. */
    const rect = video.getBoundingClientRect();
    /* On décale notre élément selon la position de l'évènement et la dimension de l'élément vidéo. */
    tSearch.style.left = `${event.pageX - rect.left}px`;
}
function jumpTo(event){
    /* Est ce que la cible de notre évènement à un attribut data-search ? si oui on prend sa valeur, sinon on prend son attribut value */
    const skipTo = event.target.dataset.search ? event.target.dataset.search : event.target.value;
    video.currentTime = skipTo;
    progress.value= skipTo;
    search.value = skipTo;
}
function animateCenterPlay(){
    centerPlay.animate([
        {
            opacity: 1,
            transform: "scale(1)",
        },
        {
            opacity: 0,
            transform: "scale(1.3)",
        }
    ], {
        duration: 500,
    });
}
function hideControls(){
    if(video.paused){ return; }
    controls.classList.add("hider");
}
function showControls(){
    controls.classList.remove("hider");
}
function fullScreen(){
    if(document.fullscreenElement){
        document.exitFullscreen();
    }else{
        contain.requestFullscreen();
    }
}
function updateVolume(){
    if(video.muted){
        video.muted = false;
    }else{
        video.muted = true;
    }
    // TODO: gérer le niveau du son.
}
function updateSize(){
    if(video.width <500){
        video.width = 800;
    }else{
        video.width = 400;
    }
    // TODO: différentes tailles responsives
}
function keyboardShortcuts(e){
    switch(e.key){
        case " ":
            togglePlay();
            animateCenterPlay();
            break;
        case "M":
        case "m":
            updateVolume();
            break;
        case "Enter":
            fullScreen();
            break;
        case "t":
        case "T":
            updateSize();
            break;
    }
}