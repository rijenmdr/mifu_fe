import { ComponentStyleConfig } from "@chakra-ui/react";

export const inputStyles: ComponentStyleConfig = {
    baseStyle: {
        field: {
            borderWidth: "2px",
            borderRadius: "8px",
            _hover: {
                borderColor: "brand.600",
            },
            _focus: {
                borderColor: "brand.700",
                boxShadow: "0 0 0 1px brand.700",
            },
            height: "48px",
            _placeholder: {
                color: "#8d8fa7",
                fontSize: "14px",
                fontWeight: 400
            },
            color: "#00000",
            fontSize: "14px",
            fontWeight: 600
        },
    }
}