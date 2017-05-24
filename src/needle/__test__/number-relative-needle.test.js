import Needle from '../number-relative-needle';
import moment from 'moment';
import Config from '../../config';
import { RelativeType } from '../../constants';

// Thu, 24 May 2018 03:01:37 GMT
Date.now = jest.fn(() => 1527130897000)

test('Stitch dow info without time of day or time', () => {
  const needle = new Needle(Config.getDefault());

  const parsedInfo = {
    numberRelativeParser: {
      value: 2,
      type: RelativeType.DAY,
    },
  };

  const relic = needle.stitch(parsedInfo);
  expect(relic.unix()).toBe(1527303697);
});

test('Stitch dow info with time', () => {
  const needle = new Needle(Config.getDefault());

  const parsedInfo = {
    numberRelativeParser: {
      value: 2,
      type: RelativeType.DAY,
    },
    timeParser: {
      value: 840,
    }
  };

  const relic = needle.stitch(parsedInfo);
  expect(relic.unix()).toBe(1527323400);
});
