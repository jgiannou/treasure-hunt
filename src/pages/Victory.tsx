// src/pages/Victory.tsx
import { Box, Heading, Text, Button } from "@chakra-ui/react";

const Victory = () => {
  const goToHome = () => {
    window.location.href = "/";
  };

  return (
    <Box textAlign="center" p={5}>
      <Heading>Congratulations!</Heading>
      <Text mt={4}>You’ve successfully completed the treasure hunt!</Text>
      <Button colorScheme="teal" mt={6} onClick={goToHome}>
        Back to Home
      </Button>
    </Box>
  );
};

export default Victory;
