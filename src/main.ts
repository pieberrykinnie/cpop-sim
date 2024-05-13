/**
 * Program architecture:
 * 
 * 1. Interface:
 * - DisplayCanvas.ts: Visualization of the points on a canvas.
 * - GenerateButton.ts: Button that generates a prompt for the user to input the
 *  number of points to generate.
 * - RunAlgorithmButton.ts: Button that runs the algorithm to find the closest
 * pair of points.
 *
 * 2. Logic:
 * - Point.ts: Represents a point with x and y coordinates.
 * - PointGenerator.ts: Generates a list of points with random x and y coordinates.
 * - ClosestPairAlgorithm.ts: Algorithm that finds the closest pair of points.
 * 
 * Interaction layers:
 * 1. GenerateButton -> PointGenerator -> PointDisplayer -> DisplayCanvas
 * 2. RunAlgorithmButton -> ClosestPairAlgorithm -> PointDisplayer -> DisplayCanvas
 * 
 */

// Import classes
import './style.css';

import DisplayCanvas from "./DisplayCanvas";
import GenerateButton from "./GenerateButton";
import PointGenerator from "./PointGenerator";

// Attach DOM elements
const container: HTMLDivElement = document.querySelector('#container')!;
const generateButtonDOM: HTMLButtonElement = container.querySelector('#generate-button')!;
const displayCanvasDOM: HTMLCanvasElement = container.querySelector('#canvas')!;

// Initialize classes
const displayCanvas = new DisplayCanvas(displayCanvasDOM);
const pointGenerator = new PointGenerator(displayCanvas);
const generateButton = new GenerateButton(generateButtonDOM, pointGenerator);
