function distanceFromHqInBlocks(location) {
  if (location >= 43) {
    return location - 43 + 1;
  } else if (location < 43) {
    return (location - 43 + 1) * -1;
  }
}

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(start, destination) {
  const distance = destination - start;
  if (distance >= 1) {
    return (destination - start) * 264;
  } else {
    return (destination - start) * 264 * -1;
  }
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
