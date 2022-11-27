function mul1(v1: number, v2: number): number {
  return v1 * v2
}

const result = mul1(1, 2)
console.log(result)

function mul2(v1: number, v2: number) {
  return v1 * v2
}

const result2 = mul2(1, 2)
console.log(result2)

  function mul3(v1: any, v2: any) {
    return v1 * v2
}

const result3 = mul3(100, 'devil')
console.log(result3)