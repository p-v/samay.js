import Needle from '../dow-needle';
import moment from 'moment';
import Config from '../../config';
import { TimeOfDayType } from '../../constants';

// Thu, 24 May 2018 03:01:37 GMT
Date.now = jest.fn(() => 1527130897000)

test('Stitch dow info without time of day or time', () => {
  const needle = new Needle(Config.getDefault());

  const parsedInfo = {
    dowParser: {
      value: 0, // Sunday
      hasNext: false,
    },
  };
  const relic = needle.stitch(parsedInfo);
  expect(relic.value.unix()).toBe(1527359400);
});

test('Stitch dow info without time of day or time and using next', () => {
  const needle = new Needle(Config.getDefault());

  const parsedInfo = {
    dowParser: {
      value: 0, // Sunday
      hasNext: true,
    },
  };
  const relic = needle.stitch(parsedInfo);
  expect(relic.value.unix()).toBe(1527964200);
});

test('Stitch dow info without time of day but with time and using next', () => {
  const needle = new Needle(Config.getDefault());

  const parsedInfo = {
    dowParser: {
      value: 0, // Sunday
      hasNext: true,
    },
    timeParser: {
      value: 900,
    },
  };
  const relic = needle.stitch(parsedInfo);
  expect(relic.value.unix()).toBe(1528018200);
});

