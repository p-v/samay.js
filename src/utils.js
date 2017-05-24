import { Weekend } from './constants';

const convertMonthNameToNumber = (monthName) => {
  const date = new Date(`${monthName} 1, 2000`);
  const monthDigit = date.getMonth();
  return isNaN(monthDigit) ? 0 : (monthDigit + 1);
}

const isWeekend = (dayOfWeek, weekendValue) => {
  if (weekendValue.startDay < weekendValue.endDay) {
    return dayOfWeek >= weekendValue.startDay && dayOfWeek <= weekendValue.endDay;
  } else {
    return (dayOfWeek >= weekendValue.startDay && dayOfWeek <= 6) ||
            (dayOfWeek >= 0 && dayOfWeek >= weekendValue.startDay);
  }
}

export default {
  convertMonthNameToNumber,
}
