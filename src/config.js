export const Language =  {
  en: {
    parser: [
      

    ],

  },
  hi: {

  },
}

/** Config used to parse time **/
export default class Config {

  static getDefault() {
    const config = new Config();
    config.setLanguage(Language.en);
    config.setHelpAutocomplete(true);
    config.weekend(6, 0);
    return config;
  }

  setLanguage(language) {
    this.language = language;
  }

  weekend(startDay, endDay = 0) {
    if (arguments.length === 0) {
      return this.weekened;
    }
    this.weekened = { startDay, endDay };
  }

  setHelpAutocomplete(helpAutocomplete) {
    this.helpAutocomplete = helpAutocomplete;
  }

  parser() {
    return this.language.parser;
  }

}
