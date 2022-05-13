import { Flex } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { TopicGrid } from "../components/TopicGrid";

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <TopicGrid />
    </Flex>
  );
}
