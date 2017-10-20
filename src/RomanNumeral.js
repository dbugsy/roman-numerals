const conversions = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M',
};

class RomanNumeral {
  static get conversions() {
    return conversions;
  }

  constructor(decimal) {
    this.decimal = decimal;
    this.output = '';
  }

  get numeral() {
    if (this.decimal < 5) {
      if (this.decimal === 4) {
        return 'IV';
      } else if (this.decimal < 4) {
        this._appendOnes(this.decimal);
        return this.output;
      }
    }
    return RomanNumeral.conversions[this.decimal];
  }

  _appendOnes(decimal) {
    for (let i = 0; i < decimal; i += 1) {
      this.output += conversions[1];
    }
  }

  _orderOfMagnitude(decimal) {

  }
}

module.exports = RomanNumeral;
