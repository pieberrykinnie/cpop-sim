import Point from "./Point";

function bruteForceAlgorithm(points: Point[]): number {
  if (points.length < 2) {
    console.log("Not enough points to find the closest pair.");
    return -1;
  }

  let minDistance: number = points[0].getDist(points[1]);

  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const distance = points[i].getDist(points[j]);
      if (distance < minDistance) {
        minDistance = distance;
      }
    }
  }

  return minDistance;
}

function divideAndConquerAlgorithm(points: Point[]): number {
  if (points.length < 2) {
    console.log("Not enough points to find the closest pair.");
    return -1;
  }

  // Pre-sort the array by either coordinates
  const sortedX: Point[] = points.slice().sort((a, b) => a.getX() - b.getX());
  const sortedY: Point[] = points.slice().sort((a, b) => a.getY() - b.getY());

  return divideAndConquerAlgorithmH(sortedX, sortedY);
}

function divideAndConquerAlgorithmH(sortedX: Point[], sortedY: Point[]): number {
  // Base case(s): n = 2 and n = 3
  if (sortedX.length <= 3) {
    return bruteForceAlgorithm(sortedX);
  }

  // Divide
  const mid: number = Math.ceil(sortedX.length / 2);

  const sortedXLeft: Point[] = sortedX.slice(0, mid);
  const sortedYLeft: Point[] = sortedY.filter((point) =>
    sortedXLeft.includes(point)
  );
  const sortedXRight: Point[] = sortedX.slice(mid);
  const sortedYRight: Point[] = sortedY.filter((point) =>
    sortedXRight.includes(point)
  );

  // Conquer
  const deltaLeft: number = divideAndConquerAlgorithmH(
    sortedXLeft,
    sortedYLeft
  );
  const deltaRight: number = divideAndConquerAlgorithmH(
    sortedXRight,
    sortedYRight
  );
  const delta: number = Math.min(deltaLeft, deltaRight);

  // Combine
  // Get only the points sorted by y in the 2d stripe centering sortedX[mid]
  const pointsInRectangle: Point[] = sortedY.filter((point) => {
    return Math.abs(point.getX() - sortedX[mid].getX()) < delta;
  });

  let minDistance: number = delta;

  // For each point in the stripe, compare them only with the next 7 points
  for (let i = 0; i < pointsInRectangle.length; i++) {
    for (let j = i + 1; j < Math.min(pointsInRectangle.length, i + 7); j++) {
      const distance = pointsInRectangle[i].getDist(pointsInRectangle[j]);
      if (distance < minDistance) {
        minDistance = distance;
      }
    }
  }

  return minDistance;
}

export { bruteForceAlgorithm, divideAndConquerAlgorithm };
