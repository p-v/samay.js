import Needle from '../relative-day-needle';
import moment from 'moment';
import Config from '../../config';

// Thu, 24 May 2018 03:01:37 GMT
Date.now = jest.fn(() => 1527130897000)

test('Stitch relative day info without time of day or time', () => {
  const needle = new Needle(Config.getDefault());

  const parsedInfo = {
    relativeDayParser: {
      value: 1,
      isPartial: false,
    },
  };

  const relic = needle.stitch(parsedInfo);
  expect(relic.value.unix()).toBe(1527186600);
});

test('Stitch relative day info with time', () => {
  const needle = new Needle(Config.getDefault());

  const parsedInfo = {
    relativeDayParser: {
      value: 1,
      isPartial: false,
    },
    timeParser: {
      value: 900,
    }
  };

  const relic = needle.stitch(parsedInfo);
  expect(relic.value.unix()).toBe(1527240600);
});

