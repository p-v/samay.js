import moment from 'moment';
import Parser from '../parser';
import Utils from '../../utils';

export default class DateParser extends Parser {

  constructor() {
    super();
    this.regex = /\b(?:(0?[1-9]|[12][0-9]|3[01])(?:st|nd|rd|th)?\s+\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|january|february|march|april|may|june|july|august|september|october|november|december)\b(?:(?:,?\s*)(?:(?:20)?(\d\d)(?!:)))?|(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|january|february|march|april|may|june|july|august|september|october|november|december)\s+(0?[1-9]|[12][0-9]|3[01])(?:st|nd|rd|th)?\b(?:(?:,?\s*)(?:\b(?:20)?(\d\d)(?!:))\b)?)\b/i;
  }

  parse(text, parsedInfo) {
    const m = this.regex.exec(text);
    if (m) {
      let dayOfMonth, year = 0,month, yearStr;
      if (m[1]) {
        dayOfMonth = Number(m[1]);
        month = m[2];
        yearStr = m[3];
      } else {
        dayOfMonth = Number(m[5]);
        month = m[4];
        yearStr = m[6];
      }
      if (yearStr) {
        year = 2000 + Number(yearStr);
      }

      const info = moment();
      const currentYear = info.year();

      if (year > 0 && year >= currentYear) {
        info.year(year);
      }

      info.month(month).date(dayOfMonth).hour(0).minute(0).second(0).millisecond(0);

      parsedInfo.dateParser = {
        value: info,
        startIndex: m.index,
        endIndex: m.index + m[0].length,
      }
    }
    super.parse(text, parsedInfo);
  }

}
