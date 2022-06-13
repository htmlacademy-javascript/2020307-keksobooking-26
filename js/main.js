function randomInteger(min, max) {
  const randNumber = min - 1 + Math.random(0.5) * (max - min + 0.5);
  return randNumber.toFixed(6);
}

randomInteger(1, 100);
