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
  constructor(decimal) {
    this.decimal = decimal;
  }
  get numeral() {
    return RomanNumeral.conversions[this.decimal];
  }

  static get conversions() {
    return conversions;
  }
}

module.exports = RomanNumeral;
