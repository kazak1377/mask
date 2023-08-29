"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMasking = void 0;
const maskInput_1 = require("./maskInput");
const useMasking = () => {
    const mask = (input, format) => {
        return (0, maskInput_1.maskInput)(input, format);
    };
    return { mask };
};
exports.useMasking = useMasking;
