import { ComponentStyleConfig } from "@chakra-ui/react";

export const buttonStyles: ComponentStyleConfig = {
    baseStyle: {
        fontWeight: "bold", // Example of a base style
    },
    sizes: {
        md: {
            h: "52px",
            fontSize: "16px",
            px: "32px",
            py: "8px",
            borderRadius: "16px"
        },
    },
    variants: {
        solid: {
            bg: "brand.500",
            color: "#fff",
            _hover: {
                bg: "brand.600",
            },
            _active: {
                bg: "brand.700",
            },
        },
    },
    defaultProps: {
        size: "md",
        variant: "solid",
    },
}

