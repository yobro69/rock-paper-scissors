input.onButtonPressed(Button.A, function () {
    Player_B_score += 1
    basic.showNumber(player_1_score)
    if (player_1_score == 10) {
        basic.showString("Player A Wins")
        basic.clearScreen()
        player_1_score = 0
        Player_B_score = 0
    }
})
input.onButtonPressed(Button.B, function () {
    Player_B_score += 1
    basic.showNumber(Player_B_score)
    if (Player_B_score == 10) {
        basic.showString("Player B Wins")
        basic.clearScreen()
        player_1_score = 0
        Player_B_score = 0
    }
})
/**
 */
input.onGesture(Gesture.Shake, function () {
    hand = randint(1, 3)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    if (hand == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (hand == 2) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    } else if (hand == 3) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
})
let hand = 0
let Player_B_score = 0
let player_1_score = 0
player_1_score = 0
Player_B_score = 0
basic.forever(function () {
	
})
