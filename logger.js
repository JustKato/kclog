"use strict";

// #region Helpers
    /**
     * Helps to parse the respective date to a correct format
     * @param {Date} d Date input
     */
    function parseDate( d = new Date()) {

        let day   = String(d.getDate());
        let month = String(d.getMonth() + 1);
        let year  = String(d.getFullYear());

        // PrePending 0 if the length is < 1
        day   = (  day.length  > 1 ) ? day   : `0${day}`;
        month = ( month.length > 1 ) ? month : `0${month}`;

        // Return the formatted date
        return `${day}/${month}/${year}`;
    }

    /**
     * Helps to parse the respective date to a correct format
     * @param {Date} d Date input
     */
    function parseTime( d = new Date()) {
        let h = String(d.getHours());
        let m = String(d.getMinutes());
        let s = String(d.getSeconds());

        // PrePending 0 if the length is < 1
        h = ( h.length > 1 ) ? h : `0${h}`;
        m = ( m.length > 1 ) ? m : `0${m}`;
        s = ( s.length > 1 ) ? s : `0${s}`;

        // Return the formatted date
        return `${h}:${m}:${s}`;
    }
// #endregion


// #region Main Object
    /**
     * This is the actual logger, the module.exports simply handles the settings
     */
    const MainLogger = {
        /**
         * 
         * @param {String} message The message to print out in the CLI
         * @param {String} type The type of message to send
         * @param {Array} color A list of colors to prepend to the log
         */
        doLog: (message = ``, type = 'info', color = [module.exports.colors.Reset], ...args) => {

            // #region Icon
                let icon = MainLogger.settings.icons[type] || `💨`;
            // #endregion

            // #region Time
                const now = new Date();
                // #region TimeStamp
                    let timestamp = ``;
                    if ( !!MainLogger.settings.timestamps ) {
                        timestamp = parseTime(now) + " ";
                    }
                // #endregion
                // #region DateStamp
                    let datestamp = ``;
                    if ( !!MainLogger.settings.datestamps ) {
                        datestamp = parseDate(now);
                    }
                // #endregion
            // #endregion

            // #region Spaced
                let spaced = (!!MainLogger.settings.spaced) ? `\n` : ``;
            // #endregion

            // #region Colors
                let color = (!!MainLogger.settings.colorful ) ? color.join("") : ``;
            // #endregion

            // #region Stdout
                console.log(`[${icon}][${datestamp}${timestamp}]: ${color}${message}${spaced}${module.exports.color.Reset}`, ...args);
            // #endregion
        },

        info : (message, ...args) => {
            MainLogger.doLog(message, `info`, [module.exports.color.Bright, module.exports.color.FgCyan],   ...args);
        },

        log  : (message, ...args) => {
            MainLogger.doLog(message, `log`,  [module.exports.color.Bright, module.exports.color.FgWhite],  ...args);
        },

        warn : (message, ...args) => {
            MainLogger.doLog(message, `warn`, [module.exports.color.Bright, module.exports.color.FgYellow], ...args);
        },

        err  : (message, ...args) => {
            MainLogger.doLog(message, `err`,  [module.exports.color.Bright, module.exports.color.FgRed],    ...args);
        },


    };
// #endregion

// #region Exports
    module.exports = {
        /**
         * The whole settings file to have as a reference
         */
        settings: {
            // Yeah, you can change the icons or turn them off completely
            icons: {
                info: `💨`,
                log:  `🦝`,
                warn: `😫`,
                err:  `🥵`,
            },
            colorful:   true, // Depending on your terminal, the colors might not be supported
            timestamps: true, // If the time should be shown
            datestamps: true, // If the date should be shown
            spaced:     true, // If there should be a '\n' after each line of logging
            // This will write a log to the file mentioned down here, you can simply use time() if you would like to make different files
            fileLog: `./fileLog.json` // For now, it only logs in json
        },

        /**
         * A quick access list to basic terminal colors
         */
        colors: {
            "Reset": "\x1b[0m",
            "Bright": "\x1b[1m",
            "Dim": "\x1b[2m",
            "Underscore": "\x1b[4m",
            "Blink": "\x1b[5m",
            "Reverse": "\x1b[7m",
            "Hidden": "\x1b[8m",
            
            "FgBlack": "\x1b[30m",
            "FgRed": "\x1b[31m",
            "FgGreen": "\x1b[32m",
            "FgYellow": "\x1b[33m",
            "FgBlue": "\x1b[34m",
            "FgMagenta": "\x1b[35m",
            "FgCyan": "\x1b[36m",
            "FgWhite": "\x1b[37m",
            
            "BgBlack": "\x1b[40m",
            "BgRed": "\x1b[41m",
            "BgGreen": "\x1b[42m",
            "BgYellow": "\x1b[43m",
            "BgBlue": "\x1b[44m",
            "BgMagenta": "\x1b[45m",
            "BgCyan": "\x1b[46m",
            "BgWhite": "\x1b[47m",
        },

        /**
         * Initialize the logger
         * @param {Object} options 
         */
        init: (options = module.exports.settings) => {

            // Overwrite the default settings
            MainLogger.settings = {...module.exports.settings, ...options};

            // Return the logger
            return MainLogger;
        }

    }
// #endregion
