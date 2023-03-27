import CheckKeypoint from './checkPosition';

let checkKeypoint;

function getChecKeypoint(size = {}) {
  const { height, width } = size;
  if (!checkKeypoint) {
    checkKeypoint = new CheckKeypoint({ height, width });
    return checkKeypoint;
  }
  if (height && width) {
    if (checkKeypoint.isSameSize({ height, width })) {
      return checkKeypoint;
    }
    checkKeypoint = new CheckKeypoint({ height, width });
    return checkKeypoint;
  }
  return checkKeypoint;
}

export default getChecKeypoint;
