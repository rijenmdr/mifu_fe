import { Flex, Text } from "@chakra-ui/react";

import CampaignForm from "@/components/container/CampaignForm";
import { getCampaignForm } from "../../../lib/api";

export default async function Home() {
  const data = await getCampaignForm("1");
  return (
    <>
      <Flex flexDir={"column"} gap={"16px"} align={"center"}>
        <Text fontSize={{ base: "36px", md: "52px" }} fontWeight={"bold"} textAlign={"center"} maxW={"800px"} color={"black"} lineHeight={{ base: "48px", md: "65px" }}>
          Become an Influencer For Breakaway x Mifu
        </Text>

        <Text fontSize={{ base: "16px", md: "20px" }} maxW={"850px"} fontWeight={400} color={"black"} textAlign={"center"}>
          Whether you&apos;re the person with the most likes or followers on campus, or a hard-worker looking to build your network and gain marketing experience, we want to HEAR from you.
        </Text>

        <Text fontSize={{ base: "16px", md: "20px" }} maxW={"860px"} fontWeight={400} color={"black"} textAlign={"center"}>
          Becoming a part of the Breakaway Influencer and Ambassador team is pretty simple. Just apply by selecting your preferred market below. Complete your application and attach your Instagram handle for a chance to be considered!
        </Text>
      </Flex>

      <CampaignForm
        formFields={data}
      />
    </>
  );
}
