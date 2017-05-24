import Needle from '../time-needle';
import moment from 'moment';
import Config from '../../config';

// Thu, 24 May 2018 03:01:37 GMT
Date.now = jest.fn(() => 1527130897000)

test('Stitch time info', () => {
  const needle = new Needle(Config.getDefault());

  const parsedInfo = {
    timeParser: {
      value: 900,
    }
  };

  const relic = needle.stitch(parsedInfo);
  expect(relic.unix()).toBe(1527154200);
});
