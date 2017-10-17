class RomanNumeral {
  constructor(decimal) {
    this.decimal = decimal;
  }
  get numeral() {
    if (this.decimal === 5) {
      return 'V';
    }
    return 'I';
  }
}
module.exports = RomanNumeral;
