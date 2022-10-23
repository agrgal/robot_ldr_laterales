let LDRIzq = 0
let LDRDRCH = 0
let maxLDRDRCH = pins.analogReadPin(AnalogPin.P1)
maxLDRDRCH = pins.analogReadPin(AnalogPin.P2)
basic.pause(500)
let potIZQ = 20
let potDRCH = 20
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    let maxLDRIZq = 0
    LDRDRCH = pins.analogReadPin(AnalogPin.P1)
    LDRIzq = pins.analogReadPin(AnalogPin.P2)
    potIZQ = Math.map(LDRIzq, maxLDRIZq, 2, 20, 100)
    potDRCH = Math.map(maxLDRDRCH, maxLDRDRCH, 2, 20, 100)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, potIZQ)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, potDRCH)
})
