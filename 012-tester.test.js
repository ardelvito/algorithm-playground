// Import or require your isValidIP function
const isValidIP = require('./012-Valid IP.js');

describe('isValidIP function', () => {
    test('returns true for valid IP address', () => {
        expect(isValidIP('192.168.0.1')).toBe(true);
        expect(isValidIP('10.0.0.1')).toBe(true);
    });

    test('returns false for invalid IP address', () => {
        expect(isValidIP('256.168.0.1')).toBe(false); 
        expect(isValidIP('192.168.0.')).toBe(false); 
        expect(isValidIP('12.34.56')).toBe(false); 
        expect(isValidIP('01.02.03.04')).toBe(false); 
        expect(isValidIP('1.2.3.4.5')).toBe(false); 
        expect(isValidIP('123,45,67,89')).toBe(false); 
        expect(isValidIP(' 1.2.3.4')).toBe(false);
        expect(isValidIP('1.2.3.4 ')).toBe(false);
        expect(isValidIP('12.34.56.-7')).toBe(false);
        expect(isValidIP('1.2.3.4\n')).toBe(false);
        expect(isValidIP('\n1.2.3.4')).toBe(false);
    });

    test('returns false for non-integer values', () => {
        expect(isValidIP('192.168.0.a')).toBe(false); 
        expect(isValidIP('192.168.0.a')).toBe(false); 
    });

    test('return false for empty parameter', () => {
        expect(isValidIP('')).toBe(false);
    })

  // Add more test cases to cover edge cases, boundary conditions, etc.
});
