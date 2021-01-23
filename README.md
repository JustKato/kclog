# [Kato's CLI Logger](https://github.com/JustKato/kclog) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/JustKato/kclog/blob/master/LICENSE)
**Kato's Command Line Interface Logger** is a simple javascript file that all it does is log stuff for you, if you are sick and tired of going through text with no clue where that 1 console.log you put, this is the library for you, it colours text for you, has some cute emoticons, timestamps and is also customizable

## Installation

**Kato's Command Line Interface Logger** has been designed as a drop-in replacement of console.log, it's more of a wrapper that formats text for you nicely, so all you gotta do is just drop it in your project, and instead of `console.log` just use `k.log`


You can use KCLogger as a `<script>` tag from a [CDN](https://raw.githubusercontent.com/JustKato/kclog/master/logger.js), or as a `kclogger` package on [npm](https://www.npmjs.com/package/kclogger).

## RoadMap
```yml
Messages:
    - ✅ info
    - ✅ log
    - ✅ warn
    - ✅ error
Options:
    - ✅ Icons
    - ✅ Colours
    - ⏲ Save to file
    - 💀 Discord bot messages
    - 💀 Telegram bot messages
```

## Example Usage
```js

// The options object is super simple, you can take a look at it by checking
// the require(`kclogger`).settings file
const kOptions = {
    // Yeah, you can change the icons or turn them off completely
    icons: {
        log: `🦝`
    },
    timestamps: true, // If the time should be shown
    datestamps: true, // If the date should be shown
    spaced: true, // If there should be a '\n' after each line of logging
    // This will write a log to the file mentioned down here, you can simply use time() if you would like to make different files
    fileLog: {
        path: `./fileLog.json` // For now, it only logs in json
    }
};

const k = require(`kclogger`).init(kOptions);

k.log(`Hey, it's all working just fine!`); // [🦝][23/06/2020 13:16:23]: Hey, it's all working just fine!
k.warn(`And it's looking really good!`); // [🟡][23/06/2020 13:16:23]: Hey, it's all working just fine!
k.err(`Even showing errors`, {message: `Some ugly error`, data: [{}, {}]); // [🥵 ][23/06/2020 13:16:23]: Hey, it's all working just fine!

```

![Example Picture](https://raw.githubusercontent.com/JustKato/kclog/master/preview.png)