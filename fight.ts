namespace undertale{
    
    /**
     * secound part of sans first attack
    */
    //% blockId=s_attack1
    //% block="first sans attack"
    //% weight=10
    //% blockGap=8
    //% help=undertale/no-help
    //% group="Sans Attacks"
export function s_attack1(){
    undertale.laser()
    undertale.linearBone(0, 200, AttackType.Laser)
    undertale.linearBone(0, 400, AttackType.Laser)
    undertale.linearBone(0, 600, AttackType.Laser)
    undertale.linearBone(0, 800, AttackType.Laser)
    undertale.linearBone(0, 1000, AttackType.Laser)
    undertale.linearBone(0, 1200, AttackType.Laser)
    undertale.linearBone(0, 1400, AttackType.Laser)
    undertale.linearBone(0, 1600, AttackType.Laser)
    undertale.linearBone(0, 1800, AttackType.Laser)
    undertale.linearBone(0, 2000, AttackType.Laser)
    timer.after(2100, function(){
        undertale.laser()
        undertale.linearBone(0, 200, AttackType.Laser)
        undertale.linearBone(0, 400, AttackType.Laser)
        undertale.linearBone(0, 600, AttackType.Laser)
        undertale.linearBone(0, 800, AttackType.Laser)
        undertale.linearBone(0, 1000, AttackType.Laser)
        undertale.linearBone(0, 1200, AttackType.Laser)
        undertale.linearBone(0, 1400, AttackType.Laser)
        undertale.linearBone(0, 1600, AttackType.Laser)
        undertale.linearBone(0, 1800, AttackType.Laser)
        undertale.linearBone(0, 2000, AttackType.Laser)
        timer.after(2100, function(){
            undertale.laser()
            undertale.linearBone(0, 200, AttackType.Laser)
            undertale.linearBone(0, 400, AttackType.Laser)
            undertale.linearBone(0, 600, AttackType.Laser)
            undertale.linearBone(0, 800, AttackType.Laser)
            undertale.linearBone(0, 1000, AttackType.Laser)
            undertale.linearBone(0, 1200, AttackType.Laser)
            undertale.linearBone(0, 1400, AttackType.Laser)
            undertale.linearBone(0, 1600, AttackType.Laser)
            undertale.linearBone(0, 1800, AttackType.Laser)
            undertale.linearBone(0, 2000, AttackType.Laser)
            timer.after(2100, function () {
                undertale.laser()
                undertale.linearBone(0, 200, AttackType.Laser)
                undertale.linearBone(0, 400, AttackType.Laser)
                undertale.linearBone(0, 600, AttackType.Laser)
                undertale.linearBone(0, 800, AttackType.Laser)
                undertale.linearBone(0, 1000, AttackType.Laser)
                undertale.linearBone(0, 1200, AttackType.Laser)
                undertale.linearBone(0, 1400, AttackType.Laser)
                undertale.linearBone(0, 1600, AttackType.Laser)
                undertale.linearBone(0, 1800, AttackType.Laser)
                undertale.linearBone(0, 2000, AttackType.Laser)
                undertale.linearBone(0, 2050, AttackType.Laser)
                undertale.linearBone(0, 2100, AttackType.Laser)
                undertale.linearBone(0, 2150, AttackType.Laser)
                undertale.linearBone(0, 2200, AttackType.Laser)
                undertale.linearBone(0, 2250, AttackType.Laser)
                timer.after(3000, function(){
                    undertale.startTurn()
                })
            })
        })
    })
}

    /**
     * sans secound attack
    */
    //% blockId=sans_attack2
    //% block="secound sans attack"
    //% weight=9
    //% blockGap=8
    //% help=undertale/no-help
    //% group="Sans Attacks"
export function sans_attack2() {
    undertale.linearBone(0, 400, AttackType.Laser)
    undertale.linearBone(0, 800, AttackType.Laser)
    undertale.linearBone(0, 1200, AttackType.Laser)
    undertale.linearBone(0, 1600, AttackType.Laser)
    undertale.linearBone(0, 2000, AttackType.Laser)
    undertale.linearBone(0, 2400, AttackType.Laser)
    undertale.linearBone(0, 2800, AttackType.Laser)
    undertale.linearBone(0, 3200, AttackType.Laser)
    undertale.linearBone(0, 3600, AttackType.Laser)
    undertale.linearBone(0, 4000, AttackType.Laser)
    undertale.linearBone(4, 5250, AttackType.Normal)
    undertale.linearBone(4, 5500, AttackType.Normal)
    undertale.linearBone(4, 6000, AttackType.Laser)
    timer.after(6000, function(){
        let time = 500
        for (let i = 0; i < 56; i++) {
            time+=750
            if(Math.percentChance(80)){
                undertale.linearBone(randint(0,12), time, AttackType.Normal)
            }else{
                undertale.linearBone(randint(randint(6, 14), 90), time, AttackType.Blue)
            }
            if(Math.percentChance(5)){
                undertale.linearBone(0, time, AttackType.Laser)
            }
        }
        timer.after(48750+3000, function() {
            mySprite.vy = -20
            undertale.startTurn()
        })
    })
}

    /**
     * sans third attack
    */
    //% blockId=sans_attack3
    //% block="third sans attack"
    //% weight=8
    //% blockGap=8
    //% help=undertale/no-help
    //% group="Sans Attacks"
    export function sans_attack3() {
        undertale.blueBone(0, true)
        undertale.laser()
        timer.after(500, function() {
            mySprite.ay=0
            sans.sayText("ha!", 100)
            mySprite.setImage(img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . 5 . 5 . . . . . .
                . . . . . . 5 5 5 5 5 . . . . .
                . . . . . . 5 5 5 5 5 . . . . .
                . . . . . . . 5 5 5 . . . . . .
                . . . . . . . . 5 . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `)
            mySprite.setPosition(screen.width/2, screen.height/2)
            controller.moveSprite(mySprite, 100, 100)
            gravity=false
            tiles.setCurrentTilemap(tilemap`level2`)
            timer.after(5500, function(){
                undertale.linearBone(0, 0, AttackType.RightLaser)
                undertale.linearBone(0, 0, AttackType.Laser)
                undertale.linearBone(0, 500, AttackType.RightLaser)
                undertale.linearBone(0, 1500, AttackType.RightLaser)
                undertale.linearBone(0, 2500, AttackType.RightLaser)
                undertale.linearBone(0, 3000, AttackType.RightLaser)
                undertale.linearBone(0, 3500, AttackType.RightLaser)
                undertale.linearBone(0, 4000, AttackType.RightLaser)
                undertale.linearBone(0, 4500, AttackType.RightLaser)
                undertale.linearBone(0, 5000, AttackType.RightLaser)
                undertale.linearBone(0, 6000, AttackType.RightLaser)
                undertale.linearBone(0, 7000, AttackType.RightLaser)
                undertale.linearBone(0, 8000, AttackType.RightLaser)
                undertale.linearBone(0, 9000, AttackType.RightLaser)
                undertale.linearBone(0, 10000, AttackType.RightLaser)
                undertale.linearBone(0, 10000, AttackType.Laser)
                undertale.linearBone(0, 9000, AttackType.Laser)
                undertale.linearBone(0, 8000, AttackType.Laser)
                undertale.linearBone(0, 7000, AttackType.Laser)
                undertale.linearBone(0, 6000, AttackType.Laser)
                undertale.linearBone(0, 5000, AttackType.Laser)
                undertale.linearBone(0, 4500, AttackType.Laser)
                undertale.linearBone(0, 4000, AttackType.Laser)
                undertale.linearBone(0, 3500, AttackType.Laser)
                undertale.linearBone(0, 3000, AttackType.Laser)
                undertale.linearBone(0, 500, AttackType.Laser)
                undertale.linearBone(0, 1500, AttackType.Laser)
                undertale.linearBone(0, 2500, AttackType.Laser)
                timer.after(11000, function(){
                undertale.startTurn()
                gravity=true
                mySprite.setImage(img`
                    . . . . . . . . . . . . . . . .
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
                `)
             tiles.setCurrentTilemap(tilemap`level`)
                })
            })
        })
    }

    /**
 * sans secound attack
*/
    //% blockId=sans_attack4
    //% block="fourth sans attack"
    //% weight=7
    //% blockGap=8
    //% help=undertale/no-help
    //% group="Sans Attacks"
    export function sans_attack4() {
        undertale.normalBone(0)
        undertale.rightLaser();
        undertale.laser();
        undertale.linearBone(0, 500, AttackType.Blue)
        undertale.linearBone(0, 500, AttackType.Laser)
        undertale.linearBone(0, 500, AttackType.Laser)
        undertale.linearBone(0, 500, AttackType.Laser)
        undertale.linearBone(0, 500, AttackType.Laser)
        undertale.linearBone(0, 500, AttackType.Laser)
        undertale.linearBone(0, 500, AttackType.Laser)
        undertale.linearBone(0, 500, AttackType.Laser)
        undertale.linearBone(0, 500, AttackType.Laser)
        undertale.linearBone(0, 500, AttackType.Laser)
        undertale.linearBone(0, 500, AttackType.Laser)
        undertale.linearBone(0, 500, AttackType.RightLaser)
        undertale.linearBone(0, 500, AttackType.RightLaser)
        undertale.linearBone(0, 500, AttackType.RightLaser)
        undertale.linearBone(0, 500, AttackType.RightLaser)
        undertale.linearBone(0, 500, AttackType.RightLaser)
        undertale.linearBone(0, 500, AttackType.RightLaser)
        undertale.linearBone(0, 750, AttackType.Blue)
        timer.after(2000, function(){
            undertale.normalBone(10)
            undertale.rightLaser();
            undertale.laser();
            undertale.linearBone(0, 500, AttackType.Blue)
            undertale.linearBone(0, 500, AttackType.Laser)
            undertale.linearBone(0, 500, AttackType.Laser)
            undertale.linearBone(0, 500, AttackType.Laser)
            undertale.linearBone(0, 500, AttackType.Laser)
            undertale.linearBone(0, 500, AttackType.Laser)
            undertale.linearBone(0, 500, AttackType.Laser)
            undertale.linearBone(0, 500, AttackType.Laser)
            undertale.linearBone(0, 500, AttackType.Laser)
            undertale.linearBone(0, 500, AttackType.Laser)
            undertale.linearBone(0, 500, AttackType.Laser)
            undertale.linearBone(0, 500, AttackType.Laser)
            undertale.linearBone(0, 500, AttackType.Laser)
            undertale.linearBone(0, 500, AttackType.Laser)
            undertale.linearBone(0, 500, AttackType.Laser)
            undertale.linearBone(0, 500, AttackType.Laser)
            undertale.linearBone(0, 500, AttackType.Laser)
            undertale.linearBone(0, 500, AttackType.RightLaser)
            undertale.linearBone(0, 500, AttackType.RightLaser)
            undertale.linearBone(0, 500, AttackType.RightLaser)
            undertale.linearBone(0, 500, AttackType.RightLaser)
            undertale.linearBone(0, 500, AttackType.RightLaser)
            undertale.linearBone(0, 500, AttackType.RightLaser)
            timer.after(2000, function () {
                undertale.normalBone(10)
                undertale.rightLaser();
                undertale.laser();
                undertale.linearBone(0, 500, AttackType.Blue)
                undertale.linearBone(0, 500, AttackType.Laser)
                undertale.linearBone(0, 500, AttackType.Laser)
                undertale.linearBone(0, 500, AttackType.Laser)
                undertale.linearBone(0, 500, AttackType.Laser)
                undertale.linearBone(0, 500, AttackType.Laser)
                undertale.linearBone(0, 500, AttackType.Laser)
                undertale.linearBone(0, 500, AttackType.Laser)
                undertale.linearBone(0, 500, AttackType.Laser)
                undertale.linearBone(0, 500, AttackType.Laser)
                undertale.linearBone(0, 500, AttackType.Laser)
                undertale.linearBone(0, 500, AttackType.Laser)
                undertale.linearBone(0, 500, AttackType.Laser)
                undertale.linearBone(0, 500, AttackType.Laser)
                undertale.linearBone(0, 500, AttackType.Laser)
                undertale.linearBone(0, 500, AttackType.Laser)
                undertale.linearBone(0, 500, AttackType.Laser)
                undertale.linearBone(0, 500, AttackType.RightLaser)
                undertale.linearBone(0, 500, AttackType.RightLaser)
                undertale.linearBone(0, 500, AttackType.RightLaser)
                undertale.linearBone(0, 500, AttackType.RightLaser)
                undertale.linearBone(0, 500, AttackType.RightLaser)
                undertale.linearBone(0, 500, AttackType.RightLaser)
                timer.after(2000, function () {
                    undertale.normalBone(10)
                    undertale.rightLaser();
                    undertale.laser();
                    undertale.linearBone(0, 500, AttackType.Blue)
                    undertale.linearBone(0, 500, AttackType.Laser)
                    undertale.linearBone(0, 500, AttackType.Laser)
                    undertale.linearBone(0, 500, AttackType.Laser)
                    undertale.linearBone(0, 500, AttackType.Laser)
                    undertale.linearBone(0, 500, AttackType.Laser)
                    undertale.linearBone(0, 500, AttackType.Laser)
                    undertale.linearBone(0, 500, AttackType.Laser)
                    undertale.linearBone(0, 500, AttackType.Laser)
                    undertale.linearBone(0, 500, AttackType.Laser)
                    undertale.linearBone(0, 500, AttackType.Laser)
                    undertale.linearBone(0, 500, AttackType.Laser)
                    undertale.linearBone(0, 500, AttackType.Laser)
                    undertale.linearBone(0, 500, AttackType.Laser)
                    undertale.linearBone(0, 500, AttackType.Laser)
                    undertale.linearBone(0, 500, AttackType.Laser)
                    undertale.linearBone(0, 500, AttackType.Laser)
                    undertale.linearBone(0, 500, AttackType.RightLaser)
                    undertale.linearBone(0, 500, AttackType.RightLaser)
                    undertale.linearBone(0, 500, AttackType.RightLaser)
                    undertale.linearBone(0, 500, AttackType.RightLaser)
                    undertale.linearBone(0, 500, AttackType.RightLaser)
                    undertale.linearBone(0, 500, AttackType.RightLaser)
                    timer.after(2000, function () {
                        undertale.normalBone(10)
                        undertale.rightLaser();
                        undertale.laser();
                        undertale.linearBone(0, 500, AttackType.Blue)
                        undertale.linearBone(0, 500, AttackType.Laser)
                        undertale.linearBone(0, 500, AttackType.Laser)
                        undertale.linearBone(0, 500, AttackType.Laser)
                        undertale.linearBone(0, 500, AttackType.Laser)
                        undertale.linearBone(0, 500, AttackType.Laser)
                        undertale.linearBone(0, 500, AttackType.Laser)
                        undertale.linearBone(0, 500, AttackType.Laser)
                        undertale.linearBone(0, 500, AttackType.Laser)
                        undertale.linearBone(0, 500, AttackType.Laser)
                        undertale.linearBone(0, 500, AttackType.Laser)
                        undertale.linearBone(0, 500, AttackType.Laser)
                        undertale.linearBone(0, 500, AttackType.Laser)
                        undertale.linearBone(0, 500, AttackType.Laser)
                        undertale.linearBone(0, 500, AttackType.Laser)
                        undertale.linearBone(0, 500, AttackType.Laser)
                        undertale.linearBone(0, 500, AttackType.Laser)
                        undertale.linearBone(0, 500, AttackType.RightLaser)
                        undertale.linearBone(0, 500, AttackType.RightLaser)
                        undertale.linearBone(0, 500, AttackType.RightLaser)
                        undertale.linearBone(0, 500, AttackType.RightLaser)
                        undertale.linearBone(0, 500, AttackType.RightLaser)
                        undertale.linearBone(0, 500, AttackType.RightLaser)
                        timer.after(2000, function () {
                            undertale.normalBone(10)
                            undertale.rightLaser();
                            undertale.laser();
                            undertale.linearBone(0, 500, AttackType.Blue)
                            undertale.linearBone(0, 500, AttackType.Laser)
                            undertale.linearBone(0, 500, AttackType.Laser)
                            undertale.linearBone(0, 500, AttackType.Laser)
                            undertale.linearBone(0, 500, AttackType.Laser)
                            undertale.linearBone(0, 500, AttackType.Laser)
                            undertale.linearBone(0, 500, AttackType.Laser)
                            undertale.linearBone(0, 500, AttackType.Laser)
                            undertale.linearBone(0, 500, AttackType.Laser)
                            undertale.linearBone(0, 500, AttackType.Laser)
                            undertale.linearBone(0, 500, AttackType.Laser)
                            undertale.linearBone(0, 500, AttackType.Laser)
                            undertale.linearBone(0, 500, AttackType.Laser)
                            undertale.linearBone(0, 500, AttackType.Laser)
                            undertale.linearBone(0, 500, AttackType.Laser)
                            undertale.linearBone(0, 500, AttackType.Laser)
                            undertale.linearBone(0, 500, AttackType.Laser)
                            undertale.linearBone(0, 500, AttackType.RightLaser)
                            undertale.linearBone(0, 500, AttackType.RightLaser)
                            undertale.linearBone(0, 500, AttackType.RightLaser)
                            undertale.linearBone(0, 500, AttackType.RightLaser)
                            undertale.linearBone(0, 500, AttackType.RightLaser)
                            undertale.linearBone(0, 500, AttackType.RightLaser)
                            timer.after(2000, function () {
                                undertale.normalBone(10)
                                undertale.rightLaser();
                                undertale.laser();
                                undertale.linearBone(0, 500, AttackType.Blue)
                                undertale.linearBone(0, 500, AttackType.Laser)
                                undertale.linearBone(0, 500, AttackType.Laser)
                                undertale.linearBone(0, 500, AttackType.Laser)
                                undertale.linearBone(0, 500, AttackType.Laser)
                                undertale.linearBone(0, 500, AttackType.Laser)
                                undertale.linearBone(0, 500, AttackType.Laser)
                                undertale.linearBone(0, 500, AttackType.Laser)
                                undertale.linearBone(0, 500, AttackType.Laser)
                                undertale.linearBone(0, 500, AttackType.Laser)
                                undertale.linearBone(0, 500, AttackType.Laser)
                                undertale.linearBone(0, 500, AttackType.Laser)
                                undertale.linearBone(0, 500, AttackType.Laser)
                                undertale.linearBone(0, 500, AttackType.Laser)
                                undertale.linearBone(0, 500, AttackType.Laser)
                                undertale.linearBone(0, 500, AttackType.Laser)
                                undertale.linearBone(0, 500, AttackType.Laser)
                                undertale.linearBone(0, 500, AttackType.RightLaser)
                                undertale.linearBone(0, 500, AttackType.RightLaser)
                                undertale.linearBone(0, 500, AttackType.RightLaser)
                                undertale.linearBone(0, 500, AttackType.RightLaser)
                                undertale.linearBone(0, 500, AttackType.RightLaser)
                                undertale.linearBone(0, 500, AttackType.RightLaser)
                                timer.after(2000, function () {
                                    undertale.normalBone(10)
                                    undertale.rightLaser();
                                    undertale.laser();
                                    undertale.linearBone(0, 500, AttackType.Blue)
                                    undertale.linearBone(0, 500, AttackType.Laser)
                                    undertale.linearBone(0, 500, AttackType.Laser)
                                    undertale.linearBone(0, 500, AttackType.Laser)
                                    undertale.linearBone(0, 500, AttackType.Laser)
                                    undertale.linearBone(0, 500, AttackType.Laser)
                                    undertale.linearBone(0, 500, AttackType.Laser)
                                    undertale.linearBone(0, 500, AttackType.Laser)
                                    undertale.linearBone(0, 500, AttackType.Laser)
                                    undertale.linearBone(0, 500, AttackType.Laser)
                                    undertale.linearBone(0, 500, AttackType.Laser)
                                    undertale.linearBone(0, 500, AttackType.Laser)
                                    undertale.linearBone(0, 500, AttackType.Laser)
                                    undertale.linearBone(0, 500, AttackType.Laser)
                                    undertale.linearBone(0, 500, AttackType.Laser)
                                    undertale.linearBone(0, 500, AttackType.Laser)
                                    undertale.linearBone(0, 500, AttackType.Laser)
                                    undertale.linearBone(0, 500, AttackType.RightLaser)
                                    undertale.linearBone(0, 500, AttackType.RightLaser)
                                    undertale.linearBone(0, 500, AttackType.RightLaser)
                                    undertale.linearBone(0, 500, AttackType.RightLaser)
                                    undertale.linearBone(0, 500, AttackType.RightLaser)
                                    undertale.linearBone(0, 500, AttackType.RightLaser)
                                    timer.after(2000, function () {
                                        undertale.normalBone(10)
                                        undertale.rightLaser();
                                        undertale.laser();
                                        undertale.linearBone(0, 500, AttackType.Blue)
                                        undertale.linearBone(0, 500, AttackType.Laser)
                                        undertale.linearBone(0, 500, AttackType.Laser)
                                        undertale.linearBone(0, 500, AttackType.Laser)
                                        undertale.linearBone(0, 500, AttackType.Laser)
                                        undertale.linearBone(0, 500, AttackType.Laser)
                                        undertale.linearBone(0, 500, AttackType.Laser)
                                        undertale.linearBone(0, 500, AttackType.Laser)
                                        undertale.linearBone(0, 500, AttackType.Laser)
                                        undertale.linearBone(0, 500, AttackType.Laser)
                                        undertale.linearBone(0, 500, AttackType.Laser)
                                        undertale.linearBone(0, 500, AttackType.Laser)
                                        undertale.linearBone(0, 500, AttackType.Laser)
                                        undertale.linearBone(0, 500, AttackType.Laser)
                                        undertale.linearBone(0, 500, AttackType.Laser)
                                        undertale.linearBone(0, 500, AttackType.Laser)
                                        undertale.linearBone(0, 500, AttackType.Laser)
                                        undertale.linearBone(0, 500, AttackType.RightLaser)
                                        undertale.linearBone(0, 500, AttackType.RightLaser)
                                        undertale.linearBone(0, 500, AttackType.RightLaser)
                                        undertale.linearBone(0, 500, AttackType.RightLaser)
                                        undertale.linearBone(0, 500, AttackType.RightLaser)
                                        undertale.linearBone(0, 500, AttackType.RightLaser)
                                        undertale.normalBone(0)
                                        timer.after(2000, function () {
                                            undertale.normalBone(10)
                                            undertale.rightLaser();
                                            undertale.laser();
                                            undertale.linearBone(0, 500, AttackType.Blue)
                                            undertale.linearBone(0, 500, AttackType.Laser)
                                            undertale.linearBone(0, 500, AttackType.Laser)
                                            undertale.linearBone(0, 500, AttackType.Laser)
                                            undertale.linearBone(0, 500, AttackType.Laser)
                                            undertale.linearBone(0, 500, AttackType.Laser)
                                            undertale.linearBone(0, 500, AttackType.Laser)
                                            undertale.linearBone(0, 500, AttackType.Laser)
                                            undertale.linearBone(0, 500, AttackType.Laser)
                                            undertale.linearBone(0, 500, AttackType.Laser)
                                            undertale.linearBone(0, 500, AttackType.Laser)
                                            undertale.linearBone(0, 500, AttackType.Laser)
                                            undertale.linearBone(0, 500, AttackType.Laser)
                                            undertale.linearBone(0, 500, AttackType.Laser)
                                            undertale.linearBone(0, 500, AttackType.Laser)
                                            undertale.linearBone(0, 500, AttackType.Laser)
                                            undertale.linearBone(0, 500, AttackType.Laser)
                                            undertale.linearBone(0, 500, AttackType.RightLaser)
                                            undertale.linearBone(0, 500, AttackType.RightLaser)
                                            undertale.linearBone(0, 500, AttackType.RightLaser)
                                            undertale.linearBone(0, 500, AttackType.RightLaser)
                                            undertale.linearBone(0, 500, AttackType.RightLaser)
                                            undertale.linearBone(0, 500, AttackType.RightLaser)
                                            undertale.linearBone(30, 750, AttackType.Normal)
                                            timer.after(2000, function () {
                                                undertale.normalBone(10)
                                                undertale.rightLaser();
                                                undertale.laser();
                                                undertale.linearBone(0, 500, AttackType.Blue)
                                                undertale.linearBone(0, 500, AttackType.Laser)
                                                undertale.linearBone(0, 500, AttackType.Laser)
                                                undertale.linearBone(0, 500, AttackType.Laser)
                                                undertale.linearBone(0, 500, AttackType.Laser)
                                                undertale.linearBone(0, 500, AttackType.Laser)
                                                undertale.linearBone(0, 500, AttackType.Laser)
                                                undertale.linearBone(0, 500, AttackType.Laser)
                                                undertale.linearBone(0, 500, AttackType.Laser)
                                                undertale.linearBone(0, 500, AttackType.Laser)
                                                undertale.linearBone(0, 500, AttackType.Laser)
                                                undertale.linearBone(0, 500, AttackType.Laser)
                                                undertale.linearBone(0, 500, AttackType.Laser)
                                                undertale.linearBone(0, 500, AttackType.Laser)
                                                undertale.linearBone(0, 500, AttackType.Laser)
                                                undertale.linearBone(0, 500, AttackType.Laser)
                                                undertale.linearBone(0, 500, AttackType.Laser)
                                                undertale.linearBone(0, 500, AttackType.RightLaser)
                                                undertale.linearBone(0, 500, AttackType.RightLaser)
                                                undertale.linearBone(0, 500, AttackType.RightLaser)
                                                undertale.linearBone(0, 500, AttackType.RightLaser)
                                                undertale.linearBone(0, 500, AttackType.RightLaser)
                                                undertale.linearBone(0, 500, AttackType.RightLaser)
                                                timer.after(2000, function () {
                                                    undertale.normalBone(10)
                                                    undertale.rightLaser();
                                                    undertale.laser();
                                                    undertale.linearBone(0, 500, AttackType.Blue)
                                                    undertale.linearBone(0, 500, AttackType.Laser)
                                                    undertale.linearBone(0, 500, AttackType.Laser)
                                                    undertale.linearBone(0, 500, AttackType.Laser)
                                                    undertale.linearBone(0, 500, AttackType.Laser)
                                                    undertale.linearBone(0, 500, AttackType.Laser)
                                                    undertale.linearBone(0, 500, AttackType.Laser)
                                                    undertale.linearBone(0, 500, AttackType.Laser)
                                                    undertale.linearBone(0, 500, AttackType.Laser)
                                                    undertale.linearBone(0, 500, AttackType.Laser)
                                                    undertale.linearBone(0, 500, AttackType.Laser)
                                                    undertale.linearBone(0, 500, AttackType.Laser)
                                                    undertale.linearBone(0, 500, AttackType.Laser)
                                                    undertale.linearBone(0, 500, AttackType.Laser)
                                                    undertale.linearBone(0, 500, AttackType.Laser)
                                                    undertale.linearBone(0, 500, AttackType.Laser)
                                                    undertale.linearBone(0, 500, AttackType.Laser)
                                                    undertale.linearBone(0, 500, AttackType.RightLaser)
                                                    undertale.linearBone(0, 500, AttackType.RightLaser)
                                                    undertale.linearBone(0, 500, AttackType.RightLaser)
                                                    undertale.linearBone(0, 500, AttackType.RightLaser)
                                                    undertale.linearBone(0, 500, AttackType.RightLaser)
                                                    undertale.linearBone(0, 500, AttackType.RightLaser)
                                                    timer.after(2000, function () {
                                                        undertale.normalBone(10)
                                                        undertale.rightLaser();
                                                        undertale.laser();
                                                        undertale.linearBone(0, 500, AttackType.Blue)
                                                        undertale.linearBone(0, 500, AttackType.Laser)
                                                        undertale.linearBone(0, 500, AttackType.Laser)
                                                        undertale.linearBone(0, 500, AttackType.Laser)
                                                        undertale.linearBone(0, 500, AttackType.Laser)
                                                        undertale.linearBone(0, 500, AttackType.Laser)
                                                        undertale.linearBone(0, 500, AttackType.Laser)
                                                        undertale.linearBone(0, 500, AttackType.Laser)
                                                        undertale.linearBone(0, 500, AttackType.Laser)
                                                        undertale.linearBone(0, 500, AttackType.Laser)
                                                        undertale.linearBone(0, 500, AttackType.Laser)
                                                        undertale.linearBone(0, 500, AttackType.Laser)
                                                        undertale.linearBone(0, 500, AttackType.Laser)
                                                        undertale.linearBone(0, 500, AttackType.Laser)
                                                        undertale.linearBone(0, 500, AttackType.Laser)
                                                        undertale.linearBone(0, 500, AttackType.Laser)
                                                        undertale.linearBone(0, 500, AttackType.Laser)
                                                        undertale.linearBone(0, 500, AttackType.RightLaser)
                                                        undertale.linearBone(0, 500, AttackType.RightLaser)
                                                        undertale.linearBone(0, 500, AttackType.RightLaser)
                                                        undertale.linearBone(0, 500, AttackType.RightLaser)
                                                        undertale.linearBone(0, 500, AttackType.RightLaser)
                                                        undertale.linearBone(0, 500, AttackType.RightLaser)
                                                        timer.after(2000, function () {
                                                            undertale.normalBone(10)
                                                            undertale.rightLaser();
                                                            undertale.laser();
                                                            undertale.linearBone(0, 500, AttackType.Blue)
                                                            undertale.linearBone(0, 500, AttackType.Laser)
                                                            undertale.linearBone(0, 500, AttackType.Laser)
                                                            undertale.linearBone(0, 500, AttackType.Laser)
                                                            undertale.linearBone(0, 500, AttackType.Laser)
                                                            undertale.linearBone(0, 500, AttackType.Laser)
                                                            undertale.linearBone(0, 500, AttackType.Laser)
                                                            undertale.linearBone(0, 500, AttackType.Laser)
                                                            undertale.linearBone(0, 500, AttackType.Laser)
                                                            undertale.linearBone(0, 500, AttackType.Laser)
                                                            undertale.linearBone(0, 500, AttackType.Laser)
                                                            undertale.linearBone(0, 500, AttackType.Laser)
                                                            undertale.linearBone(0, 500, AttackType.Laser)
                                                            undertale.linearBone(0, 500, AttackType.Laser)
                                                            undertale.linearBone(0, 500, AttackType.Laser)
                                                            undertale.linearBone(0, 500, AttackType.Laser)
                                                            undertale.linearBone(0, 500, AttackType.Laser)
                                                            undertale.linearBone(0, 500, AttackType.RightLaser)
                                                            undertale.linearBone(0, 500, AttackType.RightLaser)
                                                            undertale.linearBone(0, 500, AttackType.RightLaser)
                                                            undertale.linearBone(0, 500, AttackType.RightLaser)
                                                            undertale.linearBone(0, 500, AttackType.RightLaser)
                                                            undertale.linearBone(0, 500, AttackType.RightLaser)
                                                            timer.after(2000, function () {
                                                                undertale.normalBone(10)
                                                                undertale.rightLaser();
                                                                undertale.laser();
                                                                undertale.linearBone(0, 500, AttackType.Blue)
                                                                undertale.linearBone(0, 500, AttackType.Laser)
                                                                undertale.linearBone(0, 500, AttackType.Laser)
                                                                undertale.linearBone(0, 500, AttackType.Laser)
                                                                undertale.linearBone(0, 500, AttackType.Laser)
                                                                undertale.linearBone(0, 500, AttackType.Laser)
                                                                undertale.linearBone(0, 500, AttackType.Laser)
                                                                undertale.linearBone(0, 500, AttackType.Laser)
                                                                undertale.linearBone(0, 500, AttackType.Laser)
                                                                undertale.linearBone(0, 500, AttackType.Laser)
                                                                undertale.linearBone(0, 500, AttackType.Laser)
                                                                undertale.linearBone(0, 500, AttackType.Laser)
                                                                undertale.linearBone(0, 500, AttackType.Laser)
                                                                undertale.linearBone(0, 500, AttackType.Laser)
                                                                undertale.linearBone(0, 500, AttackType.Laser)
                                                                undertale.linearBone(0, 500, AttackType.Laser)
                                                                undertale.linearBone(0, 500, AttackType.Laser)
                                                                undertale.linearBone(0, 500, AttackType.RightLaser)
                                                                undertale.linearBone(0, 500, AttackType.RightLaser)
                                                                undertale.linearBone(0, 500, AttackType.RightLaser)
                                                                undertale.linearBone(0, 500, AttackType.RightLaser)
                                                                undertale.linearBone(0, 500, AttackType.RightLaser)
                                                                undertale.linearBone(0, 500, AttackType.RightLaser)
                                                                timer.after(2000, function () {
                                                                    undertale.normalBone(10)
                                                                    undertale.rightLaser();
                                                                    undertale.laser();
                                                                    undertale.linearBone(0, 500, AttackType.Blue)
                                                                    undertale.linearBone(0, 500, AttackType.Laser)
                                                                    undertale.linearBone(0, 500, AttackType.Laser)
                                                                    undertale.linearBone(0, 500, AttackType.Laser)
                                                                    undertale.linearBone(0, 500, AttackType.Laser)
                                                                    undertale.linearBone(0, 500, AttackType.Laser)
                                                                    undertale.linearBone(0, 500, AttackType.Laser)
                                                                    undertale.linearBone(0, 500, AttackType.Laser)
                                                                    undertale.linearBone(0, 500, AttackType.Laser)
                                                                    undertale.linearBone(0, 500, AttackType.Laser)
                                                                    undertale.linearBone(0, 500, AttackType.Laser)
                                                                    undertale.linearBone(0, 500, AttackType.Laser)
                                                                    undertale.linearBone(0, 500, AttackType.Laser)
                                                                    undertale.linearBone(0, 500, AttackType.Laser)
                                                                    undertale.linearBone(0, 500, AttackType.Laser)
                                                                    undertale.linearBone(0, 500, AttackType.Laser)
                                                                    undertale.linearBone(0, 500, AttackType.Laser)
                                                                    undertale.linearBone(0, 500, AttackType.RightLaser)
                                                                    undertale.linearBone(0, 500, AttackType.RightLaser)
                                                                    undertale.linearBone(0, 500, AttackType.RightLaser)
                                                                    undertale.linearBone(0, 500, AttackType.RightLaser)
                                                                    undertale.linearBone(0, 500, AttackType.RightLaser)
                                                                    undertale.linearBone(0, 500, AttackType.RightLaser)
                                                                    timer.after(2000, function () {
                                                                        undertale.normalBone(10)
                                                                        undertale.rightLaser();
                                                                        undertale.laser();
                                                                        undertale.linearBone(0, 500, AttackType.Blue)
                                                                        undertale.linearBone(0, 500, AttackType.Laser)
                                                                        undertale.linearBone(0, 500, AttackType.Laser)
                                                                        undertale.linearBone(0, 500, AttackType.Laser)
                                                                        undertale.linearBone(0, 500, AttackType.Laser)
                                                                        undertale.linearBone(0, 500, AttackType.Laser)
                                                                        undertale.linearBone(0, 500, AttackType.Laser)
                                                                        undertale.linearBone(0, 500, AttackType.Laser)
                                                                        undertale.linearBone(0, 500, AttackType.Laser)
                                                                        undertale.linearBone(0, 500, AttackType.Laser)
                                                                        undertale.linearBone(0, 500, AttackType.Laser)
                                                                        undertale.linearBone(0, 500, AttackType.Laser)
                                                                        undertale.linearBone(0, 500, AttackType.Laser)
                                                                        undertale.linearBone(0, 500, AttackType.Laser)
                                                                        undertale.linearBone(0, 500, AttackType.Laser)
                                                                        undertale.linearBone(0, 500, AttackType.Laser)
                                                                        undertale.linearBone(0, 500, AttackType.Laser)
                                                                        undertale.linearBone(0, 500, AttackType.RightLaser)
                                                                        undertale.linearBone(0, 500, AttackType.RightLaser)
                                                                        undertale.linearBone(0, 500, AttackType.RightLaser)
                                                                        undertale.linearBone(0, 500, AttackType.RightLaser)
                                                                        undertale.linearBone(0, 500, AttackType.RightLaser)
                                                                        undertale.linearBone(0, 500, AttackType.RightLaser)
                                                                        timer.after(2000, function () {
                                                                            undertale.normalBone(10)
                                                                            undertale.rightLaser();
                                                                            undertale.laser();
                                                                            undertale.linearBone(0, 500, AttackType.Blue)
                                                                            undertale.linearBone(0, 500, AttackType.Laser)
                                                                            undertale.linearBone(0, 500, AttackType.Laser)
                                                                            undertale.linearBone(0, 500, AttackType.Laser)
                                                                            undertale.linearBone(0, 500, AttackType.Laser)
                                                                            undertale.linearBone(0, 500, AttackType.Laser)
                                                                            undertale.linearBone(0, 500, AttackType.Laser)
                                                                            undertale.linearBone(0, 500, AttackType.Laser)
                                                                            undertale.linearBone(0, 500, AttackType.Laser)
                                                                            undertale.linearBone(0, 500, AttackType.Laser)
                                                                            undertale.linearBone(0, 500, AttackType.Laser)
                                                                            undertale.linearBone(0, 500, AttackType.Laser)
                                                                            undertale.linearBone(0, 500, AttackType.Laser)
                                                                            undertale.linearBone(0, 500, AttackType.Laser)
                                                                            undertale.linearBone(0, 500, AttackType.Laser)
                                                                            undertale.linearBone(0, 500, AttackType.Laser)
                                                                            undertale.linearBone(0, 500, AttackType.Laser)
                                                                            undertale.linearBone(0, 500, AttackType.RightLaser)
                                                                            undertale.linearBone(0, 500, AttackType.RightLaser)
                                                                            undertale.linearBone(0, 500, AttackType.RightLaser)
                                                                            undertale.linearBone(0, 500, AttackType.RightLaser)
                                                                            undertale.linearBone(0, 500, AttackType.RightLaser)
                                                                            undertale.linearBone(0, 500, AttackType.RightLaser)
                                                                            timer.after(2000, function () {
                                                                                undertale.normalBone(10)
                                                                                undertale.rightLaser();
                                                                                undertale.laser();
                                                                                undertale.linearBone(0, 500, AttackType.Blue)
                                                                                undertale.linearBone(0, 500, AttackType.Laser)
                                                                                undertale.linearBone(0, 500, AttackType.Laser)
                                                                                undertale.linearBone(0, 500, AttackType.Laser)
                                                                                undertale.linearBone(0, 500, AttackType.Laser)
                                                                                undertale.linearBone(0, 500, AttackType.Laser)
                                                                                undertale.linearBone(0, 500, AttackType.Laser)
                                                                                undertale.linearBone(0, 500, AttackType.Laser)
                                                                                undertale.linearBone(0, 500, AttackType.Laser)
                                                                                undertale.linearBone(0, 500, AttackType.Laser)
                                                                                undertale.linearBone(0, 500, AttackType.Laser)
                                                                                undertale.linearBone(0, 500, AttackType.Laser)
                                                                                undertale.linearBone(0, 500, AttackType.Laser)
                                                                                undertale.linearBone(0, 500, AttackType.Laser)
                                                                                undertale.linearBone(0, 500, AttackType.Laser)
                                                                                undertale.linearBone(0, 500, AttackType.Laser)
                                                                                undertale.linearBone(0, 500, AttackType.Laser)
                                                                                undertale.linearBone(0, 500, AttackType.RightLaser)
                                                                                undertale.linearBone(0, 500, AttackType.RightLaser)
                                                                                undertale.linearBone(0, 500, AttackType.RightLaser)
                                                                                undertale.linearBone(0, 500, AttackType.RightLaser)
                                                                                undertale.linearBone(0, 500, AttackType.RightLaser)
                                                                                undertale.linearBone(0, 500, AttackType.RightLaser)
                                                                                timer.after(1200, function(){
                                                                                    undertale.startTurn();
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
                        })
                    })
                })
            })
        })
    }
/**
 * sans fifth attack
*/
//% blockId=sans_attack5
//% block="fifth sans attack"
//% weight=6
//% blockGap=8
//% help=undertale/no-help
//% group="Sans Attacks"
export function sans_attack5() {
    undertale.normalBone(90)
    timer.after(1000, function(){
        sans.sayText("whew, I'm tired", 1000, true)
        timer.after(1000,function(){
            sans.sayText("huh?", 1000)
            timer.after(1000,function(){
                animation.runImageAnimation(sans, assets.animation`myAnim`, 75, false)
                timer.after(350, function(){
                    sans.sayText("hahahaha!", 1000, true)
                    timer.after(1000, function(){
                        sans.sayText("thanks for tiring him, but I have to kill you now.", 5000, true)
                        timer.after(6000, function(){
                            tiles.placeOnTile(sans, tiles.getTileLocation(4, 2))
                            undertale.startTurn()
                        })
                    })
                })
            })
        })
    })
}

    /**
     * Jodims first attack
    */
    //% blockId=jodims_attack1
    //% block="first Jodim attack"
    //% weight=5
    //% blockGap=8
    //% help=undertale/no-help
    //% group="Jodims Attacks"
    export function jodims_attack1() {
        health_potion = 1
        undertale.laser()
        undertale.rightLaser()
        undertale.linearBone(0, 500, AttackType.Smash)
        undertale.linearBone(0, 750, AttackType.Smash)
        undertale.linearBone(0, 1000, AttackType.Smash)
        undertale.linearBone(0, 1250, AttackType.Smash)
        undertale.linearBone(0, 1500, AttackType.Smash)
        undertale.linearBone(0, 1750, AttackType.Smash)
        undertale.linearBone(0, 2000, AttackType.Smash)
        undertale.linearBone(0, 2250, AttackType.Normal)
        undertale.linearBone(0, 2500, AttackType.Laser)
        undertale.linearBone(0, 2750, AttackType.RightLaser)
        timer.after(3000, function () {
            let time = 500
            for (let i = 0; i < 61; i++) {
                time += 500
                if (Math.percentChance(80)) {
                    undertale.linearBone(randint(0, 12), time, AttackType.Smash)
                } else {
                    undertale.linearBone(randint(randint(6, 14), 90), time, AttackType.RightLaser)
                }
                if(Math.percentChance(25)){
                    undertale.linearBone(randint(0, 24), time, AttackType.Normal)
                }
            }
            undertale.linearBone(0, 2750, AttackType.Blue)
            timer.after(33000 + 3000, function () {
                mySprite.vy = -20
                undertale.startTurn()
            })
        })
    }

    /**
     * jodims secound attack
    */
    //% blockId=sans_attack5
    //% block="fifth sans attack"
    //% weight=4
    //% blockGap=8
    //% help=undertale/no-help
    //% group="Jodims Attacks"
    export function jodims_attack2(): void{
        undertale.laser()
        undertale.rightLaser()
    }
}