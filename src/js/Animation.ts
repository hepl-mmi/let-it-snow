import {Snowflake} from "./Snowflake";
import {Sky} from "./Sky";
import {settings} from "./settings";

export class Animation {
    private readonly snowflakes: Snowflake[];
    private readonly ctx: CanvasRenderingContext2D;
    private readonly canvas: HTMLCanvasElement;
    private readonly sky: Sky;
    private readonly mousePosition: { newX: number; oldX: number };

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, snowflakes: Snowflake[], sky: Sky, mousePosition: { newX: number; oldX: number }) {
        this.mousePosition = mousePosition;
        this.snowflakes = snowflakes;
        this.ctx = ctx;
        this.canvas = canvas;
        this.sky = sky;
    }

    start() {
        this.sky.update()
        if (Math.random() < 0.5) {
            this.snowflakes.push(new Snowflake(this.ctx, this.canvas, this.mousePosition));
        } else {
            if (this.snowflakes.length > 0 && !this.snowflakes[0].isAlive) {
                this.snowflakes.shift();
            }
        }
        this.snowflakes.forEach((snowflake) => {
            snowflake.update();
        });

        requestAnimationFrame(() => {
            this.start();
        });
    }
}