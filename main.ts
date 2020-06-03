/**
 * INSTRUCTION SET
 * 
 * 00 Load memory location to A
 * 
 * 01 Add memory location to A	
 * 
 * 10 Output A
 * 
 * 11 Halt
 */
function dec2bin (dec: number) {
    if (dec > 31) {
        return "E"
    } else {
        bin = ""
        quotient = dec
        for (let index = 0; index <= 4; index++) {
            bin = "" + convertToText(quotient % 2) + bin
            quotient = Math.trunc(quotient / 2)
        }
        return bin
    }
}
input.onButtonPressed(Button.A, function () {
    halt = !(halt)
    led.toggle(0, 3)
})
function binToDec (binString: string) {
    dec = 0
    for (let index = 0; index <= binString.length; index++) {
        if (binString.substr(index, 1) == "1") {
            dec += 1 * 2 ** (binString.length - (index + 1))
        }
    }
    return dec
}
function CPU () {
    fetch = memory[PgmCounter]
    if (fetch.substr(0, 1) == "0" && fetch.substr(1, 1) == "0") {
        A = binToDec(memory[binToDec(fetch.substr(2, 3))])
    } else if (fetch.substr(0, 1) == "0" && fetch.substr(1, 1) == "1") {
        A += binToDec(memory[binToDec(fetch.substr(2, 3))])
    } else if (fetch.substr(0, 1) == "1" && fetch.substr(1, 1) == "0") {
        showBinaryNumber(dec2bin(A), 4)
    } else {
        halt = true
        led.toggle(0, 3)
    }
}
input.onButtonPressed(Button.B, function () {
    PgmCounter += 1
    if (PgmCounter == memory.length) {
        PgmCounter = 0
    }
    pgmCycle()
})
function pgmCycle () {
    showBinaryNumber(dec2bin(PgmCounter), 0)
    showBinaryNumber(memory[PgmCounter], 2)
    if (!(halt)) {
        CPU()
    }
}
function showBinaryNumber (binary: string, row: number) {
    for (let index = 0; index <= 4; index++) {
        if (binary.substr(index, 1) == "1") {
            led.plot(index, row)
        } else {
            led.unplot(index, row)
        }
    }
}
let fetch = ""
let dec = 0
let quotient = 0
let bin = ""
let A = 0
let halt = false
let memory: string[] = []
let PgmCounter = 0
PgmCounter = -1
memory = ["00100", "01101", "10000", "11000", "01100", "01011"]
halt = true
A = 0
