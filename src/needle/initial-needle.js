import Needle from './needle';
import moment from 'moment';

export default class InitialNeedle extends Needle {

  stitch(parsedInfo) {
    const initialParserValue = parsedInfo.initialParser;
    if (initialParserValue && initialParserValue.type === 'number' && initialParserValue.value <= 31) {
      let number = initialParserValue.value;
      if (number < 24) {
        const currentDT = moment();
        const currentHourOfDay = currentDT.hour();

        // consider it as time other wise date
        // first time from now be it am or pm
        const finalDT = super.makeFiner(number, 0, currentHourOfDay >= 12 ? 'pm' : 'am', null);

        // first item
        if (currentHourOfDay < finalDT.hours()) {
          return finalDT;
        } else {
          // increment 12 hours
          finalDT.add(number <= 12 ? 12 : 24, 'h');
        }
        return finalDT;
      } else {
        const currentDT = moment();
        currentDT.hours(0);
        currentDT.minutes(0);
        currentDT.seconds(0);
        currentDT.milliseconds(0);
        let maxDay = currentDT.daysInMonth();
        const currentDayOfMonth = currentDT.date();
        if (currentDayOfMonth < number && number <= maxDay) {
          currentDT.date(number);
        } else {
          currentDT.add(1, 'M');
          maxDay = currentDT.daysInMonth();
          currentDT.date(maxDay < number ? maxDay : number);
        }
        return currentDT;
      }
    } else if (initialParserValue && initialParserValue.type === 'other') {
      // TODO later..
    } else {
      return super.stitch(parsedInfo);
    }

  }

}
