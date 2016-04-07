// com.clover.remote.terminal.KeyPress
/**
 * Enumeration of key press codes
 *
 * @readonly
 * @enum {string}
 */
var KeyPress = {
    NONE: "NONE",
    ENTER: "ENTER",
    ESC: "ESC",
    BACKSPACE: "BACKSPACE",
    TAB: "TAB",
    STAR: "STAR",

    BUTTON_1: "BUTTON_1",
    BUTTON_2: "BUTTON_2",
    BUTTON_3: "BUTTON_3",
    BUTTON_4: "BUTTON_4",
    BUTTON_5: "BUTTON_5",
    BUTTON_6: "BUTTON_6",

    DIGIT_1: "DIGIT_1",
    DIGIT_2: "DIGIT_2",
    DIGIT_3: "DIGIT_3",
    DIGIT_4: "DIGIT_4",
    DIGIT_5: "DIGIT_5",
    DIGIT_6: "DIGIT_6",
    DIGIT_7: "DIGIT_7",
    DIGIT_8: "DIGIT_8",
    DIGIT_9: "DIGIT_9",
    DIGIT_0: "DIGIT_0"
};


//
// Expose the module.
//
if ('undefined' !== typeof module) {
    module.exports = KeyPress;
}
