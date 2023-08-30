"use strict";
// src/maskInput.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.maskInput = void 0;
const commonUtils_js_1 = require("./commonUtils.js");
const maskInput = (input, format) => {
    let formatted = "";
    let i = 0;
    let j = 0;
    let foreverMode = false;
    let lastFormatChar = null;
    while (i < input.length && (j < format.length || foreverMode)) {
        const formatChar = foreverMode ? lastFormatChar : format[j];
        const inputChar = input[i];
        if ((0, commonUtils_js_1.isForeverModeSymbol)(formatChar)) {
            foreverMode = true;
            j++;
            continue;
        }
        if ((0, commonUtils_js_1.isValidFormatSymbol)(formatChar)) {
            lastFormatChar = formatChar;
            const maskedChar = (0, commonUtils_js_1.applyMasking)(inputChar, formatChar);
            if (maskedChar !== null) {
                formatted += maskedChar;
                i++;
            }
            else {
                break;
            }
        }
        else {
            formatted += formatChar;
            if (formatChar === inputChar) {
                i++;
            }
        }
        if (!foreverMode) {
            j++;
        }
    }
    return formatted;
};
exports.maskInput = maskInput;
