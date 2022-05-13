import { Grid, GridItem } from "@chakra-ui/react";
import { TopicItem } from "./TopicItem";

export function TopicGrid() {
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      mt={["10", "32"]}
      mx="auto"
      maxW="1160px"
      gap={[1, 5]}
    >
      <GridItem>
        <TopicItem icon="cocktail" text="vida noturna" />
      </GridItem>
      <GridItem>
        <TopicItem icon="surf" text="praia" />
      </GridItem>
      <GridItem>
        <TopicItem icon="building" text="moderno" />
      </GridItem>
      <GridItem>
        <TopicItem icon="museum" text="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <TopicItem icon="earth" text="e mais..." />
      </GridItem>
    </Grid>
  );
}
