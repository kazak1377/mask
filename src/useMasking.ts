import { maskInput } from "./maskInput.js";

export const useMasking = () => {
    const mask = (input: string, format: string): string => {
        return maskInput(input, format);
    };

    return { mask };
};
