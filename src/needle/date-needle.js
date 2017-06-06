import Needle from './needle';
import moment from 'moment';
import { SamayType } from '../constants';

export default class DateNeedle extends Needle {

  stitch(parsedInfo) {
    const dateParserValue = parsedInfo.dateParser;
    if (dateParserValue) {
      const secondsOfDay = super.extractTime(parsedInfo);
      if (secondsOfDay === -1) {
        const now = moment();
        if (dateParserValue.value.isBefore(now)) {
          // increment year
          dateParserValue.value.add(1, 'y');
        }
        return {
          result: dateParserValue.value,
          samayType: SamayType.DATE,
          hasTime: false,
        };
      }
      const computedDateTime = dateParserValue.value.unix() + secondsOfDay;
      const finalDT = moment.unix(computedDateTime);
      // check if current time is more than the specified date
      const incrementYear = (Date.now() / 1000) > computedDateTime;
      if (incrementYear) {
        finalDT.add(1, 'y');
      }
      return { result: finalDT, samayType: SamayType.DATE, hasTime: true };
    }
    return super.stitch(parsedInfo);
  }

}
