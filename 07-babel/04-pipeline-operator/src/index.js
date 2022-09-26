const adding = (y) => y + 4;
const multiplying = (y) => y * 8;
const dividing = (y) => y / 2;

const randomValue = Math.ceil(Math.random() * 1000);

let evaluate = randomValue
  |> dividing(^^)
  |> multiplying(^^)
  |> adding(^^);

console.log(evaluate);