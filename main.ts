radio.onReceivedNumber(function (receivedNumber) {
    clearWait = 5
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.SmallSquare)
    showIcon(receivedNumber)
    clearWait = 5
})
input.onButtonPressed(Button.A, function () {
    if (iconNum == 4) {
        iconNum = 0
    } else {
        iconNum += 1
    }
    showIcon(iconNum)
    clearWait = 2
})
function showIcon (num: number) {
    if (num == 0) {
        basic.showIcon(IconNames.Heart)
    }
    if (num == 1) {
        basic.showIcon(IconNames.Yes)
    }
    if (num == 2) {
        basic.showIcon(IconNames.No)
    }
    if (num == 3) {
        basic.showIcon(IconNames.Happy)
    }
    if (num == 4) {
        basic.showIcon(IconNames.Sad)
    }
}
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    radio.sendNumber(iconNum)
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.Square)
        basic.showIcon(IconNames.SmallSquare)
    }
})
let clearWait = 0
let iconNum = 0
radio.setGroup(11010)
iconNum = 0
basic.forever(function () {
    if (clearWait > 0) {
        clearWait += -1
    } else {
        basic.clearScreen()
    }
    basic.pause(1000)
})
