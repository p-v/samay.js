import Needle from './needle';
import moment from 'moment';

export default class DateNeedle extends Needle {

  stitch(parsedInfo) {
    const dateParserValue = parsedInfo.dateParser;
    if (dateParserValue) {
      const secondsOfDay = super.extractTime(parsedInfo);
      if (secondsOfDay === -1) {
        const computedDateTime = dateParserValue.value.unix();
        return dateParserValue.value;
      } else {
        const computedDateTime = dateParserValue.value.unix() + secondsOfDay;
        const finalDT = moment.unix(computedDateTime);
        // check if current time is more than the specified date
        const incrementYear = (Date.now() / 1000) > computedDateTime;
        if (incrementYear) {
          finalDT.add(1, 'y');
        }
        return finalDT;
      }
    } else {
      return super.stitch(parsedInfo);
    }
  }

}
