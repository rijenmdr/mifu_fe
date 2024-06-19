import { Flex, Text } from "@chakra-ui/react"
import Image from "next/image";

import { BreakdownLogo, MifuLogo } from "../../../images";

type Props = {}

const Header = ({}: Props) => {
  return (
    <Flex justifyContent={"center"} align={"center"} p={"16px"} gap={"16px"} bg={"white.100"}>
        <Image
            src={BreakdownLogo}
            alt="breakdown-logo"
            width={367}
            height={50}
            style={{ objectFit: "cover" }}
        />

        <Text fontSize={"large"} fontWeight={"bold"}>
            X
        </Text>

        <Image
            src={MifuLogo}
            alt="mifu-logo"
            width={139}
            height={51}
            style={{ objectFit: "cover" }}
        />
    </Flex>
  )
}

export default Header;