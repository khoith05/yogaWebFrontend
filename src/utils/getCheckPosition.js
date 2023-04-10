import CheckPosition from './checkPosition';

let checkPosition;

function getCheckPosition(size = {}) {
  const { height, width } = size;
  if (!checkPosition) {
    checkPosition = new CheckPosition({ height, width });
    return checkPosition;
  }
  if (height && width) {
    if (checkPosition.isSameSize({ height, width })) {
      return checkPosition;
    }
    checkPosition = new CheckPosition({ height, width });
    return checkPosition;
  }
  return checkPosition;
}

export default getCheckPosition;
