import Parser from '../parser';

export default class InitialParser extends Parser {

  constructor(config) {
    super(config);
    if (config.helpAutocomplete) {
      this.skip = true;
    } else {
      this.regex = /^\s*(\d{1,2})\s*$/i;
    }
  }

  parse(text, parsedInfo) {
    if (this.skip) {
      super.parse(text, parsedInfo);
    } else if (text.trim().length === 2 && text.trim().match(/^to/i)) {
      // if only 2 char text is there and that is 'to', do not go further,
      // consider it as today and tomorrow, and show suggestions accordingly
      parsedInfo.initialParser = {
        type: 'other',
        value: 0,
      }
    } else {
      // check if the text has only numbers
      const m = this.regex.exec(text);
      if (m) {
        let number = Number(m[1]);
        if (number > 0) {
          parsedInfo.initialParser = {
            type: 'number',
            value: number,
          }
        } else {
          super.parse(text, parsedInfo);
        }
      } else {
        super.parse(text, parsedInfo);
      }
    }
  }

}

