import Needle from './needle';
import moment from 'moment';

const NEXT_WEEK_THRESHOLD = 4;

export default class DOWNeedle extends Needle {

  stitch(parsedInfo) {
    const dowParserValue = parsedInfo.dowParser;
    if (dowParserValue) {
      // Initialize user value and current day value
      const currentDT = moment();
      currentDT.hours(0);
      currentDT.minutes(0);
      currentDT.seconds(0);
      currentDT.milliseconds(0);
      const currentDayOfWeek = currentDT.weekday();
      const actualUserValue = dowParserValue.value;

      let daysToAdd;
      if (currentDayOfWeek < actualUserValue) {
        // day of week user value is less than the current day value
        // example user value Saturday = 7 and current day is Friday 6
        daysToAdd = actualUserValue - currentDayOfWeek;
      } else {
        // day of week user value is more than the current day value
        // example user value Monday = 1 and current day is Saturday 7
        daysToAdd = 7 - (currentDayOfWeek - actualUserValue);
      }

      // User inputs the day same as today, then consider the next day of week
      if (!dowParserValue.hasNext && daysToAdd === 0) {
        daysToAdd += 7;
      }

      // For next day of the week item add 7 days if the day is within the threshold value
      if (dowParserValue.hasNext && daysToAdd < NEXT_WEEK_THRESHOLD) {
        daysToAdd += 7;
      }

      currentDT.add(daysToAdd, 'd');

      const secondsOfDay = super.extractTime(parsedInfo);
      if (secondsOfDay > 0) {
        currentDT.add(secondsOfDay, 's');
      }
      return currentDT;
    } else {
      return super.stitch(parsedInfo);
    }
  }

}
