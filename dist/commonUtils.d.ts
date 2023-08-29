/**
 * Checks if a given character is a forever mode symbol ('*').
 * @param char - the character to check
 * @returns boolean - whether or not the character is a forever mode symbol
 */
export declare const isForeverModeSymbol: (char: string) => boolean;
/**
 * Checks if a given character is a valid format symbol.
 * @param char - the character to check
 * @returns boolean - whether or not the character is a valid format symbol
 */
export declare const isValidFormatSymbol: (char: string) => boolean;
/**
 * Applies masking to a given input character based on a given format character.
 * @param inputChar - the input character to apply masking to
 * @param formatChar - the format character that defines how to mask
 * @returns string | null - the masked character or null if it doesn't fit the mask
 */
export declare const applyMasking: (inputChar: string, formatChar: string) => string | null;
