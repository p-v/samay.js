import moment from 'moment';
import Needle from './needle';
import { RelativeType, SamayType } from '../constants';

export default class NumberRelativeNeedle extends Needle {

  stitch(parsedInfo) {
    const numberRelativeParserValue = parsedInfo.numberRelativeParser;
    if (numberRelativeParserValue) {
      const finalDT = moment();

      switch (numberRelativeParserValue.type) {
        case RelativeType.DAY: {
          finalDT.add(numberRelativeParserValue.value, 'd');
          break;
        }
        case RelativeType.HOUR: {
          finalDT.add(numberRelativeParserValue.value, 'h');
          break;
        }
        case RelativeType.MIN: {
          finalDT.add(numberRelativeParserValue.value, 'm');
          break;
        }
        case RelativeType.WEEK: {
          finalDT.add(numberRelativeParserValue.value, 'w');
          break;
        }
        case RelativeType.MONTH: {
          finalDT.add(numberRelativeParserValue.value, 'M');
          break;
        }
        default:
          break;
      }

      let secondsOfDay = -1;
      let hasTime = false;
      if (numberRelativeParserValue.type !== RelativeType.HOUR &&
          numberRelativeParserValue.type !== RelativeType.MIN) {
        secondsOfDay = super.extractTime(parsedInfo);
        if (secondsOfDay !== -1) {
          hasTime = true;
          finalDT.hours(0);
          finalDT.minutes(0);
          finalDT.seconds(0);
          finalDT.milliseconds(0);
          finalDT.add(secondsOfDay, 's');
        }
      } else {
        hasTime = true;
      }
      return {
        result: finalDT,
        samayType: SamayType.NUMBER_RELATIVE,
        hasTime,
      };
    }
    return super.stitch(parsedInfo);
  }

}
