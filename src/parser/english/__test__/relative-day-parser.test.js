import Parser from '../relative-day-parser.js';
import ParsedInfo from '../../parsed-info';

Date.now = jest.fn(() => 1527130897000)

test('Parses tomorr', () => {
  const parser = new Parser();
  parser.parse('tomorr', ParsedInfo);
  expect(ParsedInfo.relativeDayParser).toEqual({ value: 1, isPartial: true });
});

test('Parses today', () => {
  const parser = new Parser();
  parser.parse('today', ParsedInfo);
  expect(ParsedInfo.relativeDayParser).toEqual({ value: 0, isPartial: false });
});

