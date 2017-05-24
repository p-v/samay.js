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
    config.setHelpAutocomplete(helpAutocomplete);
    return config;
  }

  setLanguage(language) {
    this.language = language;
  }

  setHelpAutocomplete(helpAutocomplete) {
    this.helpAutocomplete = helpAutocomplete;
  }

  parser() {
    return this.language.parser;
  }

}
