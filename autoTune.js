// WAD mic and mixerTrack
var sine = new Wad({
  source: 'mic',
  tuna: {
    Overdrive : {
      outputGain: 1,         //0 to 1+
      drive: 0.7,              //0 to 1
      curveAmount: .9,          //0 to 1
      algorithmIndex: 0,       //0 to 5, selects one of our drive algorithms
      bypass: 0
    },
    Chorus: {
      intensity: 0.3,  //0 to 1
      rate: 4,         //0.001 to 8
      stereoPhase: 0, //0 to 180
      bypass: 0
    },
  }
})
sine.play()
