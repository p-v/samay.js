const MutableRelativeTypes = {
  DAY: 1,
  HOUR: 2,
  MIN: 3,
  WEEK: 4,
  MONTH: 5,
};

export const RelativeType = Object.freeze(MutableRelativeTypes);


/** Base parser **/
export default class Parser {

  constructor() {

  }

  /**
   * Set next parser to be executed
   * after the current parser
   * @param parser
   */
  setNextParser(parser) {
    this.nextParser = parser;
  }

  /**
   * Parse the text and store related infomation inside parsedInfo
   * @param text
   * @param parsedInfo
   */
  parse(text, parsedInfo) {
    if (this.nextParser) {
      this.nextParser.parse(text, parsedInfo);
    }
  }

}
