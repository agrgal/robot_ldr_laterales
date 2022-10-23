let LDRIzq = 0
let LDRDRCH = 0
let maxLDRDRCH = pins.analogReadPin(AnalogPin.P1)
let maxLDRIZq = pins.analogReadPin(AnalogPin.P2)
basic.pause(500)
let potIZQ = 20
let potDRCH = 20
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    LDRDRCH = pins.analogReadPin(AnalogPin.P1)
    LDRIzq = pins.analogReadPin(AnalogPin.P2)
    potIZQ = Math.map(LDRIzq, maxLDRIZq, 2, 20, 100)
    potDRCH = Math.map(LDRDRCH, maxLDRDRCH, 2, 20, 100)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, potIZQ)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, potDRCH)
    basic.pause(10)
})
