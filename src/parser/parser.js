/** Base parser **/
export default class Parser {

  /**
   * Set next parser to be executed
   * after the current parser
   * @param parser
   */
  setNextParser(parser) {
    this.nextParser = parser;
    return parser;
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
