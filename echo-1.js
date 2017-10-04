// Global
var recordings = [];
var playing = true;

// WAD mic and mixerTrack
var sine = new Wad({
  source: 'mic',
  tuna: {
    Overdrive : {
      outputGain: 1,         //0 to 1+
      drive: 0.7,              //0 to 1
      curveAmount: .9,          //0 to 1
      algorithmIndex: 4,       //0 to 5, selects one of our drive algorithms
      bypass: 0
    },
    Chorus: {
      intensity: 0.3,  //0 to 1
      rate: 4,         //0.001 to 8
      stereoPhase: 0, //0 to 180
      bypass: 0
    }
  }
})

sine.play()

var mixerTrack = new Wad.Poly({
    recConfig: { workerPath: '/bower_components/Wad/src/Recorderjs/recorderWorker.js' }
})
mixerTrack.add(sine)

// Play loop
function play() {
  if (playing) {
    recordings = recordings.
      filter(rec => {
        return rec.volume >= .0001
      }).
      map(rec => {
        rec.play();
        rec.setVolume(rec.volume * .8)
        return rec;
      })
  }
  setTimeout(play, 1000)
}
play()

// Loop record
function newRecord(length) {
  mixerTrack.rec.record()
  sine.play()
  return setTimeout(() => {
    sine.stop();
    mixerTrack.rec.stop();
    mixerTrack.rec.createWad()
    setTimeout(() => {
      recordings = [].concat(recordings, [mixerTrack.rec.recordings[0].setVolume(.8)])
    }, 0);
    mixerTrack.rec.clear()
    return newRecord(length)
  }, length)
}
newRecord(1000)
