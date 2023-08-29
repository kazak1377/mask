// src/maskInput.ts
import { isForeverModeSymbol, isValidFormatSymbol, applyMasking, } from "./commonUtils";
export const maskInput = (input, format) => {
    let formatted = "";
    let i = 0;
    let j = 0;
    let foreverMode = false;
    let lastFormatChar = null;
    while (i < input.length && (j < format.length || foreverMode)) {
        const formatChar = foreverMode ? lastFormatChar : format[j];
        const inputChar = input[i];
        if (isForeverModeSymbol(formatChar)) {
            foreverMode = true;
            j++;
            continue;
        }
        if (isValidFormatSymbol(formatChar)) {
            lastFormatChar = formatChar;
            const maskedChar = applyMasking(inputChar, formatChar);
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
