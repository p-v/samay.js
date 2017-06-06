samay.js
====

Convert future humanized date/time strings to date.

```
import Samay from 'samay';

const samay = new Samay();
// Supposing today is 24th May, 2017
samay.parseText('tomorrow at 8am'); // { value: dateObject, hasTime: true, samayType: 1 }
```

## Install

```
npm install samay.js
```

# DEPRECATED function

`samay#parse` has been deprecated in favour of `samay#parseText` which returns an object with some addition information.
