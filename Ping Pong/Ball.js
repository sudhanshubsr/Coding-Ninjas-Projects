const INITIAL_VELOCITY = 0.005;
const VELOCITY_INCREASE = 0.00001;
const ballContainer = document.querySelector('#game-container')
export default class Ball {
    constructor(ballElem){
        this.ballElem = ballElem
        this.reset()
    }

    get x(){
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--x"));
    }

    set x(value){
        this.ballElem.style.setProperty("--x", value);
    }

    get y(){
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--y"));
    }

    set y(value){
        this.ballElem.style.setProperty("--y", value);
    }

    rect(){
        return this.ballElem.getBoundingClientRect()
    }

    

    reset(){
        this.x = 50;
        this.y = 50;
        this.direction = {x:0}
        while(Math.abs(this.direction.x) <= 0.2 || Math.abs(this.direction.x) >= 0.9){
            const heading = randomNumber(0,2*Math.PI)
            this.direction = {x: Math.cos(heading), y:Math.sin(heading)}
        }

        this.velocity = INITIAL_VELOCITY;
            
    }

    update(delta){
    this.x += this.direction.x * this.velocity * delta;
    this.y += this.direction.y * this.velocity * delta;
    this.velocity += VELOCITY_INCREASE *delta;
    const rect = this.rect();
    const containerRect = ballContainer.getBoundingClientRect();
    if (rect.left <= containerRect.left || rect.right >= containerRect.right) {
        this.direction.x *= -1;
    }
    if(rect.top<=containerRect.top || rect.bottom >=containerRect.bottom){
        this.direction.y*=-1;
    }

    }
}

function randomNumber(min,max){
    return Math.random() * (max - min) + min;
}

