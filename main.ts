let LDRIzq = 0
let LDRDRCH = 0
basic.pause(1000)
let maxLDRDRCH = pins.analogReadPin(AnalogPin.P0)
let maxLDRIZq = pins.analogReadPin(AnalogPin.P1)
basic.pause(500)
let potIZQ = 20
let potDRCH = 20
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    LDRDRCH = pins.analogReadPin(AnalogPin.P0)
    LDRIzq = pins.analogReadPin(AnalogPin.P1)
    potIZQ = Math.map(LDRIzq, maxLDRIZq, 2, 20, 50)
    potDRCH = Math.map(LDRDRCH, maxLDRDRCH, 2, 20, 50)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, potIZQ)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, potDRCH)
    basic.pause(25)
})
