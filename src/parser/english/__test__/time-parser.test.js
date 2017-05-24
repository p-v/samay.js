import Parser from '../time-parser.js';
import ParsedInfo from '../../parsed-info';

Date.now = jest.fn(() => 1527130897000)

test('Parses 4:30pm', () => {
  const parser = new Parser();
  parser.parse('4:30 pm', ParsedInfo);
  expect(ParsedInfo.timeParser).toEqual({ value: 990, isAmPmPresent: true });
});
