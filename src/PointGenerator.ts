import Point from "./Point";
import DisplayCanvas from "./DisplayCanvas";

class PointGenerator {
    private points: Point[];
    private DisplayCanvas: DisplayCanvas;

    constructor(DisplayCanvas: DisplayCanvas) {
        this.points = [];
        this.DisplayCanvas = DisplayCanvas;
    }

    public generatePoints(numberOfPoints: number): void {
        this.points = [];
        
        const canvasSize = this.DisplayCanvas.getCanvasSize();
        const canvasMaxWidth = canvasSize[0];
        const canvasMaxHeight = canvasSize[1];

        for (let i = 0; i < numberOfPoints; i++) {
            const x = Math.random() * canvasMaxWidth;
            const y = Math.random() * canvasMaxHeight;
            this.points.push(new Point(x, y));
        }

        this.DisplayCanvas.displayPoints(this.points);
    }
}

export default PointGenerator;