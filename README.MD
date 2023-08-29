# Max Mask

A simple masking solution for frontend applications as well as NodeJS. This package also provides a Vue3 composable for easier integration into Vue projects.

## Installation

You can install this package via npm or yarn.

```bash
npm install max-mask
```

```bash
yarn add max-mask
```

## Usage

### As a Function

You can use the maskInput function to format strings according to a specified mask.

```js
import { maskInput } from "max-mask";

const formattedPhone = maskInput("1234567890", "(###) ###-####");
console.log(formattedPhone); // Output: (123) 456-7890
```

### As a Vue3 Composable

If you are working in a Vue3 environment, you can use the useMasking composable.

```js
import { useMasking } from "max-mask";

const { mask } = useMasking();

//example 1
const formattedPhone = mask("1234567890", "(###) ###-####");

//example 2
const input = ref("");
const formatted = computed(() => mask(input.value, "(###) ###-####"));
```

## Supported Masking Characters

-   #: Accepts a number
-   U: Alphanumeric, converts to uppercase
-   a: Letters, converts to lowercase
-   A: Letters, converts to uppercase
-   S: Alphanumeric, keeps the original case
-   X: Alphanumeric, keeps the original case
-   \*: Makes the previous pattern repeatable forever

## Contributing

Feel free to open issues and pull requests!

## License

This project is licensed under the MIT License.

## Author

Created by Maksym max@kozachenko.io.
