// DOM interaction
function setupButtons(ids) {
  return ids.map(id => document.getElementById(id).addEventListener('click', () => buttonClick(id)))
}
setupButtons(['btn1', 'btn2', 'btn3']);

// Global
var recordings = [];
var playing = false;

// WAD mic and mixerTrack
var sine = new Wad({ source: 'mic' })
var mixerTrack = new Wad.Poly({
    recConfig: { workerPath: '/bower_components/Wad/src/Recorderjs/recorderWorker.js' }
})
mixerTrack.add(sine)

// Play loop
function play() {
  if (playing) { recordings.forEach((note) => note.play()); }
  setTimeout(play, 428.57)
}
play()

// Interactive Events
function buttonClick(btn) {
  if (btn === 'btn1') {
    mixerTrack.rec.record()
    sine.play()
  }
  if (btn === 'btn2') {
    sine.stop();
    mixerTrack.rec.stop();
    mixerTrack.rec.createWad()
    setTimeout(() => recordings.push(mixerTrack.rec.recordings[0]), 0);
    mixerTrack.rec.clear()
  }
  if (btn === 'btn3') {
    console.log(recordings);
    playing = !playing;
  }
}


// console.log(mixerTrack);
// mixerTrack.rec.record()
// sine.play({ pitch : 'G#2'})
//
// setTimeout(() => {
//   sine.stop();
//   mixerTrack.rec.stop();
//   mixerTrack.rec.createWad()
//   console.log(mixerTrack.rec, mixerTrack.rec.recordings);
//   setTimeout(() => mixerTrack.rec.recordings[0].play(), 500)
// }, 1000)
