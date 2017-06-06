export const RelativeType = {
  DAY: 1,
  HOUR: 2,
  MIN: 3,
  WEEK: 4,
  MONTH: 5,
};

export const TimeOfDayType = {
  MORNING: 1,
  AFTERNOON: 2,
  EVENING: 3,
  NIGHT: 4,
};

const RELATIVE_DAY = 1;
const NUMBER_RELATIVE = 2;
const TIME = 3;
const TIME_OF_DAY = 4;
const DAY_OF_WEEK = 5;
const DATE = 6;
const UNCERTAIN_DAY_OF_MONTH = 7;

export class SamayType {
  
  static get RELATIVE_DAY() {
    return RELATIVE_DAY;
  }

  static get NUMBER_RELATIVE() {
    return NUMBER_RELATIVE;
  }

  static get TIME() {
    return TIME;
  }

  static get TIME_OF_DAY() {
    return TIME_OF_DAY;
  }

  static get DAY_OF_WEEK() {
    return DAY_OF_WEEK;
  }

  static get DATE() {
    return DATE;
  }

  static get UNCERTAIN_DAY_OF_MONTH() {
    return UNCERTAIN_DAY_OF_MONTH;
  }

}
