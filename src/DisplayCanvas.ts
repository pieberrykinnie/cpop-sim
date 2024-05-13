import Point from './Point';

class DisplayCanvas {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d')!;
    }

    public getCanvasSize(): [number, number] {
        return [this.canvas.width, this.canvas.height];
    }

    public displayPoints(points: Point[]): void {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        points.forEach((point: Point) => {
            this.context.beginPath();
            this.context.arc(point.getX(), point.getY(), 2, 0, 2 * Math.PI);
            this.context.fill();
        });
    }
}

export default DisplayCanvas;