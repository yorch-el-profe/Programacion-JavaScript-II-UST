console.log('A');

console.log('B');

setTimeout(function () {
  console.log('E (2seg)');
}, 2000);

setTimeout(function () {
  console.log('F (1seg)')
}, 1000);

console.log('C');

for (let i = 0; i <= 200000;i++) {
  console.log(i);
}

console.log('D');