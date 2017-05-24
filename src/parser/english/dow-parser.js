import moment from 'moment';
import Parser from '../parser';
import Utils from '../../utils';

export default class DOWParser extends Parser {

  constructor() {
    super();
    this.regex = /(next\s{0,2})?(?:\b(?:(?:(mon)|(fri)|(sun))(?:d(?:ay?)?)?)|\b(tue(?:s(?:d(?:ay?)?)?)?)|\b(wed(?:n(?:e(?:s(?:d(?:ay?)?)?)?)?)?)|\b(thu(?:r(?:s(?:d(?:ay?)?)?)?)?)|\b(sat(?:u(?:r(?:d(?:ay?)?)?)?)?))\b/i;
  }

  parse(text, parsedInfo) {
    const m = this.regex.exec(text);
    if (m) {
      let value = -1;
      if (m[2]) {
        // Monday
        value = 1;
      } else if (m[3]) {
        // Friday
        value = 5;
      } else if (m[4]) {
        // Sunday
        value = 0;
      } else if (m[5]) {
        // Tuesday
        value = 2;
      } else if (m[6]) {
        // Wednesday
        value = 3;
      } else if (m[7]) {
        // Thursday
        value = 4;
      } else if (m[8]) {
        // Saturday
        value = 6;
      }
      if (value !== -1) {
        parsedInfo.dowParser = {
          value: value,
          startIndex: m.index,
          endIndex: m.index + m[0].length,
          hasNext: !!m[1],
        }
      }
    }
    super.parse(text, parsedInfo);
  }

}
