import PointGenerator from './PointGenerator';

class GenerateButton {
    private generateButton: HTMLButtonElement;
    private pointGenerator: PointGenerator;
    
    constructor(generateButton: HTMLButtonElement, pointGenerator: PointGenerator) {
        this.generateButton = generateButton;
        this.generateButton.addEventListener('click', this.handleGeneratePoints.bind(this));
        this.pointGenerator = pointGenerator;
    }
    
    private handleGeneratePoints() {
        const numberOfPoints = parseInt(prompt('Enter the number of points to generate:')!);
        const points = this.pointGenerator.generatePoints(numberOfPoints);
    }
}

export default GenerateButton;