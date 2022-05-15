import { Box, Flex, Heading } from "@chakra-ui/react";
import { Banner } from "../components/home/Banner";
import { Header } from "../components/home/Header";
import { Slider } from "../components/home/Slider";
import { TopicGrid } from "../components/home/TopicGrid";

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <TopicGrid />
      <Box
        w={["60px", "90px"]}
        mx="auto"
        h="2px"
        bg="gray.700"
        my={["9", "20"]}
      />
      <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5", "14"]}
        fontSize={["lg", "3xl", "4xl"]}
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Heading>

      <Slider />
    </Flex>
  );
}
