import Needle from '../date-needle';
import moment from 'moment';
import Config from '../../config';
import { TimeOfDayType } from '../../constants';

Date.now = jest.fn(() => 1527130897000)

test('Stitch date info without time of day or time', () => {
  const needle = new Needle(Config.getDefault());
  const mockDateParserValue = moment();
  mockDateParserValue.seconds(0);
  mockDateParserValue.milliseconds(0);
  mockDateParserValue.hour(0);
  mockDateParserValue.minutes(0);
  mockDateParserValue.add(1, 'day');

  const parsedInfo = {
    dateParser: {
      value: mockDateParserValue,
    },
  };
  const relic = needle.stitch(parsedInfo);
  expect(relic.result.unix()).toBe(1527186600);
});

test('Stitch date info with time of day but without time', () => {
  const needle = new Needle(Config.getDefault());
  const mockDateParserValue = moment();
  mockDateParserValue.seconds(0);
  mockDateParserValue.milliseconds(0);
  mockDateParserValue.hour(0);
  mockDateParserValue.minutes(0);
  mockDateParserValue.add(1, 'day');

  const parsedInfo = {
    dateParser: {
      value: mockDateParserValue,
    },
    todParser: {
      value: TimeOfDayType.AFTERNOON,
    },
  };
  const relic = needle.stitch(parsedInfo);
  expect(relic.result.unix()).toBe(1527237000);
});

test('Stitch date info without time of day but with time', () => {
  const needle = new Needle(Config.getDefault());
  const mockDateParserValue = moment();
  mockDateParserValue.seconds(0);
  mockDateParserValue.milliseconds(0);
  mockDateParserValue.hour(0);
  mockDateParserValue.minutes(0);
  mockDateParserValue.add(1, 'day');

  const parsedInfo = {
    dateParser: {
      value: mockDateParserValue,
    },
    timeParser: {
      value: 900,
    },
  };
  const relic = needle.stitch(parsedInfo);
  expect(relic.result.unix()).toBe(1527240600);
});
