import DOWParser from '../dow-parser.js';
import ParsedInfo from '../../parsed-info';

Date.now = jest.fn(() => 1527130897000)

test('Parses Next Saturday', () => {
  const dowParser = new DOWParser();
  dowParser.parse('Next Saturday', ParsedInfo);
  expect(ParsedInfo.dowParser).toEqual({ value: 6, startIndex: 0, endIndex: 13, hasNext: true });
});

