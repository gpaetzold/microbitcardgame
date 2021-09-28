input.onButtonPressed(Button.A, function () {
    basic.showNumber(randint(0, 9))
    basic.pause(500)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(randint(0, 9))
    basic.pause(500)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
})
basic.showIcon(IconNames.Happy)
