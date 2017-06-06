import Samay, { SamayType } from '../samay';
import moment from 'moment';

// Thu, 24 May 2018 03:01:37 GMT
Date.now = jest.fn(() => 1527130897000)

test('Parses 28 June 12:30pm', () => {
  const samay = new Samay();
  const { value, samayType, hasTime } = samay.parseText('28 June 12:30pm');
  expect(value.getTime() / 1000).toBe(1530169200);
  expect(samayType).toBe(SamayType.DATE);
  expect(hasTime).toBe(true);
});

test('Parses tomorrow at 8', () => {
  const samay = new Samay();
  const { value, samayType, hasTime } = samay.parseText('tomorrow at 8');
  expect(value.getTime() / 1000).toBe(1527215400);
  expect(samayType).toBe(SamayType.RELATIVE_DAY);
  expect(hasTime).toBe(true);
});

test('Parses next friday at 8', () => {
  const samay = new Samay();
  const { value, samayType, hasTime } = samay.parseText('next friday at 8');
  expect(value.getTime() / 1000).toBe(1527820200);
  expect(samayType).toBe(SamayType.DAY_OF_WEEK);
  expect(hasTime).toBe(true);
});

test('Parses 22 May', () => {
  const samay = new Samay();
  const { value, samayType, hasTime } = samay.parseText('22 May');
  expect(value.getTime() / 1000).toBe(1558463400);
  expect(samayType).toBe(SamayType.DATE);
  expect(hasTime).toBe(false);
});

