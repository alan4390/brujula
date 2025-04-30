basic.forever(function () {
    if (input.compassHeading() <= 22.5) {
        basic.showString("N")
    } else if (input.compassHeading() <= 67.5) {
        basic.showString("NE")
    } else if (input.compassHeading() <= 112.5) {
        basic.showString("E")
    } else if (input.compassHeading() <= 135) {
        basic.showString("SE")
    } else if (input.compassHeading() <= 180) {
        basic.showString("S")
    } else if (input.compassHeading() <= 225) {
        basic.showString("SO")
    } else if (input.compassHeading() <= 270) {
        basic.showString("S")
    } else if (input.compassHeading() <= 315) {
        basic.showString("NO")
    } else {
        basic.showIcon(IconNames.SmallDiamond)
    }
})
