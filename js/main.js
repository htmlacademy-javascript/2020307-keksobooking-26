// function randomInteger(min, max) {
//   const rand = min - 0 + Math.random() * (max - min + 1);
//   return Math.round(rand);
// }

// randomInteger(1, 100);


function randomInteger(min, max) {
  let randNumber = min - 1 + Math.random(0.5) * (max - min + 0.5);
  return randNumber.toFixed(6);
}

randomInteger(1, 100);
