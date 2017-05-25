import Samay from '../samay';
import moment from 'moment';

// Thu, 24 May 2018 03:01:37 GMT
Date.now = jest.fn(() => 1527130897000)

test('Parses 28 June 12:30pm', () => {
  const samay = new Samay();
  const result = samay.parse('28 June 12:30pm');
  expect(result.unix()).toBe(1530169200);
});

test('Parses tomorrow at 8', () => {
  const samay = new Samay();
  const result = samay.parse('tomorrow at 8');
  expect(result.unix()).toBe(1527215400);
});

test('Parses next friday at 8', () => {
  const samay = new Samay();
  const result = samay.parse('next friday at 8');
  expect(result.unix()).toBe(1527820200);
});

test('Parses 22 May', () => {
  const samay = new Samay();
  const result = samay.parse('22 May');
  expect(result.unix()).toBe(1526927400);
});

