import Needle from '../date-needle';
import moment from 'moment';
import Config from '../../config';

Date.now = jest.fn(() => 1527130897000)

test('Stitch date info', () => {
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
  expect(relic.unix()).toBe(1527186600);
});
