const RomanNumeral = require('../src/RomanNumeral');

describe('RomanNumeral converts numbers to numerals', () => {
  describe('Conversions involving a single numeral', () => {
    it('converts 1 to I', () => {
      const romanNumeral = new RomanNumeral(1);
      expect(romanNumeral.numeral).toEqual('I');
    });

    it('converts 5 to V', () => {
      const romanNumeral = new RomanNumeral(5);
      expect(romanNumeral.numeral).toEqual('V');
    });

    it('converts 10 to X', () => {
      const romanNumeral = new RomanNumeral(10);
      expect(romanNumeral.numeral).toEqual('X');
    });

    it('converts 50 to L', () => {
      const romanNumeral = new RomanNumeral(50);
      expect(romanNumeral.numeral).toEqual('L');
    });

    it('converts 100 to C', () => {
      const romanNumeral = new RomanNumeral(100);
      expect(romanNumeral.numeral).toEqual('C');
    });

    it('converts 500 to D', () => {
      const romanNumeral = new RomanNumeral(500);
      expect(romanNumeral.numeral).toEqual('D');
    });

    it('converts 1000 to M', () => {
      const romanNumeral = new RomanNumeral(1000);
      expect(romanNumeral.numeral).toEqual('M');
    });
  });
});
