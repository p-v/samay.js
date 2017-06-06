import Needle from '../initial-needle';
import moment from 'moment';
import Config from '../../config';

// Thu, 24 May 2018 03:01:37 GMT
Date.now = jest.fn(() => 1527130897000)

test('Stitch initial parser info with number greater than todays date', () => {
  const needle = new Needle(Config.getDefault());

  const parsedInfo = {
    initialParser: {
      type: 'number',
      value: 28,
    },
  };
  const relic = needle.stitch(parsedInfo);
  expect(relic.result.unix()).toBe(1527445800);
});

test('Stitch initial parser info with number less than 24', () => {
  const needle = new Needle(Config.getDefault());

  const parsedInfo = {
    initialParser: {
      type: 'number',
      value: 12,
    },
  };
  const relic = needle.stitch(parsedInfo);
  expect(relic.result.unix()).toBe(1527143400);
});
