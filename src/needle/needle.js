import moment from 'moment';
import { TimeOfDayType } from '../constants';
import Utils from '../utils';

const EVENING_TIME = 5;
const AFTERNOON_TIME = 14 * 60;
const MORNING_TIME_WEEKDAY = 9 * 60;
const MORNING_TIME_WEEKEND = 10 * 60;

export default class Needle {

  constructor(config) {
    this.config = config;
  }

  setNextNeedle(needle) {
    this.nextNeedle = needle;
    return needle;
  }

  /**
   * Get time Value for the time passed
   *
   * @param hour Hour
   * @param mins Minutes
   * @param amPm am/pm String
   *
   * @return value which has display value and the real value
   */
  makeFiner(hour, mins, amPm, value) {
    if (!value) {
      value = moment();
    }
    if (hour > 12) {
      value.hour(amPm ? hour : (hour % 12) + 12);
      value.minute(mins);
      value.second(0);
      value.milliseconds(0);
    } else if (hour < 12) {
      value.hour('pm' === amPm ? hour + 12 : hour % 12);
      value.minute(mins);
      value.second(0);
      value.milliseconds(0);
    } else {
      // 12 am/pm case
      value.hour(amPm ? hour : hour % 12);
      value.minute(mins);
      value.seconds(0);
      value.milliseconds(0);
    }
    return value;
  }

  /**
   * Get time Value for the time/tod item passed
   *
   * Time of day item should never be null
   *
   * @param todParserValue
   * @param timeParserValue
   *
   * @return return the Value having display and real value
   */
  getTimeValue(todParserValue, timeParserValue) {
    let value;
    switch (todParserValue.value) {
      // Morning
      case TimeOfDayType.MORNING: {
        if (!timeParserValue) {
          const currentTime = moment();
          if (Utils.isWeekend(currentTime.weekday(), this.config.weekend())) {
            const morningTime = MORNING_TIME_WEEKEND;
            const hour = morningTime / 60;
            const mins = morningTime % 60;
            value = this.makeFiner(hour, mins, null, null);
          } else {
            const morningTime = MORNING_TIME_WEEKDAY;
            const hour = morningTime / 60;
            const mins = morningTime % 60;
            value = this.makeFiner(hour, mins, null, null);
          }
        } else {
          const hour = timeParserValue.value / 60;
          const mins = timeParserValue.value % 60;
          if (hour < 12) {
            value = this.makeFiner(hour, mins, 'am', null);
          } else {
            value = this.makeFiner(hour, mins, 'pm', null);
          }
        }
        break;
      }
      // Afternoon
      case TimeOfDayType.AFTERNOON: {
        if (!timeParserValue) {
          const afternoonTime = AFTERNOON_TIME;
          const hour = afternoonTime / 60;
          const mins = afternoonTime % 60;
          value = this.makeFiner(hour, mins, null, null);
        } else {
          const hour = timeParserValue.value / 60;
          const mins = timeParserValue.value % 60;
          value = this.makeFiner(hour, mins, 'pm', null);
        }
        break;
      }
      // Evening
      case TimeOfDayType.EVENING: {
        if (!timeParserValue) {
          value = this.makeFiner(EVENING_TIME, 0, 'pm', null);
        } else {
          const hour = timeParserValue.value / 60;
          const mins = timeParserValue.value % 60;
          value = this.makeFiner(hour, mins, 'pm', null);
        }
        break;
      }
      // Night
      case TimeOfDayType.NIGHT: {
        if (!timeParserValue) {
          const nightTime = 10;
          value = this.makeFiner(nightTime, 0, 'pm', null);
        } else {
          const hour = timeParserValue.value / 60;
          const mins = timeParserValue.value % 60;
          const modHour = hour % 12;
          if (modHour >= 0 && modHour < 4){
            value = this.makeFiner(context, hour, mins, "am", null);
          } else if (modHour >= 4 && modHour <= 6){
            value = this.makeFiner(9, mins, "pm", null);
          } else {
            value = this.makeFiner(hour, mins, "pm", null);
          }
        }
        break;
      }
      default:
        break;
    }
    return value;
  }

  extractTime(parsedInfo) {
    const todParserValue = parsedInfo.todParser;
    const timeParserValue = parsedInfo.timeParser;

    let timeValue = null;
    let secondsOfDay = -1;
    if (todParserValue || timeParserValue ) {
      if (timeParserValue) {
        const hour = timeParserValue.value / 60;
        const mins = timeParserValue.value % 60;
        timeValue = this.makeFiner(hour, mins, null, null);
        secondsOfDay = timeParserValue.value * 60;
      } else {
        timeValue = this.getTimeValue(todParserValue, timeParserValue);
        secondsOfDay = 60 * (timeValue.minute() + timeValue.hours() * 60);
      }
    }
    return secondsOfDay;
  }
  
  stitch(parsedInfo) {
    if (this.nextNeedle) {
      return this.nextNeedle.stitch(parsedInfo);
    }
  }

}
