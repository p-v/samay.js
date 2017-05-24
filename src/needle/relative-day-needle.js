import Needle from './needle';
import moment from 'moment';

export default class RelativeDayNeedle extends Needle {

  stitch(parsedInfo) {
    const relativeDayParserValue = parsedInfo.relativeDayParser;
    if (relativeDayParserValue) {
      const secondsOfDay = super.extractTime(parsedInfo);
      const finalDT = moment();
      finalDT.hours(0);
      finalDT.minutes(0);
      finalDT.seconds(0);
      finalDT.milliseconds(0);
      if (secondsOfDay !== -1) {
        finalDT.add(secondsOfDay, 's');
      }
      switch (relativeDayParserValue.value) {
          case 1:
            finalDT.add(1, 'd');
            break;
          case 2:
            finalDT.add(2, 'd');
            break;
          case 10:
            finalDT.hours(22);
            break;
          default:
            break;
      }
      return finalDT;
    }
    return super.stitch(parsedInfo);
  }

}
