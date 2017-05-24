import Needle from './needle';
import moment from 'moment';

export default class DateNeedle extends Needle {

  stitch(parsedInfo) {
    const dateParserValue = parsedInfo.dateParser;
    if (dateParserValue) {
      const secondsOfDay = super.extractTime(parsedInfo);
      if (secondsOfDay === -1) {
        const computedDateTime = dateParserValue.value.unix();
        return dateParserValue.value.clone();
      } else {
        const computedDateTime = dateParserValue.value.unix() + secondsOfDay;
        const finalDT= moment();
        // check if current time is more than the specified date
        const incrementYear = finalDT.unix() > computedDateTime;
        finalDT.unix(computedDateTime);
        if (incrementYear) {
          finalDT.add(1, 'year');
        }
        return finalDT.clone();
      }
    } else {
      return super.stitch(parsedInfo);
    }
  }

}
