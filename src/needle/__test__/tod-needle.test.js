import Needle from '../tod-needle';
import moment from 'moment';
import Config from '../../config';
import { TimeOfDayType } from '../../constants';

// Thu, 24 May 2018 03:01:37 GMT
Date.now = jest.fn(() => 1527130897000)

test('Stitch time of day info without time', () => {
  const needle = new Needle(Config.getDefault());

  const parsedInfo = {
    todParser: {
      value: TimeOfDayType.EVENING,
    },
  };

  const relic = needle.stitch(parsedInfo);
  expect(relic.value.unix()).toBe(1527161400);
});

test('Stitch time of day info with time', () => {
  const needle = new Needle(Config.getDefault());

  const parsedInfo = {
    todParser: {
      value: TimeOfDayType.AFTERNOON,
    },
    timeParser: {
      value: 960,
    },
  };

  const relic = needle.stitch(parsedInfo);
  expect(relic.value.unix()).toBe(1527157800);
});
