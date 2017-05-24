import Parser from '../tod-parser.js';
import ParsedInfo from '../../parsed-info';
import { TimeOfDayType } from '../../../constants';

Date.now = jest.fn(() => 1527130897000)

test('Parses morning', () => {
  const parser = new Parser();
  parser.parse('morning', ParsedInfo);
  expect(ParsedInfo.todParser).toEqual({ value: TimeOfDayType.MORNING });
});
