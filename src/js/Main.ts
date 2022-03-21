import {Sky} from "./Sky";
import {Animation} from "./Animation";
import {Snowflake} from "./Snowflake";


class Main {
    private ctx: CanvasRenderingContext2D;
    private canvas: HTMLCanvasElement;
    private sky: Sky;
    private animation: Animation;
    private snowflakes: Snowflake[];
    private mousePosition: { newX: number; oldX: number };

    constructor() {
        this.snowflakes = [];
        this.canvas = document.getElementById('my-canvas') as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d');
        this.resizeCanvas();
        this.mousePosition = {newX: this.canvas.width / 2, oldX: this.canvas.width / 2}
        this.sky = new Sky(this.canvas, this.ctx);
        this.animation = new Animation(this.ctx, this.canvas, this.snowflakes, this.sky, this.mousePosition);
        this.addEventListeners();
        this.animation.start();
    }

    addEventListeners() {
        window.addEventListener('resize', () => {
            this.resizeCanvas();
            this.snowflakes.forEach((snowflake) => {
                snowflake.isAlive = true;
            });
            this.sky.updateSize();
        });
        this.canvas.addEventListener('mousemove', (event: MouseEvent) => {
            if (this.mousePosition.newX != event.pageX) {
            this.mousePosition.oldX = this.mousePosition.newX;
            this.mousePosition.newX = event.pageX;
            }
        });
    }


    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
}

new Main();