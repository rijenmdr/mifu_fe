import Header from "@/components/common/Header";
import { Box, Flex, calc } from "@chakra-ui/react";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            <Flex as={"main"} bg={"white.200"} minH={"90vh"} flexDir="column" align={"center"} py={{ base: "16px", md: 10 }} px={"16px"} gap={16}>
                {children}
            </Flex>
        </>
    );
}
