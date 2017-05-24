import Parser from '../parser';
import { RelativeType } from '../../constants'

export default class NumberRelativeParser extends Parser {

  constructor() {
    super();
    this.regex = /\b(?:(?:(?:(?:after\s{1,2})?(\d\d?)\s{0,2})|next\s{1,2})(?:(month?)|(m(?:i(?:n(?:u(?:te?)?)?)?)?)|(we(?:ek?))|(d(?:ay?))|(hr|h(?:o(?:ur?)?)?))s?)\b/i;
  }

  parse(text, parsedInfo) {
    const m = this.regex.exec(text);
    if (m) {
      let digit;
      if (m[1]) {
        digit = Number(m[1]);
      } else {
        // group 2 i.e. "next" isn't null
        digit = 1;
      }

      let type = -1;
      if (m[2]) {
        type = RelativeType.MONTH;
      } else if (m[3]) {
        type = RelativeType.MIN;
      } else if (m[4]) {
        type = RelativeType.WEEK;
      } else if (m[5]) {
        type = RelativeType.DAY;
      } else if (m[6]) {
        type = RelativeType.HOUR;
      }

      if (type !== -1) {
        parsedInfo.numberRelativeParser = {
          value: digit,
          type,
          startIndex: m.index,
          endIndex: m.index + m[0].length,
        }
        if (type === RelativeType.HOUR || type === RelativeType.MIN) {
          // ignore rest of the handlers if hour/min found
          return;
        }
      }
    }
    super.parse(text, parsedInfo);
  }

}

