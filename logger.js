

module.exports = {

    /**
     * A quick access list to basic terminal colors
     */
    colors: {
        Black: `\u001b[30m`,
        Red: `\u001b[31m`,
        Green: `\u001b[32m`,
        Yellow: `\u001b[33m`,
        Blue: `\u001b[34m`,
        Magenta: `\u001b[35m`,
        Cyan: `\u001b[36m`,
        White: `\u001b[37m`,
        Reset: `\u001b[0m`,
    },

}

/**
 * 
 * @param {String} message The message to print out in the CLI
 * @param {String} type The type of message to send
 * @param {Object} options Extra options for the logging
 */
function log(message = ``, type = 'info', options = {}) {

}