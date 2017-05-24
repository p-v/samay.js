import Parser, { TimeOfDayType } from '../parser';

export default class TODParser extends Parser {

  constructor() {
    super();
    this.regex = /\b(?:(morn(?:i(?:n(?:g)?)?)?)|(after(?=(?:\S+|$))(?:n(?:o(?:o(?:n)?)?)?)?)|(even(?:i(?:n(?:g)?)?)?)|(ni(?:g(?:h(?:t)?)?)?))\b/i;
  }

  parse(text, parsedInfo) {
		const m = this.regex.exec(text);
		if (m) {
			let value;
			if (m[1]) {
				value = TimeOfDayType.MORNING;
			} else if (m[2]) {
				value = TimeOfDayType.AFTERNOON;
			} else if(m[3]) {
				value = TimeOfDayType.EVENING;
			} else {
				value = TimeOfDayType.NIGHT;
			}
      parsedInfo.todParser = {
        value,
      }
		}
	  super.parse(text, parsedInfo);	
  }

}
