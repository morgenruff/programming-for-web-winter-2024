let feelingBad;
let feelingBadButton;
function setup() {
  createCanvas(400, 100)
  background(99, 167, 155)
  feelingBad = loadSound('im-goin-down-the-road-feelin-bad-arvin-fsa-camp-august-1-1940.mp3', loaded)
  feelingBadButton = createButton('play')
  feelingBadButton.position(50, 175)
  feelingBad.setVolume(0.5)
  feelingBadButton.mousePressed(toggleFeelingBad())
}
function loaded () {
  console.log('loaded')
}
function toggleFeelingBad() {
  if (!feelingBad.isPlaying()) {
    feelingBad.play()
    feelingBadButton.html('pause')
  } else {
    feelingBad.pause()
    feelingBadButton.html('play')
  }
}
function draw() {

}