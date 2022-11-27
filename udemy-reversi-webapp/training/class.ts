class Flaction {
  
  constructor(private _numerator: number, private _denominator: number) {
  }
  
  toString(): string {
    return `${this._numerator}/${this._denominator}`
  }

  add(other: Flaction): Flaction {
    const resultNumerator = 
      this._numerator * other._denominator +
      this._denominator * other._numerator
    const resultDdenominator = this._denominator * other._denominator

    return new Flaction(resultNumerator, resultDdenominator)

  } 
  get numerator() {
    return this._numerator
    }
  get denominator() {
    return this._denominator
    }
}
const f1 = new Flaction(1, 2)
console.log(f1.numerator)
console.log(f1.denominator)

const f2 = new Flaction(1, 3)
console.log(f2.toString())

const result = f1.add(f2)
console.log(result.toString())