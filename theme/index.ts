import { extendTheme } from "@chakra-ui/react";
import { buttonStyles } from "./button";
import { formStyles } from "./form";
import { inputStyles } from "./input";

export const theme = extendTheme({
    components: {
        Button: buttonStyles,
        Form: formStyles,
        Input: inputStyles
    },
    colors: {
        brand: {
            50: "#e6e7f7",
            100: "#c2c3e5",
            200: "#999ad3",
            300: "#7172c2",
            400: "#4a4ab1",
            500: "#5957d5", // base color
            600: "#424594",
            700: "#2f3274",
            800: "#1c1f54",
            900: "#0a0a34",
        },
        black: "#050607",
        "dark-blue": "#242a5b",
        white: {
            100: "#FFFFFF",
            200: "#faf9f9"
        }
    },
})