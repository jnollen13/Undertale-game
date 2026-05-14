namespace SpriteKind {
    export const button = SpriteKind.create()
    export const placeholder = SpriteKind.create()
    export const wall = SpriteKind.create()
    export const bone1 = SpriteKind.create()
    export const sans = SpriteKind.create()
    export const BlueBone = SpriteKind.create()
}
function actselected() {
    debug.sayText("act", 5000)
    guimode = 1
    gui_message_number = 0
}
let p0="pie x 0";let s0="steak x 0";
let h0="health potion x 0";let sm0 ="snowmen x 0";
function itemselected() {
    debug.sayText("item", 5000)
    story.showPlayerChoices("pie x "+pie, "steak x "+steak, "health potion x "+health_potion, "snowmen x "+snowmen);
    if (story.checkLastAnswer(p0)||story.checkLastAnswer(s0)||story.checkLastAnswer(h0)||story.checkLastAnswer(sm0)){

    } else if (story.checkLastAnswer("pie x "+pie)){
        damage += 35
        pie -= 1
    } else if (story.checkLastAnswer("steak x "+steak)){
        damage += 50
        steak -=1
    } else if (story.checkLastAnswer("snowmen x "+snowmen)){
        damage += 100
        snowmen-=1
    } else if (story.checkLastAnswer("health potion x "+health_potion)){
        damage= 200
        health_potion-=1
    }

    if(damage>=200){
        damage=200
    }
    timer.after(1000, function(){
        undertale.sansturn()
    })
}
function setvars() {
    Fightbutton = 1
    actbutton = 0
    itembutton = 0
    mercybutton = 0
    guimode = 0
    inbattle = 0
    damage = 200
}
function sans_attack1() {
    inbattle = 1
    bone_end = sprites.create(img`
        .
        .
        f
        f
        f
        f
        f
        f
        f
        f
        f
        f
        f
        f
        f
        f
        f
        f
        f
        f
        f
        f
        f
        f
        f
        f
        f
        f
        f
        f
        f
        f
        f
        f
        f
        f
        f
        f
        f
        f
        f
        f
        f
        f
        f
        f
        f
        f
        .
        .
    `, SpriteKind.wall)
    bone_end.setPosition(16, 72)
    bone1()
    timer.after(650, function () {
        bone2()
        timer.after(650, function () {
            bone3()
            timer.after(650, function () {
                bone4()
                timer.after(650, function () {
                    bone6()
                    timer.after(650, function () {
                        bone7()
                        timer.after(650, function () {
                            bone8()
                            timer.after(2400, function(){
                                undertale.blueBone(50, true)
                                timer.after(1000, function(){
                                    undertale.normalBone(1)
                                    timer.after(200, function () {
                                        undertale.normalBone(10)
                                        timer.after(200, function () {
                                            undertale.normalBone(20)
                                            timer.after(200, function () {
                                                undertale.normalBone(10)
                                                timer.after(200, function () {
                                                    undertale.normalBone(1)
                                                    timer.after(1111, function () {
                                                        undertale.linearBone(0, 0, AttackType.Normal)
                                                        undertale.linearBone(10, 200, AttackType.Normal)
                                                        undertale.linearBone(20, 400, AttackType.Normal)
                                                        undertale.linearBone(30, 600, AttackType.Normal)
                                                        undertale.linearBone(35, 800, AttackType.Normal)
                                                        undertale.linearBone(30, 1000, AttackType.Normal)
                                                        undertale.linearBone(20, 1200, AttackType.Normal)
                                                        undertale.linearBone(5, 1400, AttackType.Normal)
                                                        undertale.linearBone(5, 2302, AttackType.Normal)
                                                        undertale.linearBone(10, 3302, AttackType.Normal)
                                                        undertale.linearBone(30, 4400, AttackType.Normal)
                                                        undertale.linearBone(66, 4760, AttackType.Blue)
                                                        undertale.linearBone(0, 6000, AttackType.Laser)
                                                        undertale.linearBone(0, 6200, AttackType.Laser)
                                                        undertale.linearBone(0, 7000, AttackType.Normal)
                                                        undertale.linearBone(2, 7200, AttackType.Normal)
                                                        undertale.linearBone(4, 7400, AttackType.Normal)
                                                        undertale.linearBone(6, 7600, AttackType.Normal)
                                                        undertale.linearBone(8, 7800, AttackType.Normal)
                                                        undertale.linearBone(10, 8000, AttackType.Normal)
                                                        undertale.linearBone(12, 8200, AttackType.Normal)
                                                        undertale.linearBone(0, 8300, AttackType.Laser)
                                                        undertale.linearBone(14, 8400, AttackType.Normal)
                                                        timer.after(11000, function(){
                                                            undertale.s_attack1()
                                                        })
                                                        
                                                        timer.after(5500, function(){
                                                            sans.sayText("get ready!", 1000, true)
                                                        })

                                                        timer.after(10000, function () {
                                                            sans.sayText("Arrrg!", 1000, true)
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}
function bootupgui() {
    selectmode = 1
    tiles.setCurrentTilemap(tilemap`level`)
    sans = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........8888..........
        ........88111188........
        .......8b111111b8.......
        .......8111111118.......
        ......8d11111111d8......
        ......8d11111111d8......
        ......8ddd1111ddd8......
        ......8bdbfddfbdb8......
        ......8cdcf11fcdc8......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
    `, SpriteKind.sans)
    sans.setPosition(74, 39)
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . 2 . 2 . . . . . .
        . . . . . . 2 2 2 2 2 . . . . .
        . . . . . . 2 2 2 2 2 . . . . .
        . . . . . . . 2 2 2 . . . . . .
        . . . . . . . . 2 . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, SpriteKind.Player)
    gui = sprites.create(img`
        1 . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, SpriteKind.placeholder)
    gui.setPosition(76, 104)
    debug = sprites.create(img`
        1 . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, SpriteKind.placeholder)
    debug.setPosition(73, 56)
    fightbutton_left = sprites.create(img`
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 . . . . . . . . . . . . . . .
        4 . . . . . . . . 4 4 4 4 . . 4
        4 . . . . . . . . 4 . . . . . 4
        4 . . . . . 4 4 . 4 . . . . . 4
        4 . . . . . 4 4 . 4 . . . . . 4
        4 . . . . 4 4 . . 4 . . . . . 4
        4 . . . . 4 4 . . 4 4 4 4 . . 4
        4 . 4 . 4 4 . . . 4 . . . . . 4
        4 . . 4 4 4 . . . 4 . . . . . 4
        4 . . 4 4 4 . . . 4 . . . . . 4
        4 . . 4 4 . 4 . . 4 . . . . . 4
        4 . 4 4 . . . . . 4 . . . . . 4
        4 . 4 4 . . . . . . . . . . . .
        4 . . . . . . . . . . . . . . .
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    `, SpriteKind.button)
    fightbutton_left.setPosition(14, 111)
    fightbutton_right = sprites.create(img`
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        . . . . . . . . . . . . . . . 4
        . . 4 4 4 . . 4 . . 4 . 4 4 4 4
        . 4 . . . . . 4 . . 4 . . 4 . 4
        . 4 . . . . . 4 . . 4 . . 4 . 4
        . 4 . . . . . 4 . . 4 . . 4 . 4
        . 4 . . . . . 4 . . 4 . . 4 . 4
        . 4 . . 4 4 . 4 4 4 4 . . 4 . 4
        . 4 . . . 4 . 4 . . 4 . . 4 . 4
        . 4 . . . 4 . 4 . . 4 . . 4 . 4
        . 4 . . . 4 . 4 . . 4 . . 4 . 4
        . 4 . . . 4 . 4 . . 4 . . 4 . 4
        . . 4 4 4 . . 4 . . 4 . . 4 . 4
        . . . . . . . . . . . . . . . 4
        . . . . . . . . . . . . . . . 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    `, SpriteKind.button)
    fightbutton_right.setPosition(30, 111)
    actbutton_left = sprites.create(img`
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 . . . . . . . . . . . . . . . 
        4 . . . . . . . 4 4 4 4 4 4 4 . 
        4 . 4 4 . . . . 4 . . . . . 4 . 
        4 . . . 4 . . . 4 . . . . . 4 . 
        4 . 4 . . 4 . . 4 4 . . . 4 4 . 
        4 . . 4 . 4 . . 4 4 4 4 4 4 4 . 
        4 . . 4 . 4 . . 4 4 . . . 4 4 . 
        4 . . 4 . 4 . . 4 . . . . . 4 . 
        4 . 4 . . 4 . . 4 . . . . . 4 . 
        4 . . . 4 . . . 4 . . . . . 4 . 
        4 . 4 4 . . . . 4 . . . . . 4 . 
        4 . . . . . . . 4 . . . . . 4 . 
        4 . . . . . . . . . . . . . . . 
        4 . . . . . . . . . . . . . . . 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        `, SpriteKind.button)
    actbutton_left.setPosition(50, 111)
    actbutton_right = sprites.create(img`
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        . . . . . . . . . . . . . . . 4 
        . 4 4 4 4 4 . 4 4 4 4 4 4 4 . 4 
        . 4 . . . . . . . . 4 . . . . 4 
        . 4 . . . . . . . . 4 . . . . 4 
        . 4 . . . . . . . . 4 . . . . 4 
        . 4 . . . . . . . . 4 . . . . 4 
        . 4 . . . . . . . . 4 . . . . 4 
        . 4 . . . . . . . . 4 . . . . 4 
        . 4 . . . . . . . . 4 . . . . 4 
        . 4 . . . . . . . . 4 . . . . 4 
        . 4 . . . . . . . . 4 . . . . 4 
        . 4 4 4 4 4 . . . . 4 . . . . 4 
        . . . . . . . . . . . . . . . 4 
        . . . . . . . . . . . . . . . 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        `, SpriteKind.button)
    actbutton_right.setPosition(66, 111)
    itembutton_left = sprites.create(img`
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 . . . . . . . . . . . . . . . 
        4 . . . . . . . 4 4 4 4 4 . 4 4 
        4 . . . . . . . . . 4 . . . . . 
        4 . 4 . 4 . 4 . . . 4 . . . . . 
        4 . . 4 4 4 . . . . 4 . . . . . 
        4 . . . 4 . . . . . 4 . . . . . 
        4 . . 4 4 4 . . . . 4 . . . . . 
        4 . . 4 4 4 4 . . . 4 . . . . . 
        4 . 4 4 . . 4 4 . . 4 . . . . . 
        4 . 4 . 4 4 . 4 . . 4 . . . . . 
        4 . 4 . 4 4 . 4 . . 4 . . . . . 
        4 . . 4 . . 4 4 4 4 4 4 4 . . . 
        4 . . . 4 4 4 . . . . . . . . . 
        4 . . . . . . . . . . . . . . . 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        `, SpriteKind.button)
    itembutton_left.setPosition(85, 111)
    itembutton_right = sprites.create(img`
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        . . . . . . . . . . . . . . . 4 
        4 4 4 4 . 4 4 4 4 . 4 . . . 4 4 
        . 4 . . . 4 . . . . 4 4 . 4 4 4 
        . 4 . . . 4 . . . . 4 4 . 4 4 4 
        . 4 . . . 4 . . . . 4 . 4 . 4 4 
        . 4 . . . 4 . . . . 4 . . . 4 4 
        . 4 . . . 4 4 4 4 . 4 . . . 4 4 
        . 4 . . . 4 . . . . 4 . . . 4 4 
        . 4 . . . 4 . . . . 4 . . . 4 4 
        . 4 . . . 4 . . . . 4 . . . 4 4 
        . 4 . . . 4 . . . . 4 . . . 4 4 
        . 4 . . . 4 . . . . 4 . . . 4 4 
        . 4 . . . 4 4 4 4 . 4 . . . 4 4 
        . . . . . . . . . . . . . . . 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        `, SpriteKind.button)
    itembutton_right.setPosition(100, 111)
    mercybutton_left = sprites.create(img`
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 . . . . . . . . . . . . . . . 
        4 . . . . . . . 4 . . . 4 . 4 4 
        4 . . . . . . . 4 4 . 4 4 . 4 . 
        4 . 4 . . . 4 . 4 4 . 4 4 . 4 . 
        4 . . 4 . 4 . . 4 . 4 . 4 . 4 . 
        4 . . 4 . 4 . . 4 . . . 4 . 4 . 
        4 . . . 4 . . . 4 . . . 4 . 4 4 
        4 . . . 4 . . . 4 . . . 4 . 4 . 
        4 . . 4 . 4 . . 4 . . . 4 . 4 . 
        4 . . 4 . 4 . . 4 . . . 4 . 4 . 
        4 . 4 . . . 4 . 4 . . . 4 . 4 . 
        4 . . . . . . . 4 . . . 4 . 4 . 
        4 . . . . . . . 4 . . . 4 . 4 4 
        4 . . . . . . . . . . . . . . . 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        `, SpriteKind.button)
    mercybutton_left.setPosition(119, 111)
    mercybutton_right = sprites.create(img`
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        . . . . . . . . . . . . . . . 4 
        4 4 . 4 4 4 . . 4 4 4 . 4 . 4 4 
        . . . 4 . . 4 . 4 . . . 4 . 4 4 
        . . . 4 . . 4 . 4 . . . 4 . 4 4 
        . . . 4 . . 4 . 4 . . . 4 . 4 4 
        . . . 4 . 4 . . 4 . . . . 4 . 4 
        4 4 . 4 4 . . . 4 . . . . 4 . 4 
        . . . 4 . 4 . . 4 . . . . 4 . 4 
        . . . 4 . . 4 . 4 . . . . 4 . 4 
        . . . 4 . . 4 . 4 . . . . 4 . 4 
        . . . 4 . . 4 . 4 . . . . 4 . 4 
        . . . 4 . . 4 . 4 . . . . 4 . 4 
        4 4 . 4 . . 4 . 4 4 4 . . 4 . 4 
        . . . . . . . . . . . . . . . 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        `, SpriteKind.button)
    mercybutton_right.setPosition(135, 111)
    health = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.placeholder)
    health.setPosition(78, 112)
    setvars()
}
function itemdecider() {
    if (Fightbutton == 1) {
        fightselected()
    }
    if (actbutton == 1) {
        actselected()
    }
    if (itembutton == 1) {
        itemselected()
    }
    if (mercybutton == 1) {
        mercyselected()
    }
    selectmode = 0
}
function bone6() {
    bone62 = sprites.create(assets.image`myImage4`, SpriteKind.Enemy)
    scaling.scaleByPixels(bone62, 30, ScaleDirection.Vertically, ScaleAnchor.Bottom, false)
    bone62.setPosition(142, 81)
    bone62.setVelocity(-50, 0)
    bone62.setFlag(SpriteFlag.DestroyOnWall, true)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (selectmode == 1) {
        itemdecider()
    }
    if (selectmode == 0) {
        if (actbutton == 1) {
            gui_message_number += 1
        }
    }
})
function fightselected() {
    debug.sayText("fight", 1000)
    for (let i = 0; i < 21; i++) {
        sans.sayText("missed me!", 1300)
        undertale.laser()
    }
    undertale.sansturn()
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (selectmode == 1) {
        selectedbutton += -1
    }
})
function turn_ended_reset_vars() {
    gui_message_number = 0
    guimode = 0
    guitext = ""
    gui_message_number = 0
}
function bone1() {
    bone = sprites.create(assets.image`myImage4`, SpriteKind.Enemy)
    scaling.scaleByPixels(bone, 10, ScaleDirection.Vertically, ScaleAnchor.Bottom, false)
    bone.setPosition(142, 81)
    bone.setVelocity(-50, 0)
    bone.setFlag(SpriteFlag.DestroyOnWall, true)
}
function bone7() {
    bone72 = sprites.create(assets.image`myImage4`, SpriteKind.Enemy)
    scaling.scaleByPixels(bone72, 20, ScaleDirection.Vertically, ScaleAnchor.Bottom, false)
    bone72.setPosition(142, 81)
    bone72.setVelocity(-50, 0)
    bone72.setFlag(SpriteFlag.DestroyOnWall, true)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (selectmode == 1) {
        selectedbutton += 1
    }
})
browserEvents.Space.onEvent(browserEvents.KeyEvent.Pressed, function() {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        if(gravity)
        mySprite.vy = -190
    }
})
function mercyselected() {
    debug.sayText("mercy")
    game.setGameOverMessage(false, "You surrendered...")
    game.setGameOverEffect(false, effects.dissolve)
    game.gameOver(false)
}
function bone2() {
    bone22 = sprites.create(assets.image`myImage4`, SpriteKind.Enemy)
    scaling.scaleByPixels(bone22, 20, ScaleDirection.Vertically, ScaleAnchor.Bottom, false)
    bone22.setPosition(142, 81)
    bone22.setVelocity(-50, 0)
    bone22.setFlag(SpriteFlag.DestroyOnWall, true)
}
function bone3() {
    bone32 = sprites.create(assets.image`myImage4`, SpriteKind.Enemy)
    scaling.scaleByPixels(bone32, 40, ScaleDirection.Vertically, ScaleAnchor.Bottom, false)
    bone32.setPosition(142, 81)
    bone32.setVelocity(-50, 0)
    bone32.setFlag(SpriteFlag.DestroyOnWall, true)
}
function bone5() {
    bone52 = sprites.create(assets.image`myImage4`, SpriteKind.Enemy)
    scaling.scaleByPixels(bone52, 40, ScaleDirection.Vertically, ScaleAnchor.Bottom, false)
    bone52.setPosition(142, 81)
    bone52.setVelocity(-50, 0)
    bone52.setFlag(SpriteFlag.DestroyOnWall, true)
}
function bone4() {
    bone42 = sprites.create(assets.image`blueBone`, SpriteKind.BlueBone)
    scaling.scaleByPixels(bone42, 50, ScaleDirection.Vertically, ScaleAnchor.Bottom, false)
    bone42.setPosition(142, 81)
    bone42.setVelocity(-50, 0)
    bone42.setFlag(SpriteFlag.DestroyOnWall, true)
}
function bone8() {
    bone82 = sprites.create(assets.image`myImage4`, SpriteKind.Enemy)
    scaling.scaleByPixels(bone82, 10, ScaleDirection.Vertically, ScaleAnchor.Bottom, false)
    bone82.setPosition(142, 81)
    bone82.setVelocity(-50, 0)
    bone82.setFlag(SpriteFlag.DestroyOnWall, true)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if(attacknumber<=5){
    damage += -1
    }else{
        damage -= 2
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.button, function (sprite, otherSprite) {
    if(sprite==smashr){
        sprites.destroy(sprite)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.BlueBone, function (sprite, otherSprite) {
    if(mySprite.vy==0&&mySprite.vx==0){
    
    }else{
    damage += -1
    }
})
let bone82: Sprite = null
let bone42: Sprite = null
let bone52: Sprite = null
let bone32: Sprite = null
let bone22: Sprite = null
let attacknumber = 1
let steak =3;
let pie = 4;
let snowmen= 2;
let health_potion=1
let bone72: Sprite = null
let bone: Sprite = null
let guitext = ""
let selectedbutton = 0
let gui_message_number = 0
let bone62: Sprite = null
let health: Sprite = null
let mercybutton_right: Sprite = null
let mercybutton_left: Sprite = null
let itembutton_right: Sprite = null
let itembutton_left: Sprite = null
let actbutton_right: Sprite = null
let actbutton_left: Sprite = null
let fightbutton_right: Sprite = null
let fightbutton_left: Sprite = null
let gui: Sprite = null
let mySprite: Sprite = null
let sans: Sprite = null
let selectmode = 0
let bone_end: Sprite = null
let damage = 0
let inbattle = 0
let mercybutton = 0
let itembutton = 0
let actbutton = 0
let Fightbutton = 0
let guimode = 0
let gravity = true
let debug: Sprite = null
bootupgui()
forever(function () {
    gui.sayText(guitext)
})
forever(function () {
    if (inbattle == 1&&gravity) {
        controller.moveSprite(mySprite, 100, 0)
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function() {
    if(mySprite.isHittingTile(CollisionDirection.Bottom)){
        if(inbattle==1)
        mySprite.vy=-165
    }
})
forever(function () {
    if (actbutton == 1) {
        if (guimode == 1) {
            if (gui_message_number == 1) {
                guitext = "x CHECK                                                                      "
            }
            if (gui_message_number == 2) {
                if(attacknumber<=5){
                    guitext = "x SANS"
                }else{
                    guitext = "x JODIM"
                }                                                                            
            }
            if (gui_message_number == 3) {
                if (attacknumber <= 5) {
                    guitext = "xSANS 1 ATK 1 xDEF"
                } else {
                    guitext = "xJODIM 2 ATK 50 xDEF"
                }
                
            }
            if (gui_message_number == 4) {
                if (attacknumber <= 5) {
                    guitext = "xThe easiest xenemy."
                } else {
                    guitext = "xA difficult xenemy"
                }
            }
            if (gui_message_number == 5) {
                if (attacknumber <= 5) {
                    guitext = "xCan only deal  x 1 damage."
                } else {
                    guitext = "xcan do more than x 1 damage"
                }
            }
            if (gui_message_number == 6) {
                turn_ended_reset_vars()
                undertale.sansturn()
            }
        }
    }
})
forever(function () {
    if (selectmode == 1) {
        if (Fightbutton == 0) {
            fightbutton_left.setImage(img`
                4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                4 . . . . . . . . . . . . . . . 
                4 . . . . . . . . 4 4 4 4 . . 4 
                4 . . . . . . . . 4 . . . . . 4 
                4 . . . . . 4 4 . 4 . . . . . 4 
                4 . . . . . 4 4 . 4 . . . . . 4 
                4 . . . . 4 4 . . 4 . . . . . 4 
                4 . . . . 4 4 . . 4 4 4 4 . . 4 
                4 . 4 . 4 4 . . . 4 . . . . . 4 
                4 . . 4 4 4 . . . 4 . . . . . 4 
                4 . . 4 4 4 . . . 4 . . . . . 4 
                4 . . 4 4 . 4 . . 4 . . . . . 4 
                4 . 4 4 . . . . . 4 . . . . . 4 
                4 . 4 4 . . . . . . . . . . . . 
                4 . . . . . . . . . . . . . . . 
                4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                `)
            fightbutton_right.setImage(img`
                4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                . . . . . . . . . . . . . . . 4 
                . 4 4 4 4 . . 4 . . 4 . 4 4 4 4 
                . 4 . . . . . 4 . . 4 . . 4 . 4 
                . 4 . . . . . 4 . . 4 . . 4 . 4 
                . 4 . . . . . 4 . . 4 . . 4 . 4 
                . 4 . . . . . 4 . . 4 . . 4 . 4 
                . 4 . . 4 4 . 4 4 4 4 . . 4 . 4 
                . 4 . . . 4 . 4 . . 4 . . 4 . 4 
                . 4 . . . 4 . 4 . . 4 . . 4 . 4 
                . 4 . . . 4 . 4 . . 4 . . 4 . 4 
                . 4 . . 4 4 . 4 . . 4 . . 4 . 4 
                . 4 4 4 4 4 . 4 . . 4 . . 4 . 4 
                . . . . . . . . . . . . . . . 4 
                . . . . . . . . . . . . . . . 4 
                4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                `)
        }
        if (actbutton == 0) {
            actbutton_left.setImage(img`
                4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                4 . . . . . . . . . . . . . . . 
                4 . . . . . . . 4 4 4 4 4 4 4 . 
                4 . 4 4 . . . . 4 . . . . . 4 . 
                4 . . . 4 . . . 4 . . . . . 4 . 
                4 . 4 . . 4 . . 4 4 . . . 4 4 . 
                4 . . 4 . 4 . . 4 4 4 4 4 4 4 . 
                4 . . 4 . 4 . . 4 4 . . . 4 4 . 
                4 . . 4 . 4 . . 4 . . . . . 4 . 
                4 . 4 . . 4 . . 4 . . . . . 4 . 
                4 . . . 4 . . . 4 . . . . . 4 . 
                4 . 4 4 . . . . 4 . . . . . 4 . 
                4 . . . . . . . 4 . . . . . 4 . 
                4 . . . . . . . . . . . . . . . 
                4 . . . . . . . . . . . . . . . 
                4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                `)
            actbutton_right.setImage(img`
                4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                . . . . . . . . . . . . . . . 4 
                . 4 4 4 4 4 . 4 4 4 4 4 4 4 . 4 
                . 4 . . . . . . . . 4 . . . . 4 
                . 4 . . . . . . . . 4 . . . . 4 
                . 4 . . . . . . . . 4 . . . . 4 
                . 4 . . . . . . . . 4 . . . . 4 
                . 4 . . . . . . . . 4 . . . . 4 
                . 4 . . . . . . . . 4 . . . . 4 
                . 4 . . . . . . . . 4 . . . . 4 
                . 4 . . . . . . . . 4 . . . . 4 
                . 4 . . . . . . . . 4 . . . . 4 
                . 4 4 4 4 4 . . . . 4 . . . . 4 
                . . . . . . . . . . . . . . . 4 
                . . . . . . . . . . . . . . . 4 
                4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                `)
        }
        if (itembutton == 0) {
            itembutton_left.setImage(img`
                4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                4 . . . . . . . . . . . . . . . 
                4 . . . . . . . 4 4 4 4 4 . 4 4 
                4 . . . . . . . . . 4 . . . . . 
                4 . 4 . 4 . 4 . . . 4 . . . . . 
                4 . . 4 4 4 . . . . 4 . . . . . 
                4 . . . 4 . . . . . 4 . . . . . 
                4 . . 4 4 4 . . . . 4 . . . . . 
                4 . . 4 4 4 4 . . . 4 . . . . . 
                4 . 4 4 . . 4 4 . . 4 . . . . . 
                4 . 4 . 4 4 . 4 . . 4 . . . . . 
                4 . 4 . 4 4 . 4 . . 4 . . . . . 
                4 . . 4 . . 4 4 4 4 4 4 4 . . . 
                4 . . . 4 4 4 . . . . . . . . . 
                4 . . . . . . . . . . . . . . . 
                4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                `)
            itembutton_right.setImage(img`
                4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                . . . . . . . . . . . . . . . 4 
                4 4 4 4 . 4 4 4 4 . 4 . . . 4 4 
                . 4 . . . 4 . . . . 4 4 . 4 4 4 
                . 4 . . . 4 . . . . 4 4 . 4 4 4 
                . 4 . . . 4 . . . . 4 . 4 . 4 4 
                . 4 . . . 4 . . . . 4 . . . 4 4 
                . 4 . . . 4 4 4 4 . 4 . . . 4 4 
                . 4 . . . 4 . . . . 4 . . . 4 4 
                . 4 . . . 4 . . . . 4 . . . 4 4 
                . 4 . . . 4 . . . . 4 . . . 4 4 
                . 4 . . . 4 . . . . 4 . . . 4 4 
                . 4 . . . 4 . . . . 4 . . . 4 4 
                . 4 . . . 4 4 4 4 . 4 . . . 4 4 
                . . . . . . . . . . . . . . . 4 
                4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                `)
        }
        if (mercybutton == 0) {
            mercybutton_left.setImage(img`
                4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                4 . . . . . . . . . . . . . . . 
                4 . . . . . . . 4 . . . 4 . 4 4 
                4 . . . . . . . 4 4 . 4 4 . 4 . 
                4 . 4 . . . 4 . 4 4 . 4 4 . 4 . 
                4 . . 4 . 4 . . 4 . 4 . 4 . 4 . 
                4 . . 4 . 4 . . 4 . . . 4 . 4 . 
                4 . . . 4 . . . 4 . . . 4 . 4 4 
                4 . . . 4 . . . 4 . . . 4 . 4 . 
                4 . . 4 . 4 . . 4 . . . 4 . 4 . 
                4 . . 4 . 4 . . 4 . . . 4 . 4 . 
                4 . 4 . . . 4 . 4 . . . 4 . 4 . 
                4 . . . . . . . 4 . . . 4 . 4 . 
                4 . . . . . . . 4 . . . 4 . 4 4 
                4 . . . . . . . . . . . . . . . 
                4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                `)
            mercybutton_right.setImage(img`
                4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                . . . . . . . . . . . . . . . 4 
                4 4 . 4 4 4 . . 4 4 4 . 4 . 4 4 
                . . . 4 . . 4 . 4 . . . 4 . 4 4 
                . . . 4 . . 4 . 4 . . . 4 . 4 4 
                . . . 4 . . 4 . 4 . . . 4 . 4 4 
                . . . 4 . 4 . . 4 . . . . 4 . 4 
                4 4 . 4 4 . . . 4 . . . . 4 . 4 
                . . . 4 . 4 . . 4 . . . . 4 . 4 
                . . . 4 . . 4 . 4 . . . . 4 . 4 
                . . . 4 . . 4 . 4 . . . . 4 . 4 
                . . . 4 . . 4 . 4 . . . . 4 . 4 
                . . . 4 . . 4 . 4 . . . . 4 . 4 
                4 4 . 4 . . 4 . 4 4 4 . . 4 . 4 
                . . . . . . . . . . . . . . . 4 
                4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                `)
        }
    }
})
forever(function () {
    if (selectmode == 1) {
        if (selectedbutton == 5) {
            selectedbutton = 1
        }if (selectedbutton == 0) {
            selectedbutton = 4
        }if (selectedbutton == 1) {
            Fightbutton = 1
            actbutton = 0
            itembutton = 0
            mercybutton = 0
        } if (selectedbutton == 2) {
            Fightbutton = 0
            actbutton = 1
            itembutton = 0
            mercybutton = 0
        }if (selectedbutton == 3) {
            Fightbutton = 0
            actbutton = 0
            itembutton = 1
            mercybutton = 0
        }if (selectedbutton == 4) {
            Fightbutton = 0
            actbutton = 0
            itembutton = 0
            mercybutton = 1
        }
    }
})
forever(function () {
    if (selectmode == 1) {
        if (Fightbutton == 1) {
            fightbutton_left.setImage(img`
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 . . . . . . . . . . . . . . . 
                5 . . . . . . . . 5 5 5 5 . . 5 
                5 . . . . . . . . 5 . . . . . 5 
                5 . . . . . 5 5 . 5 . . . . . 5 
                5 . . . . . 5 5 . 5 . . . . . 5 
                5 . . . . 5 5 . . 5 . . . . . 5 
                5 . . . . 5 5 . . 5 5 5 5 . . 5 
                5 . 5 . 5 5 . . . 5 . . . . . 5 
                5 . . 5 5 5 . . . 5 . . . . . 5 
                5 . . 5 5 5 . . . 5 . . . . . 5 
                5 . . 5 5 . 5 . . 5 . . . . . 5 
                5 . 5 5 . . . . . 5 . . . . . 5 
                5 . 5 5 . . . . . . . . . . . . 
                5 . . . . . . . . . . . . . . . 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                `)
            fightbutton_right.setImage(img`
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                . . . . . . . . . . . . . . . 5 
                . 5 5 5 5 . . 5 . . 5 . 5 5 5 5 
                . 5 . . . . . 5 . . 5 . . 5 . 5 
                . 5 . . . . . 5 . . 5 . . 5 . 5 
                . 5 . . . . . 5 . . 5 . . 5 . 5 
                . 5 . . . . . 5 . . 5 . . 5 . 5 
                . 5 . . 5 5 . 5 5 5 5 . . 5 . 5 
                . 5 . . . 5 . 5 . . 5 . . 5 . 5 
                . 5 . . . 5 . 5 . . 5 . . 5 . 5 
                . 5 . . . 5 . 5 . . 5 . . 5 . 5 
                . 5 . . 5 5 . 5 . . 5 . . 5 . 5 
                . 5 5 5 5 5 . 5 . . 5 . . 5 . 5 
                . . . . . . . . . . . . . . . 5 
                . . . . . . . . . . . . . . . 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                `)
        }
        if (actbutton == 1) {
            actbutton_left.setImage(img`
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 . . . . . . . . . . . . . . . 
                5 . . . . . . . 5 5 5 5 5 5 5 . 
                5 . 5 5 . . . . 5 . . . . . 5 . 
                5 . . . 5 . . . 5 . . . . . 5 . 
                5 . 5 . . 5 . . 5 5 . . . 5 5 . 
                5 . . 5 . 5 . . 5 5 5 5 5 5 5 . 
                5 . . 5 . 5 . . 5 5 . . . 5 5 . 
                5 . . 5 . 5 . . 5 . . . . . 5 . 
                5 . 5 . . 5 . . 5 . . . . . 5 . 
                5 . . . 5 . . . 5 . . . . . 5 . 
                5 . 5 5 . . . . 5 . . . . . 5 . 
                5 . . . . . . . 5 . . . . . 5 . 
                5 . . . . . . . . . . . . . . . 
                5 . . . . . . . . . . . . . . . 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                `)
            actbutton_right.setImage(img`
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                . . . . . . . . . . . . . . . 5 
                . 5 5 5 5 5 . 5 5 5 5 5 5 5 . 5 
                . 5 . . . . . . . . 5 . . . . 5 
                . 5 . . . . . . . . 5 . . . . 5 
                . 5 . . . . . . . . 5 . . . . 5 
                . 5 . . . . . . . . 5 . . . . 5 
                . 5 . . . . . . . . 5 . . . . 5 
                . 5 . . . . . . . . 5 . . . . 5 
                . 5 . . . . . . . . 5 . . . . 5 
                . 5 . . . . . . . . 5 . . . . 5 
                . 5 . . . . . . . . 5 . . . . 5 
                . 5 5 5 5 5 . . . . 5 . . . . 5 
                . . . . . . . . . . . . . . . 5 
                . . . . . . . . . . . . . . . 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                `)
        }
        if (itembutton == 1) {
            itembutton_left.setImage(img`
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 . . . . . . . . . . . . . . . 
                5 . . . . . . . 5 5 5 5 5 . 5 5 
                5 . . . . . . . . . 5 . . . . . 
                5 . 5 . 5 . 5 . . . 5 . . . . . 
                5 . . 5 5 5 . . . . 5 . . . . . 
                5 . . . 5 . . . . . 5 . . . . . 
                5 . . 5 5 5 . . . . 5 . . . . . 
                5 . . 5 5 5 5 . . . 5 . . . . . 
                5 . 5 5 . . 5 5 . . 5 . . . . . 
                5 . 5 . 5 5 . 5 . . 5 . . . . . 
                5 . 5 . 5 5 . 5 . . 5 . . . . . 
                5 . . 5 . . 5 5 5 5 5 5 5 . . . 
                5 . . . 5 5 5 . . . . . . . . . 
                5 . . . . . . . . . . . . . . . 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                `)
            itembutton_right.setImage(img`
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                . . . . . . . . . . . . . . . 5 
                5 5 5 5 . 5 5 5 5 . 5 . . . 5 5 
                . 5 . . . 5 . . . . 5 5 . 5 5 5 
                . 5 . . . 5 . . . . 5 5 . 5 5 5 
                . 5 . . . 5 . . . . 5 . 5 . 5 5 
                . 5 . . . 5 . . . . 5 . . . 5 5 
                . 5 . . . 5 5 5 5 . 5 . . . 5 5 
                . 5 . . . 5 . . . . 5 . . . 5 5 
                . 5 . . . 5 . . . . 5 . . . 5 5 
                . 5 . . . 5 . . . . 5 . . . 5 5 
                . 5 . . . 5 . . . . 5 . . . 5 5 
                . 5 . . . 5 . . . . 5 . . . 5 5 
                . 5 . . . 5 5 5 5 . 5 . . . 5 5 
                . . . . . . . . . . . . . . . 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                `)
        }
        if (mercybutton == 1) {
            mercybutton_left.setImage(img`
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 . . . . . . . . . . . . . . . 
                5 . . . . . . . 5 . . . 5 . 5 5 
                5 . . . . . . . 5 5 . 5 5 . 5 . 
                5 . 5 . . . 5 . 5 5 . 5 5 . 5 . 
                5 . . 5 . 5 . . 5 . 5 . 5 . 5 . 
                5 . . 5 . 5 . . 5 . . . 5 . 5 . 
                5 . . . 5 . . . 5 . . . 5 . 5 5 
                5 . . . 5 . . . 5 . . . 5 . 5 . 
                5 . . 5 . 5 . . 5 . . . 5 . 5 . 
                5 . . 5 . 5 . . 5 . . . 5 . 5 . 
                5 . 5 . . . 5 . 5 . . . 5 . 5 . 
                5 . . . . . . . 5 . . . 5 . 5 . 
                5 . . . . . . . 5 . . . 5 . 5 5 
                5 . . . . . . . . . . . . . . . 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                `)
            mercybutton_right.setImage(img`
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                . . . . . . . . . . . . . . . 5 
                5 5 . 5 5 5 . . 5 5 5 . 5 . 5 5 
                . . . 5 . . 5 . 5 . . . 5 . 5 5 
                . . . 5 . . 5 . 5 . . . 5 . 5 5 
                . . . 5 . . 5 . 5 . . . 5 . 5 5 
                . . . 5 . 5 . . 5 . . . . 5 . 5 
                5 5 . 5 5 . . . 5 . . . . 5 . 5 
                . . . 5 . 5 . . 5 . . . . 5 . 5 
                . . . 5 . . 5 . 5 . . . . 5 . 5 
                . . . 5 . . 5 . 5 . . . . 5 . 5 
                . . . 5 . . 5 . 5 . . . . 5 . 5 
                . . . 5 . . 5 . 5 . . . . 5 . 5 
                5 5 . 5 . . 5 . 5 5 5 . . 5 . 5 
                . . . . . . . . . . . . . . . 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                `)
        }
    }
})
let statusbar = statusbars.create(40, 4, 0)
statusbar.setLabel("HP")
statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
statusbar.attachToSprite(health)
statusbar.max=200
health.y += -5;
health.x+=35;
health.z = -1
forever(function () {
    statusbar.value=damage
    statusbar.setLabel(damage+"/200")
})