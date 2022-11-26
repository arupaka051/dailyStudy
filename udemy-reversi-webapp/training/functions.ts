function mul1(v1: number, v2: number): number {
  return v1 * v2;
}

const result1 = mul1(1, 2);
console.log(result1);

function mul2(v1: number, v2: number) {
  return v1 * v2 ; 
}


//const result2_2 = mul2('hello', 'hai');

function mil3(v1: any, v2: any) {
  return v1 * v2;
}

const result3 = mil3(2, 4);
const result4 = mil3('hello', 'world');

console.log(result3);
console.log(result4);