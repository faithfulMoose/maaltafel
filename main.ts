input.onButtonPressed(Button.A, function () {
    maaltafel += 1
    if (maaltafel > 10) {
        maaltafel = 0
    }
    basic.showNumber(maaltafel)
})
input.onGesture(Gesture.Shake, function () {
    if (level == 1) {
        if (tafelsLvl2.length == 0) {
            music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
            basic.showIcon(IconNames.Rollerskate)
            level += 1
        } else {
            vermenigvuldigingsNummer = randint(0, tafelsLvl2.length - 1)
            vermenigvuldiging = tafelsLvl2[vermenigvuldigingsNummer]
        }
    } else if (level == 2) {
        if (tafelsLvl3.length == 0) {
            music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
            basic.showIcon(IconNames.Rabbit)
            level += 1
        } else {
            vermenigvuldigingsNummer = randint(0, tafelsLvl3.length - 1)
            vermenigvuldiging = tafelsLvl3[vermenigvuldigingsNummer]
        }
    } else if (level == 3) {
        if (tafelsLvl4.length == 0) {
            music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
            basic.showIcon(IconNames.Duck)
            level += 1
        } else {
            vermenigvuldigingsNummer = randint(0, tafelsLvl4.length - 1)
            vermenigvuldiging = tafelsLvl4[vermenigvuldigingsNummer]
        }
    } else if (level == 4) {
        if (tafelsLvl4.length == 0) {
            music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . # . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                `)
            for (let index = 0; index < 3; index++) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . # . .
                    . . . . .
                    . . . . .
                    `)
                basic.showLeds(`
                    . . . . .
                    . # . # .
                    . . # . .
                    . # . # .
                    . . . . .
                    `)
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . . . .
                    . # . # .
                    # . . . #
                    `)
                basic.showLeds(`
                    # . . . #
                    . . . . .
                    . . . . .
                    . . . . .
                    # . . . #
                    `)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            }
            level = 0
        } else {
            vermenigvuldigingsNummer = randint(0, tafelsLvl5.length - 1)
            vermenigvuldiging = tafelsLvl5[vermenigvuldigingsNummer]
        }
    } else {
        if (maaltafel == 1) {
            if (tafelVanEen.length == 0) {
                basic.showIcon(IconNames.Heart)
                level += 1
            } else {
                vermenigvuldigingsNummer = randint(0, tafelVanEen.length - 1)
                vermenigvuldiging = tafelVanEen[vermenigvuldigingsNummer]
            }
        } else if (maaltafel == 2) {
            if (tafelVanTwee.length == 0) {
                basic.showIcon(IconNames.Heart)
                level += 1
                if (level > 5) {
                    level = 0
                }
            } else {
                vermenigvuldigingsNummer = randint(0, tafelVanTwee.length - 1)
                vermenigvuldiging = tafelVanTwee[vermenigvuldigingsNummer]
            }
        } else if (maaltafel == 3) {
            if (tafelVanDrie.length == 0) {
                basic.showIcon(IconNames.Heart)
                level += 1
                if (level > 5) {
                    level = 0
                }
            } else {
                vermenigvuldigingsNummer = randint(0, tafelVanDrie.length - 1)
                vermenigvuldiging = tafelVanDrie[vermenigvuldigingsNummer]
            }
        } else if (maaltafel == 4) {
            if (tafelVanVier.length == 0) {
                basic.showIcon(IconNames.Heart)
                level += 1
                if (level > 5) {
                    level = 0
                }
            } else {
                vermenigvuldigingsNummer = randint(0, tafelVanVier.length - 1)
                vermenigvuldiging = tafelVanVier[vermenigvuldigingsNummer]
            }
        } else if (maaltafel == 5) {
            if (tafelVanVijf.length == 0) {
                basic.showIcon(IconNames.Heart)
                level += 1
                if (level > 5) {
                    level = 0
                }
            } else {
                vermenigvuldigingsNummer = randint(0, tafelVanVijf.length - 1)
                vermenigvuldiging = tafelVanVijf[vermenigvuldigingsNummer]
            }
        } else if (maaltafel == 6) {
            if (tafelVanZes.length == 0) {
                basic.showIcon(IconNames.Heart)
                level += 1
                if (level > 5) {
                    level = 0
                }
            } else {
                vermenigvuldigingsNummer = randint(0, tafelVanZes.length - 1)
                vermenigvuldiging = tafelVanZes[vermenigvuldigingsNummer]
            }
        } else if (maaltafel == 7) {
            if (tafelVanZeven.length == 0) {
                basic.showIcon(IconNames.Heart)
                level += 1
                if (level > 5) {
                    level = 0
                }
            } else {
                vermenigvuldigingsNummer = randint(0, tafelVanZeven.length - 1)
                vermenigvuldiging = tafelVanZeven[vermenigvuldigingsNummer]
            }
        } else if (maaltafel == 8) {
            if (tafelVanAcht.length == 0) {
                basic.showIcon(IconNames.Heart)
                level += 1
                if (level > 5) {
                    level = 0
                }
            } else {
                vermenigvuldigingsNummer = randint(0, tafelVanAcht.length - 1)
                vermenigvuldiging = tafelVanAcht[vermenigvuldigingsNummer]
            }
        } else if (maaltafel == 9) {
            if (tafelVanNegen.length == 0) {
                basic.showIcon(IconNames.Heart)
                level += 1
                if (level > 5) {
                    level = 0
                }
            } else {
                vermenigvuldigingsNummer = randint(0, tafelVanNegen.length - 1)
                vermenigvuldiging = tafelVanNegen[vermenigvuldigingsNummer]
            }
        } else if (maaltafel == 10) {
            if (tafelVanTien.length == 0) {
                basic.showIcon(IconNames.Heart)
                level += 1
                if (level > 5) {
                    level = 0
                }
            } else {
                vermenigvuldigingsNummer = randint(0, tafelVanTien.length - 1)
                vermenigvuldiging = tafelVanTien[vermenigvuldigingsNummer]
            }
        } else {
            if (tafelsLvl1.length == 0) {
                basic.showIcon(IconNames.Heart)
                level += 1
                if (level > 5) {
                    level = 0
                }
            } else {
                vermenigvuldigingsNummer = randint(0, tafelsLvl1.length - 1)
                vermenigvuldiging = tafelsLvl1[vermenigvuldigingsNummer]
            }
        }
    }
    vermenigvuldigtal = vermenigvuldiging[0]
    vermenigvuldiger = vermenigvuldiging[1]
    product = vermenigvuldigtal * vermenigvuldiger
    basic.pause(500)
    basic.showNumber(vermenigvuldigtal)
    basic.showString("x")
    basic.showNumber(vermenigvuldiger)
    basic.showString("=")
    basic.pause(2000)
    basic.showNumber(product)
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    if (level == 1) {
        tafelsLvl3.unshift(tafelsLvl2[vermenigvuldigingsNummer])
        tafelsLvl2.removeAt(vermenigvuldigingsNummer)
    } else if (level == 2) {
        tafelsLvl4.unshift(tafelsLvl3[vermenigvuldigingsNummer])
        tafelsLvl3.removeAt(vermenigvuldigingsNummer)
    } else if (level == 3) {
        tafelsLvl5.unshift(tafelsLvl4[vermenigvuldigingsNummer])
        tafelsLvl4.removeAt(vermenigvuldigingsNummer)
    } else if (level == 4) {
        tafelsLvl5.removeAt(vermenigvuldigingsNummer)
    } else {
        if (maaltafel == 1) {
            tafelsLvl2.unshift(tafelVanEen[vermenigvuldigingsNummer])
            tafelVanEen.removeAt(vermenigvuldigingsNummer)
        } else if (maaltafel == 2) {
            tafelsLvl2.unshift(tafelVanTwee[vermenigvuldigingsNummer])
            tafelVanTwee.removeAt(vermenigvuldigingsNummer)
        } else if (maaltafel == 3) {
            tafelsLvl2.unshift(tafelVanDrie[vermenigvuldigingsNummer])
            tafelVanDrie.removeAt(vermenigvuldigingsNummer)
        } else if (maaltafel == 4) {
            tafelsLvl2.unshift(tafelVanVier[vermenigvuldigingsNummer])
            tafelVanVier.removeAt(vermenigvuldigingsNummer)
        } else if (maaltafel == 5) {
            tafelsLvl2.unshift(tafelVanVijf[vermenigvuldigingsNummer])
            tafelVanVijf.removeAt(vermenigvuldigingsNummer)
        } else if (maaltafel == 6) {
            tafelsLvl2.unshift(tafelVanZes[vermenigvuldigingsNummer])
            tafelVanZes.removeAt(vermenigvuldigingsNummer)
        } else if (maaltafel == 7) {
            tafelsLvl2.unshift(tafelVanZeven[vermenigvuldigingsNummer])
            tafelVanZeven.removeAt(vermenigvuldigingsNummer)
        } else if (maaltafel == 8) {
            tafelsLvl2.unshift(tafelVanAcht[vermenigvuldigingsNummer])
            tafelVanAcht.removeAt(vermenigvuldigingsNummer)
        } else if (maaltafel == 9) {
            tafelsLvl2.unshift(tafelVanNegen[vermenigvuldigingsNummer])
            tafelVanNegen.removeAt(vermenigvuldigingsNummer)
        } else if (maaltafel == 10) {
            tafelsLvl2.unshift(tafelVanTien[vermenigvuldigingsNummer])
            tafelVanTien.removeAt(vermenigvuldigingsNummer)
        } else {
        	
        }
        basic.showIcon(IconNames.Yes)
    }
    basic.clearScreen()
})
let product = 0
let vermenigvuldiger = 0
let vermenigvuldigtal = 0
let vermenigvuldiging: number[] = []
let vermenigvuldigingsNummer = 0
let level = 0
let maaltafel = 0
let tafelsLvl1: number[][] = []
let tafelVanTien: number[][] = []
let tafelVanNegen: number[][] = []
let tafelVanAcht: number[][] = []
let tafelVanZeven: number[][] = []
let tafelVanZes: number[][] = []
let tafelVanVijf: number[][] = []
let tafelVanVier: number[][] = []
let tafelVanDrie: number[][] = []
let tafelVanTwee: number[][] = []
let tafelVanEen: number[][] = []
let tafelsLvl2: number[][] = []
let tafelsLvl5: number[][] = []
let tafelsLvl4: number[][] = []
let tafelsLvl3: number[][] = []
tafelsLvl3 = []
tafelsLvl4 = []
tafelsLvl5 = []
tafelsLvl2 = []
let A1 = [1, 1]
let B1 = [2, 1]
let C1 = [3, 1]
let D1 = [4, 1]
let E1 = [5, 1]
let F1 = [6, 1]
let G1 = [7, 1]
let H1 = [8, 1]
let I1 = [9, 1]
let J1 = [10, 1]
let A2 = [1, 2]
let B2 = [2, 2]
let C2 = [3, 2]
let D2 = [4, 2]
let E2 = [5, 2]
let F2 = [6, 2]
let G2 = [7, 2]
let H2 = [8, 2]
let I2 = [9, 2]
let J2 = [10, 2]
let A3 = [1, 3]
let B3 = [2, 3]
let C3 = [3, 3]
let D3 = [4, 3]
let E3 = [5, 3]
let F3 = [6, 3]
let G3 = [7, 3]
let H3 = [8, 3]
let I3 = [9, 3]
let J3 = [10, 3]
let A4 = [1, 4]
let B4 = [2, 4]
let C4 = [3, 4]
let D4 = [4, 4]
let E4 = [5, 4]
let F4 = [6, 4]
let G4 = [7, 4]
let H4 = [8, 4]
let I4 = [9, 4]
let J4 = [10, 4]
let A5 = [1, 5]
let B5 = [2, 5]
let C5 = [3, 5]
let D5 = [4, 5]
let E5 = [5, 5]
let F5 = [6, 5]
let G5 = [7, 5]
let H5 = [8, 5]
let I5 = [9, 5]
let J5 = [10, 5]
let A6 = [1, 6]
let B6 = [2, 6]
let C6 = [3, 6]
let D6 = [4, 6]
let E6 = [5, 6]
let F6 = [6, 6]
let G6 = [7, 6]
let H6 = [8, 6]
let I6 = [9, 6]
let J6 = [10, 6]
let A7 = [1, 7]
let B7 = [2, 7]
let C7 = [3, 7]
let D7 = [4, 7]
let E7 = [5, 7]
let F7 = [6, 7]
let G7 = [7, 7]
let H7 = [8, 7]
let I7 = [9, 7]
let J7 = [10, 7]
let A8 = [1, 8]
let B8 = [2, 8]
let C8 = [3, 8]
let D8 = [4, 8]
let E8 = [5, 8]
let F8 = [6, 8]
let G8 = [7, 8]
let H8 = [8, 8]
let I8 = [9, 8]
let J8 = [10, 8]
let A9 = [1, 9]
let B9 = [2, 9]
let C9 = [3, 9]
let D9 = [4, 9]
let E9 = [5, 9]
let F9 = [6, 9]
let G9 = [7, 9]
let H9 = [8, 9]
let I9 = [9, 9]
let J9 = [10, 9]
let A10 = [1, 10]
let B10 = [2, 10]
let C10 = [3, 10]
let D10 = [4, 10]
let E10 = [5, 10]
let F10 = [6, 10]
let G10 = [7, 10]
let H10 = [8, 10]
let I10 = [9, 10]
let J10 = [10, 10]
tafelVanEen = [A1, B1, C1, D1, E1, F1, G1, H1, I1, J1]
tafelVanTwee = [A2, B2, C2, D2, E2, F2, G2, H2, I2, J2]
tafelVanDrie = [A3, B3, C3, D3, E3, F3, G3, H3, I3, J3]
tafelVanVier = [A4, B4, C4, D4, E4, F4, G4, H4, I4, J4]
tafelVanVijf = [A5, B5, C5, D5, E5, F5, G5, H5, I5, J5]
tafelVanZes = [A6, B6, C6, D6, E6, F6, G6, H6, I6, J6]
tafelVanZeven = [A7, B7, C7, D7, E7, F7, G7, H7, I7, J7]
tafelVanAcht = [A8, B8, C8, D8, E8, F8, G8, H8, I8, J8]
tafelVanNegen = [A9, B9, C9, D9, E9, F9, G9, H9, I9, J9]
tafelVanTien = [A10, B10, C10, D10, E10, F10, G10, H10, I10, J10]
tafelsLvl1 = [A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, B1, B2, B3, B4, B5, B6, B7, B8, B9, B10, C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, D1, D2, D3, D4, D5, D6, D7, D8, D9, D10, E1, E2, E3, E4, E5, E6, E7, E8, E9, E10, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, G1, G2, G3, G4, G5, G6, G7, G8, G9, G10, H1, H2, H3, H4, H5, H6, H7, H8, H9, H10, I1, I2, I3, I4, I5, I6, I7, I8, I9, I10, J1, J2, J3, J4, J5, J6, J7, J8, J9, J10]
