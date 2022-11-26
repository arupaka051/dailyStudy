class Flaction {
  private _numerator: number;
  private _denominator: number;

  constructor(numerator: number, denominator: number){
    this._numerator = numerator;
    this._denominator = denominator;
  }

  add(other: Flaction): Flaction {
    const resultNumerator = 
      this._numerator * other._denominator +
      this._denominator * other._numerator;
    const resultDominator = this._denominator * other._denominator;

    return new Flaction(resultNumerator, resultDominator);
  }

  toString() {
    return `${this._numerator}/${this._denominator}`;
  }

  get numerator() {
    return this._numerator;
  }

  get denominator() {
    return this._denominator;
  }

  get returnName() {
    return this._denominator;
  }
}

const s1 = new Flaction(1,2);
console.log(s1.returnName);
