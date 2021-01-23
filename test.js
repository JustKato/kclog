const settings = {
    icons: {
        info: `💨`,
        log:  `🦝`,
        warn: `😫`,
        err:  `🥵`,
    },
    spaced: false
};


const k = require(`./logger`).init(settings);

k.log(`This is a log`);

k.info(`This is some info with the initialized object's settings`, k.settings);

k.warn(`This is warning!`, {
    message: `Be Aware!`
});

k.err(`This is an error though`);