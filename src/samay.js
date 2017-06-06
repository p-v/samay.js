import Config from './config';
import Parser from './parser';
import Needle from './needle';
import { SamayType } from './constants';

class Samay {

  static get SamayType() {
    return SamayType;
  }

  
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
    return result;
  }

}

module.exports = Samay;
