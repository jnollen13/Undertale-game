enum AttackType {
    //% block="normal"
    Normal,
    //% block="blue"
    Blue,
    //% block="laser"
    Laser,
    //% block="right laser"
    RightLaser,
    //% block="smash"
    Smash
}
/**
 * blocks with undertale functions.
 */
//% weight=75 color=#D7D98C icon="☠"
//% groups='["Turns", "Attacks", "Utill", "Sans Attacks", "Jodims Attacks"]'
//% blockGap=8
namespace undertale {
    /**
     * Summons a BlueBone. Blue bones do no damage if the charachter is not moving when 
     * it hits Them.
     * 
     * @param height how tall the bone will be, eg: 50
     * @param skinny whether or not the bone will be skinny
    */
    //% blockId=blueBone
    //% block="Create Blue Bone $height tall, skinny $skinny"
    //% weight=75
    //% blockGap=8
    //% help=undertale/no-help
    //% group="Attacks"
    export function blueBone(height:number, skinny:boolean) {
        let blueBone = sprites.create(assets.image`blueBone`, SpriteKind.BlueBone)
        if(skinny==true){
            blueBone.setImage(assets.image`skinnyBlueBone`)
        }
        scaling.scaleByPixels(blueBone, height, ScaleDirection.Vertically, ScaleAnchor.Bottom, false)
        blueBone.setPosition(142, 90-(height/5))
        blueBone.setVelocity(-50, 0)
        blueBone.setFlag(SpriteFlag.DestroyOnWall, true)
        blueBone.lifespan=5000
    }

    /**
     * Summons a Normal Bone.
     *
     * @param height how tall the bone will be, eg: 50
    */
    //% blockId=normalBone
    //% block="Create normal Bone $height tall"
    //% weight=100
    //% blockGap=8
    //% help=undertale/no-help
    //% group="Attacks"
    export function normalBone(height:number) {
        let bone6 = sprites.create(assets.image`myImage4`, SpriteKind.Enemy)
        scaling.scaleByPixels(bone6, height, ScaleDirection.Vertically, ScaleAnchor.Bottom, false)
        bone6.setPosition(142, 90-height/5)
        bone6.setVelocity(-50, 0)
        bone6.setFlag(SpriteFlag.DestroyOnWall, true)
        bone6.lifespan=5000
    }

    /**
     * summons the set attack after waiting the time set. It also alows you to set the height
     * of the bones.
     *
     * @param height how tall the bone will be, eg: 50
    */
    //% blockId=creatLinearBone
    //% block="Create $attackType Bone after $waitTime $height tall"
    //% weight=100
    //% blockGap=8
    //% waitTime.shadow=timePicker
    //% help=undertale/no-help
    //% group="Utill"
    export function linearBone(height: number, waitTime:number, attackType:AttackType) {
        timer.after(waitTime, function(){
        if(attackType==AttackType.Normal){
            undertale.normalBone(height)
        }else if(attackType==AttackType.Blue){
            undertale.blueBone(height, false)
        }else if(attackType==AttackType.Laser){
            undertale.laser();
        }else if(attackType==AttackType.RightLaser){
            undertale.rightLaser();
        }else{
            undertale.smash();
        }
        })
    }

    /**
     * summons a laser, that is placed randomly on a green square tile.
     * 
    */
    //% blockId=laser
    //% block="Create Laser"
    //% weight=90
    //% blockGap=8
    //% help=undertale/no-help
    //% group="Attacks"
    export function laser(): void {
        let mySprite2 = sprites.create(assets.image`laser-shooter`, SpriteKind.sans)
        tiles.placeOnRandomTile(mySprite2, assets.tile`myTile10`)
        mySprite2.z+=1
        timer.after(1000, function () {
            let laser = sprites.create(assets.image`white`, SpriteKind.Enemy)
            laser.setPosition(mySprite2.x, mySprite2.y)
            scaling.scaleByPixels(laser, 200, ScaleDirection.Vertically, ScaleAnchor.Top)
            scaling.scaleByPixels(laser, -3, ScaleDirection.Horizontally, ScaleAnchor.Middle)
            for (let i = 0; i < 4; i++) {
                timer.after(50, function() {
                    scaling.scaleByPixels(laser, 1, ScaleDirection.Horizontally, ScaleAnchor.Middle)
                })
            }
            timer.after(300, function(){
                sprites.destroy(mySprite2)
                scaling.scaleByPixels(laser, -2, ScaleDirection.Horizontally, ScaleAnchor.Middle)
                timer.after(100, function(){
                sprites.destroy(laser)
                })
            })
            laser.lifespan = 5000
            mySprite2.lifespan = 5000
        })
    }

    /**
     * summons a laser, that is placed randomly on a right shooter tile and
     * fires at the box
    */
    //% blockId=rightLaser
    //% block="Create rightLaser"
    //% weight=89
    //% blockGap=8
    //% help=undertale/no-help
    //% group="Attacks"
    export function rightLaser(): void {
        let mySprite2 = sprites.create(assets.image`laser-shooterR`, SpriteKind.sans)
        tiles.placeOnRandomTile(mySprite2, assets.tile`sideShooterRight`)
        mySprite2.z += 1
        mySprite2.lifespan=5000
        timer.after(1000, function () {
            let laser = sprites.create(assets.image`white`, SpriteKind.Enemy)
            laser.lifespan=5000
            laser.setPosition(mySprite2.x, mySprite2.y)
            scaling.scaleByPixels(laser, 200, ScaleDirection.Horizontally, ScaleAnchor.Right)
            scaling.scaleByPixels(laser, -3, ScaleDirection.Vertically, ScaleAnchor.Middle)
            for (let i = 0; i < 4; i++) {
                timer.after(50, function () {
                    scaling.scaleByPixels(laser, 1, ScaleDirection.Vertically, ScaleAnchor.Middle)
                })
            }
            timer.after(300, function () {
                sprites.destroy(mySprite2)
                scaling.scaleByPixels(laser, -2, ScaleDirection.Vertically, ScaleAnchor.Middle)
                timer.after(100, function () {
                    sprites.destroy(laser)
                })
            })
        })
    }

    /**
     * summons the smash attack.
    */
    //% blockId=creatLinearBone
    //% block="smash"
    //% weight=88
    //% blockGap=8
    //% waitTime.shadow=timePicker
    //% help=undertale/no-help
    //% group="Attacks"
    export function smash() {
        let imgs=assets.image`ball`
        smashr= sprites.create(imgs, SpriteKind.Enemy)
        smashr.setFlag(SpriteFlag.AutoDestroy, true);
        smashr.setFlag(SpriteFlag.GhostThroughWalls, true);
        tiles.placeOnRandomTile(smashr, assets.tile`myTile10`)
        smashr.ay=100;
        smashr.lifespan=10000
    }

    /**
     * summons a platform that apears in the middle of the screen.
     * will last for the number set, and can be set to bounce on walls or not
    */
    //% blockId=platform
    //% block="Create platform, should move: $shouldMove|| $lifespan || should bounce: $shouldBounce|| $height|| $speed"
    //% weight=85
    //% blockGap=8
    //% help=undertale/no-help
    //% group="Attacks"
    export function platform(shouldMove:boolean,lifespan:number,shouldBounce?:boolean, height?:number, speed?:number): void {
        platforms = sprites.create(assets.image`whiteline`, SpriteKind.Platform)
        if(shouldBounce){
            platforms.setFlag(SpriteFlag.BounceOnWall, true)
        }else{
            platforms.setFlag(SpriteFlag.DestroyOnWall, true)
        }
        if(shouldMove){
            if(speed){
                platforms.vx=speed
            }else{
            platforms.vx=40
            }
        }
        if(height){
            platforms.y+=height
        }else{
            platforms.y+=15
        }
        
        platforms.lifespan=lifespan
        platforms.setFlag(SpriteFlag.GhostThroughSprites, false)
    }
    export let platforms: Sprite = null
}
let smashr:Sprite=null
game.onUpdate(function() {
    if(damage==0||damage==-1||damage==-2||damage==-3||damage==-4||damage==-5){
        game.gameOver(false)
    }
})