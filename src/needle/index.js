import DateNeedle from './date-needle';
import DOWNeedle from './dow-needle';
import InitialNeedle from './initial-needle';
import NumberRelativeNeedle from './number-relative-needle';
import RelativeDayNeedle from './relative-day-needle';
import TimeNeedle from './time-needle';
import TODNeedle from './tod-needle';

const stitch = (parsedInfo, config) => {
  const initialNeedle = new InitialNeedle(config);

  // Build chain
  initialNeedle.setNextNeedle(new TimeNeedle(config)).setNextNeedle(new TODNeedle(config))
  .setNextNeedle(new NumberRelativeNeedle(config)).setNextNeedle(new RelativeDayNeedle(config))
  .setNextNeedle(new DateNeedle(config)).setNextNeedle(new DOWNeedle(config));

  return initialNeedle.stitch(parsedInfo);
};

export default { stitch };
