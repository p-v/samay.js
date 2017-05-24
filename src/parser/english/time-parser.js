import Parser from '../parser';

export default class TimeParser extends Parser {

  constructor() {
    super();
    this.regex = /\b((?:2[0-3])|(?:1\d)|(?:0?\d))(?:(?::|\s?)((?:0?\d)|(?:[0-5][0-9]?)))?\s{0,2}([ap](?:\.?m\.?)?)?\b/i;
  }

  getUpdateText(text, parsedInfo) {
    const dateParserValue = parsedInfo.dateParser;
    const numberRelativeParserValue = parsedInfo.numberRelativeParser;
    let updatedText = text;
    // If the number relative parser value or date parser value is present
    // then replace that value so as to ignore it
    if (dateParserValue) {
      updatedText = text.substring(0, dateParserValue.startIndex) + text.substring(dateParserValue.endIndex);
    } else if (numberRelativeParserValue) {
      updatedText = text.substring(0, numberRelativeParserValue.startIndex) + text.substring(numberRelativeParserValue.endIndex);
    }
    return updatedText;
  }

  parse(text, parsedInfo) {
    const updatedText = this.getUpdateText(text, parsedInfo);
    const m = this.regex.exec(updatedText);
    if (m) {
      console.log(m);
      let hourOfDay = Number(m[1]);
      let mins = 0, minsStr = m[2], amPm = m[3];
      if (minsStr) {
        mins = Number(minsStr);
      }
      if (hourOfDay < 12) {
        if (amPm && amPm.match(/^p.*/i)) {
          hourOfDay = hourOfDay + 12;
        }
      } else if (hourOfDay === 12) {
        if (amPm && amPm.match(/^a.*/i)) {
          hourOfDay = 0;
        }
      }
      let minsInDay = hourOfDay * 60 + mins;
      parsedInfo.timeParser = {
        value: minsInDay,
        isAmPmPresent: !!amPm,
      }
    }
    super.parse(text, parsedInfo);
  }
}
