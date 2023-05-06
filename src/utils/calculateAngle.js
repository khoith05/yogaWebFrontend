function getAngle({ basePoint, adjacentPoint1, adjacentPoint2 }) {
  // Calculate the lengths of the sides of the triangle
  let side1 = Math.sqrt(
    Math.pow(adjacentPoint1.x - basePoint.x, 2) +
      Math.pow(adjacentPoint1.y - basePoint.y, 2)
  );
  let side2 = Math.sqrt(
    Math.pow(adjacentPoint2.x - basePoint.x, 2) +
      Math.pow(adjacentPoint2.y - basePoint.y, 2)
  );
  let side3 = Math.sqrt(
    Math.pow(adjacentPoint2.x - adjacentPoint1.x, 2) +
      Math.pow(adjacentPoint2.y - adjacentPoint1.y, 2)
  );
  // Calculate the cosine of the angle using the Law of Cosines
  let cosAngle =
    (Math.pow(side3, 2) + Math.pow(side1, 2) - Math.pow(side2, 2)) /
    (2 * side3 * side1);
  // Convert the cosine value to an angle in degrees
  let angle = toDegrees(Math.acos(cosAngle));
  return angle;
  // Calculate vectors AB and BC
  // const AB = [
  //   basePoint.x - adjacentPoint1.x,
  //   adjacentPoint2.y - adjacentPoint1.y,
  // ];
  // const BC = [adjacentPoint2.x - basePoint.x, adjacentPoint2.y - basePoint.y];
  // // Calculate dot product of AB and BC
  // const dotProduct = AB[0] * BC[0] + AB[1] * BC[1];
  // // Calculate magnitudes of AB and BC
  // const magnitudeAB = Math.sqrt(AB[0] * AB[0] + AB[1] * AB[1]);
  // const magnitudeBC = Math.sqrt(BC[0] * BC[0] + BC[1] * BC[1]);
  // // Calculate angle between AB and BC in radians
  // const angleRad = Math.acos(dotProduct / (magnitudeAB * magnitudeBC));
  // // Convert angle to degrees
  // let angleDeg = (angleRad * 180) / Math.PI;
  // // Adjust angle to be in the range of 0 to 360 degrees
  // if (yB > yA) {
  //   angleDeg = 360 - angleDeg;
  // }
  // return angleDeg;
}

function toDegrees(angle) {
  return angle * (180 / Math.PI);
}

export default function calculateAngle({
  basePoint,
  adjacentPoint1,
  adjacentPoint2,
}) {
  const rad =
    Math.atan2(adjacentPoint1.y - basePoint.y, adjacentPoint1.x - basePoint.x) -
    Math.atan2(adjacentPoint2.y - basePoint.y, adjacentPoint2.x - basePoint.x);
  const degree = rad * (180 / Math.PI);
  return degree < 0 ? 360 + degree : degree;
}

function calculateAngle1(x1, y1, x2, y2, x3, y3) {
  const rad = Math.atan2(y1 - y2, x1 - x2) - Math.atan2(y3 - y2, x3 - x2);
  const degree = rad * (180 / Math.PI);
  return degree < 0 ? 360 + degree : degree;
}
