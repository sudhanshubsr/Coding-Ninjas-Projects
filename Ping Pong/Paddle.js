const SPEED = 0.02;
const MAX_POSITION = 100;
const MIN_POSITION = 0;
export default class Paddle {
    constructor(paddleElem){
        this.paddleElem = paddleElem
    }
    get position(){
        return parseFloat(getComputedStyle(this.paddleElem).getPropertyValue("--position"));
    }

    set position(value){
        this.paddleElem.style.setProperty("--position", value);
    }

    update(delta, ballHeight){
        this.position = SPEED * delta * (ballHeight - this.position)


        // if (this.position < MIN_POSITION){
        //                 this.position = MIN_POSITION;
        //             }else if (this.position > MAX_POSITION){
        //                 this.position = MAX_POSITION;
        //             }
    }
}

