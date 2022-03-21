import {settings} from "./settings";
import {random} from "./helper";

export class Snowflake {
    private readonly radius: number;
    private readonly position: { x: number, y: number };
    private readonly ctx: CanvasRenderingContext2D;
    private readonly canvas: HTMLCanvasElement;
    private readonly speed: { x: number, y: number };
    private readonly alpha1: number;
    private readonly alpha2: number;
    private readonly mousePosition: { newX: number; oldX: number };
    private gradient: CanvasGradient;
    public isAlive: boolean;

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, mousePosition: { newX: number; oldX: number }) {
        this.mousePosition = mousePosition;
        this.canvas = canvas;
        this.ctx = ctx;
        this.alpha1 = 0.5 + Math.random() / 2
        this.alpha2 = Math.random() / 2
        this.radius = Math.trunc(random(settings.snowflake.radius.min, settings.snowflake.radius.max))
        this.position = {x: Math.trunc(random(0, this.canvas.width - this.radius)), y: -this.radius}
        this.isAlive = true;
        this.speed = {
            x: Math.trunc(random(settings.snowflake.speedX.min, settings.snowflake.speedX.max)),
            y: settings.snowflake.speedY.min + (this.radius / settings.snowflake.radius.max) * (settings.snowflake.speedY.max - settings.snowflake.speedY.min)
        }
    }

    update() {
        if (this.isAlive && this.position.y < this.canvas.height - this.radius) {

            this.position.y += this.speed.y;
            if (this.mousePosition.oldX < this.mousePosition.newX) {
                this.position.x += this.speed.x;
            } else {
                this.position.x -= this.speed.x;
            }

            this.gradient = this.ctx.createRadialGradient(this.position.x, this.position.y, 0, this.position.x, this.position.y, this.radius);
            this.gradient.addColorStop(0, `rgba(255,255,255,${this.alpha1})`);
            this.gradient.addColorStop(1, `rgba(255, 255, 255, ${this.alpha2})`);
        } else {
            this.isAlive = false;
        }
        this.draw();
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = this.gradient;
        this.ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.closePath();
    }
}