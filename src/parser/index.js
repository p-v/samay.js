import DateParser from './english/date-parser';
import DOWParser from './english/dow-parser';
import InitialParser from './english/initial-parser';
import NumberRelativeParser from './english/number-relative-parser';
import RelativeDayParser from './english/relative-day-parser';
import TimeParser from './english/time-parser';
import TODParser from './english/tod-parser';

const parse = (text, config) => {
  const initialParser = new InitialParser();

  // Chain parsers
  initialParser.setNextParser(new NumberRelativeParser())
  .setNextParser(new RelativeDayParser()).setNextParser(new DateParser())
  .setNextParser(new DOWParser()).setNextParser(new TimeParser())
  .setNextParser(new TODParser());
  
  const parsedInfo = {};
  initialParser.parse(text, parsedInfo);
  return parsedInfo;
}

export default { parse };
