import InitialParser from '../initial-parser.js';
import ParsedInfo from '../../parsed-info';

Date.now = jest.fn(() => 1527130897000)

test('Parses to', () => {
  const parser = new InitialParser();
  parser.parse('to', ParsedInfo);
  expect(ParsedInfo.initialParser).toEqual({ value: 0, type: 'other' });
});

test('Parses 12', () => {
  const parser = new InitialParser();
  parser.parse('12', ParsedInfo);
  expect(ParsedInfo.initialParser).toEqual({ value: 12, type: 'number' });
});

