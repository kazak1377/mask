// src/maskInput.ts

import {
    isForeverModeSymbol,
    isValidFormatSymbol,
    applyMasking,
} from "./commonUtils.js";

export const maskInput = (input: string, format: string): string => {
    let formatted = "";
    let i = 0;
    let j = 0;
    let foreverMode = false;
    let lastFormatChar: string | null = null;

    while (i < input.length && (j < format.length || foreverMode)) {
        const formatChar: string = foreverMode ? lastFormatChar! : format[j];
        const inputChar: string = input[i];

        if (isForeverModeSymbol(formatChar)) {
            foreverMode = true;
            j++;
            continue;
        }

        if (isValidFormatSymbol(formatChar)) {
            lastFormatChar = formatChar;
            const maskedChar: string | null = applyMasking(
                inputChar,
                formatChar
            );
            if (maskedChar !== null) {
                formatted += maskedChar;
                i++;
            } else {
                break;
            }
        } else {
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
