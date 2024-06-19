import { Box, Flex, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Flex flexDir={"column"} gap={"16px"} align={"center"}>
        <Text fontSize={"52px"} fontWeight={"bold"} textAlign={"center"} maxW={"800px"} color={"black"} lineHeight={"65px"}>
          Become an Influencer For Breakaway x Mifu
        </Text>

        <Text fontSize={"20px"} maxW={"850px"} fontWeight={400} color={"black"} textAlign={"center"}>
          Whether you're the person with the most likes or followers on campus, or a hard-worker looking to build your network and gain marketing experience, we want to HEAR from you.
        </Text>

        <Text fontSize={"20px"} maxW={"860px"} fontWeight={400} color={"black"} textAlign={"center"}>
          Becoming a part of the Breakaway Influencer and Ambassador team is pretty simple. Just apply by selecting your preferred market below. Complete your application and attach your Instagram handle for a chance to be considered!
        </Text>
      </Flex>
    </>
  );
}
