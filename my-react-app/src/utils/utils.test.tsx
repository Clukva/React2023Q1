import { test, expect } from 'vitest';
import validateTextInput from './utils';

describe('validateTextInput function', () => {
  test('valid input', () => {
    const validInput = 'Arnold';
    expect(validateTextInput(validInput)).toBe(true);
  });

  test('invalid numbers', () => {
    const invalidInput = 'JohnDoe123';
    expect(validateTextInput(invalidInput)).toBe(false);
  });

  test('invalid start character', () => {
    const invalidInput = 'johnDoe';
    expect(validateTextInput(invalidInput)).toBe(false);
  });

  test('empty input', () => {
    const emptyInput = '';
    expect(validateTextInput(emptyInput)).toBe(false);
  });
});
