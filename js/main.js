function GetRandomNumber(min, max) {
  const randomNumber = min - 1 + Math.random(0.5) * (max - min + 0.5);
  return randomNumber.toFixed(6);
}

GetRandomNumber(1, 100);
