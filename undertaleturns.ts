namespace undertale{
    /**
     * starts your turn
    */
    //% blockId=startTurn
    //% block="startTurn"
    //% weight=90
    //% blockGap=8
    //% help=undertale/no-help
    //% group="Turns"
    export function startTurn() {
        mySprite.ay=0
        controller.moveSprite(mySprite, 0, 0)
        guimode=0
        inbattle=0
        selectmode=1
        attacknumber += 1
    }

    /**
     * Starts sans turn
    */
    //% blockId=sansTurn
    //% block="start san's turn"
    //% weight=100
    //% blockGap=8
    //% help=undertale/no-help
    //% group="Turns"
    export function sansturn() {
        mySprite.ay = 500
        inbattle = 1
        controller.moveSprite(mySprite, 100, 0)
        const attacks = [
            sans_attack1,
            undertale.sans_attack2,
            undertale.sans_attack3,
            undertale.sans_attack4,
            undertale.sans_attack5,
            undertale.jodims_attack1,
            undertale.jodims_attack2,
            undertale.jodims_attack3
        ];
        attacks[attacknumber - 1]();
    }
}