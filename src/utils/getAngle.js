export default function getAngle({
  basePoint,
  adjacentPoint1,
  adjacentPoint2,
}) {
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
}

function toDegrees(angle) {
  return angle * (180 / Math.PI);
}
