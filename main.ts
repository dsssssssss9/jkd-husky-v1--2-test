input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_TAG_RECOGNITION)
basic.showIcon(IconNames.Happy)
basic.pause(500)
basic.forever(function () {
    huskylens.request()
    huskylens.writeName(1, "Kirk")
    huskylens.writeName(2, "Spock")
    huskylens.writeName(3, "McCoy")
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (huskylens.isAppear(2, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . . . .
            . # . . .
            . . . . .
            `)
    } else if (huskylens.isAppear(3, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.showLeds(`
            . . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . .
            `)
    } else {
        basic.showIcon(IconNames.No)
    }
})
