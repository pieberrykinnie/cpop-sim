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
        const numberOfPoints: number = this.handleUserInput();
        this.pointGenerator.generatePoints(numberOfPoints);
    }

    private handleUserInput(): number {
        const userInput = prompt('Enter the number of points to generate:');
        let numberOfPoints: number;

        if (userInput === null) {
            numberOfPoints = 0;
        } else if (isNaN(parseInt(userInput))) {
            numberOfPoints = 0;
        } else {
            numberOfPoints = parseInt(userInput);
        }

        return numberOfPoints;
    }
}

export default GenerateButton;