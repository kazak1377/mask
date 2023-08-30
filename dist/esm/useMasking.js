import { maskInput } from "./maskInput.js";
export const useMasking = () => {
    const mask = (input, format) => {
        return maskInput(input, format);
    };
    return { mask };
};
