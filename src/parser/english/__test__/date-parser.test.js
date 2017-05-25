import DateParser from '../date-parser.js';
import ParsedInfo from '../../parsed-info';
import moment from 'moment';

Date.now = jest.fn(() => 1527130897000)

test('Parses 12 Jan', () => {
  const dateParser = new DateParser();
  dateParser.parse('12 Jan', ParsedInfo);
  const { value, startIndex, endIndex } = ParsedInfo.dateParser;
  expect({ value: value.unix(), startIndex, endIndex })
  .toEqual({ value: 1515695400, startIndex: 0, endIndex: 6 });
});

test('Parses 22 May', () => {
  const dateParser = new DateParser();
  dateParser.parse('22 May', ParsedInfo);
  const { value, startIndex, endIndex } = ParsedInfo.dateParser;
  expect({ value: value.unix(), startIndex, endIndex })
  .toEqual({ value: 1526927400, startIndex: 0, endIndex: 6 });
});
