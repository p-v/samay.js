import Config from './config';
import Parser from './parser';
import Needle from './needle';

class Samay {
  
  constructor(config) {
    this.config = config || Config.getDefault();
  }

  /*
   * @deprecated since version 1.1
   */
  parse(text) {
    const parsedInfo = Parser.parse(text, this.config);
    const result = Needle.stitch(parsedInfo, this.config);
    return result.result;
  }

  parseText(text) {
    const parsedInfo = Parser.parse(text, this.config);
    const result = Needle.stitch(parsedInfo, this.config);
    return { date: result };
  }

}

module.exports = Samay;
