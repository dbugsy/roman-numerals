const RomanNumeral = require('../src/RomanNumeral');

describe('RomanNumeral converts numbers to numerals', () => {
  it('converts 1 to I', () => {
    const romanNumeral = new RomanNumeral(1);
    expect(romanNumeral.numeral).toEqual('I');
  });
});
