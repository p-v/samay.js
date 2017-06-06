import moment from 'moment';
import Needle from './needle';
import { SamayType } from '../constants';

export default class TODNeedle extends Needle {

  stitch(parsedInfo) {
    const hasOnlyTime = !parsedInfo.relativeDayParser && !parsedInfo.dowParser &&
      !parsedInfo.dateParser && !parsedInfo.numberRelativeParser && !!parsedInfo.todParser;

    if (hasOnlyTime) {
      const secondsOfDay = super.extractTime(parsedInfo);
      const finalDT = moment();
      finalDT.hours(0);
      finalDT.minutes(0);
      finalDT.seconds(0);
      finalDT.milliseconds(0);
      finalDT.add(secondsOfDay, 's');
      return { value: finalDT, samayType: SamayType.TIME_OF_DAY, hasTime: true };
    }
    return super.stitch(parsedInfo);
  }

}
