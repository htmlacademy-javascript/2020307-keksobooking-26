function randomInteger(min, max) {
  const rand = min - 0 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

randomInteger(1, 100);
