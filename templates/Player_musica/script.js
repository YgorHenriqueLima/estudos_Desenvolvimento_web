const musicName = document.querySelector("#NameMusic")
const player = document.querySelector("#player")
const prevButton = document.querySelector("#prevButton") 
const playPauseButton = document.querySelector("#botaoPlayPause")
const nextButton = document.querySelector("#nextButton")
import sons from "./sons.js"
let currentTrackIndex = 0
// Função para carregar uma nova música
function loadTrack(index){
  const track = sons[index]
  player.src = track.src // define o src do elemento <audio>
  musicName.textContent = track.nome; // define o nome da música
}
// Função para tocar ou pausar a música
function togglePlay(){
  if(player.paused){
    player.play()
    playPauseButton.innerHTML = "<i class='bx bx-pause'></i>"
  } else {
    player.pause()
    playPauseButton.innerHTML = "<i class='bx bx-caret-right'></i>"
  }
}
// botão de play e pause
playPauseButton.addEventListener("click", togglePlay)

// botao anterior
prevButton.addEventListener("click", ()=>{
  currentTrackIndex = (currentTrackIndex - 1 + sons.length) % sons.length
  loadTrack(currentTrackIndex) // carrega a música anterior
  togglePlay()
})
// botão posterior
nextButton.addEventListener("click", ()=>{
  currentTrackIndex = (currentTrackIndex + 1) % sons.length
  loadTrack(currentTrackIndex)
  togglePlay()
})

// carrega a primeira música ao carregar a página
loadTrack(currentTrackIndex)