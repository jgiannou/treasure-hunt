// src/pages/Home.tsx
import { Box, Button, Heading, Text } from "@chakra-ui/react";

const Home = () => {
  const startHunt = () => {
    // Navigate to the first clue (placeholder for now)
    window.location.href = "/clue";
  };

  return (
    <Box textAlign="center" p={5}>
      <Heading>Welcome to the Treasure Hunt!</Heading>
      <Text mt={4}>
        Are you ready for an adventure? Solve riddles, find clues, and reach the
        treasure!
      </Text>
      <Button colorScheme="teal" mt={6} onClick={startHunt}>
        Start the Hunt
      </Button>
    </Box>
  );
};

export default Home;
