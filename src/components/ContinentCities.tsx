import { Grid, Heading } from "@chakra-ui/react";
import { ContinentCity } from './ContinentCity';

export function ContinentCities() {
  return (
    <>
      <Heading fontWeight="500" fontSize={["2xl", "4xl"]} mb="10">
        Cidades +100
      </Heading>
      <Grid templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]} gap={["20px", "40px"]} alignItems="center" justifyContent="center" px={["30px", "0px"]}>
        <ContinentCity />
        <ContinentCity />
        <ContinentCity />
        <ContinentCity />
        <ContinentCity />
      </Grid>
    </>
  );
}
