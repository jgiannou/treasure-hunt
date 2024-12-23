import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import background from "../../assets/background.webp";
import HeroCard from "../../components/HeroCard";
import { heroes } from "../../data/heroes";
import { useEffect, useState } from "react";
import { getSelectedHeroes } from "../../lib/supabase";

export const LandingHeroes = () => {
  const [selectedHeroes, setSelectedHeroes] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadSelectedHeroes = async () => {
      const selected = await getSelectedHeroes();
      setSelectedHeroes(selected);
      setIsLoading(false);
    };

    loadSelectedHeroes();
  }, []);

  if (isLoading) {
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
        <Text
          fontSize="2xl"
          color="yellow.200"
          fontFamily="'EB Garamond', serif"
        >
          Φορτώνει...
        </Text>
      </Box>
    );
  }

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
              <HeroCard
                {...hero}
                isAvailable={!selectedHeroes.includes(hero.name)}
              />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
