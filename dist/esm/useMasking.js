import { maskInput } from "./maskInput";
export const useMasking = () => {
    const mask = (input, format) => {
        return maskInput(input, format);
    };
    return { mask };
};
