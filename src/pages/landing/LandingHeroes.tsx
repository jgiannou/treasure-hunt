import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import background from "../../assets/background.webp";
import HeroCard from "../../components/HeroCard";
import { heroes } from "../../data/heroes";

export const LandingHeroes = () => {
  return (
    <Box
      backgroundImage={`url(${background})`}
      backgroundSize="cover"
      backgroundPosition="center"
      minHeight="100vh"
      color="white"
      textAlign="center"
      p={10}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box mt={10} width="full" maxW="7xl" mx="auto" px={6} textAlign="center">
        <Heading
          fontSize="40px"
          color="white"
          mb={10}
          fontFamily="'EB Garamond', serif"
          textShadow="0 0 10px rgba(255, 215, 0, 0.3)"
          margin="5px"
        >
          Οι Ήρωες της Eldoria
        </Heading>
        <Text
          fontSize="20px"
          color="white"
          fontFamily="'EB Garamond', serif"
          margin="0"
          fontStyle="italic"
        >
          Επέλεξε έναν ήρωα για να ξεκινήσεις την αποστολή
        </Text>
        <Grid
          padding={20}
          templateColumns="repeat(2, 1fr)"
          gap="60px"
          justifyItems="center"
          alignItems="center"
          margin="auto"
          width="70%"
        >
          {heroes.map((hero) => (
            <GridItem key={hero.name} height="100%">
              <HeroCard {...hero} />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
