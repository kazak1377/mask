"use strict";
// src/commonUtils.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyMasking = exports.isValidFormatSymbol = exports.isForeverModeSymbol = void 0;
/**
 * Checks if a given character is a forever mode symbol ('*').
 * @param char - the character to check
 * @returns boolean - whether or not the character is a forever mode symbol
 */
const isForeverModeSymbol = (char) => {
    return char === "*";
};
exports.isForeverModeSymbol = isForeverModeSymbol;
/**
 * Checks if a given character is a valid format symbol.
 * @param char - the character to check
 * @returns boolean - whether or not the character is a valid format symbol
 */
const isValidFormatSymbol = (char) => {
    return ["U", "#", "a", "A", "S", "X"].includes(char);
};
exports.isValidFormatSymbol = isValidFormatSymbol;
/**
 * Applies masking to a given input character based on a given format character.
 * @param inputChar - the input character to apply masking to
 * @param formatChar - the format character that defines how to mask
 * @returns string | null - the masked character or null if it doesn't fit the mask
 */
const applyMasking = (inputChar, formatChar) => {
    switch (formatChar) {
        case "#":
            return /\d/.test(inputChar) ? inputChar : null;
        case "U":
            return /[a-zA-Z0-9]/.test(inputChar)
                ? inputChar.toUpperCase()
                : null;
        case "a":
            return /[a-zA-Z]/.test(inputChar) ? inputChar.toLowerCase() : null;
        case "A":
            return /[a-zA-Z]/.test(inputChar) ? inputChar.toUpperCase() : null;
        case "S":
        case "X":
            return /[a-zA-Z0-9]/.test(inputChar) ? inputChar : null;
        default:
            return null;
    }
};
exports.applyMasking = applyMasking;
