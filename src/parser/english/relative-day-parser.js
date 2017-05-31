import Parser from '../parser';

export default class RelativeDayParser extends Parser {

  constructor(config) {
    super(config);
    this.regex = /\b(?:(tod(?:a(?:y)?)?)|(tom(?:o(?:r(?:r(?:o(?:w)?)?)?)?)?)|(day after tomorrow)|((?:ton(?:i(?:g(?:(?:h)?t)?)?)?)|(?:ton(?:i(?:t(?:e)?)?)?)))\b/i;
  }

  parse(text, parsedInfo) {
    const m = this.regex.exec(text);
    if (m) {
      if (m[1]) {
        // Today
        parsedInfo.relativeDayParser = {
          value: 0,
          isPartial: 'today' !== m[1].trim().toLowerCase(),
        }
      } else if (m[2]) {
        // Tomorrow
        parsedInfo.relativeDayParser = {
          value: 1,
          isPartial: 'tomorrow' !== m[2].trim().toLowerCase(),
        }
      } else if (m[3]) {
        // Day after tomorrow
        parsedInfo.relativeDayParser = {
          value: 2,
          isPartial: false,
        }
      } else {
        // Tonight
        parsedInfo.relativeDayParser = {
          value: 10,
          isPartial: false,
        }
      }
    }
    super.parse(text, parsedInfo);
  }

}

