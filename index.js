function add(a, b){
  return a + b;
}
add(3,3);

function subtract(a, b){
    return a - b;
}
subtract(4,3);

function multiply(a, b){
    return a * b;
}
multiply(4,2);

function divide(a, b){
    return a / b;
}
divide(4,2);

function increment(n){
    return ++n;
}
increment(4)

function decrement(n) {
    return --n;
}
decrement(4)

function makeInt(n){
    return parseInt(n, 10);
}
makeInt('0x2328');
makeInt('sldkjflksjf');

function preserveDecimal(n){
   return parseFloat(n);
}
preserveDecimal('2.222');
preserveDecimal('sldkjflksjf');