import { maskInput } from "./maskInput";

export const useMasking = () => {
    const mask = (input: string, format: string): string => {
        return maskInput(input, format);
    };

    return { mask };
};
