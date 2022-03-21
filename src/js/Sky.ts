import {settings} from "./settings";

export class Sky {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private gradient: CanvasGradient;

    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.update();
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = this.gradient;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.closePath();
    }

    // The goal is to have a function that updates the gradient without redrawing. This method is called by the event listener
    updateSize() {
        this.gradient = this.ctx.createLinearGradient(this.canvas.width / 2, 0, this.canvas.width / 2, this.canvas.height);
        const length = settings.sky.gradient.length;
        for (let i = 0; i < length; i++) {
            this.gradient.addColorStop(i * (1 / (length - 1)), settings.sky.gradient[i]);
        }
    }

    update() {
        this.updateSize();
        this.draw();
    }
}