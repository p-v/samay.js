import Parser from '../number-relative-parser.js';
import { RelativeType } from '../../../constants';
import ParsedInfo from '../../parsed-info';

Date.now = jest.fn(() => 1527130897000)

test('2h', () => {
  const parser = new Parser();
  parser.parse('2h', ParsedInfo);
  expect(ParsedInfo.numberRelativeParser).toEqual({ value: 2, type: RelativeType.HOUR, startIndex: 0, endIndex: 2 });
});

