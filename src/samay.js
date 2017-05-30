import Config from './config';
import Parser from './parser';
import Needle from './needle';

class Samay {
  
  constructor(config) {
    this.config = config || Config.getDefault();
  }

  parse(text) {
    const parsedInfo = Parser.parse(text, this.config);
    const result = Needle.stitch(parsedInfo, this.config);
    return result;
  }

}

module.exports = Samay;
