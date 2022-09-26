function isAdult(age) {
  let result = do {
    if (age >= 18) {
      ("You're an adult");
    } else {
      ("You're a kid lol");
    }
  }

  return result;
}

const randomAge = Math.ceil(Math.random() * 100);
console.log('Age', randomAge);
console.log(isAdult(randomAge));