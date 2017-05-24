import Needle from './needle';
import moment from 'moment';
import { RelativeType } from '../constants'

export default class NumberRelativeNeedle extends Needle {

  stitch(parsedInfo) {
    const numberRelativeParserValue = parsedInfo.numberRelativeParser;
    if (numberRelativeParserValue) {
      const finalDT = moment();

      let isPartial = false;
      switch (numberRelativeParserValue.type) {
        case RelativeType.DAY: {
          isPartial = true;
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
          isPartial = true;
          finalDT.add(numberRelativeParserValue.value, 'w');
          break;
        }
        case RelativeType.MONTH: {
          isPartial = true;
          finalDT.add(numberRelativeParserValue.value, 'M');
          break;
        }
      }

      if (numberRelativeParserValue.type !== RelativeType.HOUR && numberRelativeParserValue.type !== RelativeType.MIN) {
        const secondsOfDay = super.extractTime(parsedInfo);
        if (secondsOfDay !== -1) {
          finalDT.hours(0);
          finalDT.minutes(0);
          finalDT.seconds(0);
          finalDT.milliseconds(0);
          finalDT.add(secondsOfDay, 's');
        }
      }
      return finalDT;
    } else {
      return super.stitch(parsedInfo);
    }
  }

}

