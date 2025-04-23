basic.forever(function () {
    if (input.magneticForce(Dimension.Strength) < 200) {
        basic.showIcon(IconNames.Angry)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.LoopingInBackground)
    } else if (input.magneticForce(Dimension.Strength) > 200) {
        basic.clearScreen()
        music.stopAllSounds()
    }
})
