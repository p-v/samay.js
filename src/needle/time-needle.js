import moment from 'moment';
import Needle from './needle';
import { SamayType } from '../constants';

export default class TimeNeedle extends Needle {

  stitch(parsedInfo) {
    const hasOnlyTime = !parsedInfo.relativeDayParser && !parsedInfo.dowParser &&
      !parsedInfo.dateParser && !parsedInfo.todParser &&
      !parsedInfo.numberRelativeParser && !!parsedInfo.timeParser;

    if (hasOnlyTime) {
      const secondsOfDay = super.extractTime(parsedInfo);
      const finalDT = moment();
      finalDT.hours(0);
      finalDT.minutes(0);
      finalDT.seconds(0);
      finalDT.milliseconds(0);
      finalDT.add(secondsOfDay, 's');
      return { value: finalDT, samayType: SamayType.TIME, hasTime: true };
    }
    return super.stitch(parsedInfo);
  }

}
