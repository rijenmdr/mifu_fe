import { ComponentStyleConfig } from "@chakra-ui/react";

export const formStyles: ComponentStyleConfig = {
    parts: ['container', 'requiredIndicator', 'helperText'],
    baseStyle: {
        container: {
            label: {
                fontSize: '15px',
                color: "dark-blue",
                textTransform: "capitalize"
            },
        },
    },
};