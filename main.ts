basic.showIcon(IconNames.No)
basic.forever(function on_forever() {
    while (input.buttonIsPressed(Button.A)) {
        basic.showString("M")
    }
})
