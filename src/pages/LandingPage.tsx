// src/pages/Landing.tsx
import { Box, Button, Heading, Text, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Landing = () => {
  const [promoCode, setPromoCode] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (login(promoCode)) {
      navigate("/clue");
    } else {
      alert("Invalid promo code. Please try again.");
    }
  };

  return (
    <Box
      bg="url('/images/medieval-scroll.jpg')" // Replace with your medieval-themed image
      bgSize="cover"
      bgPosition="center"
      minHeight="100vh"
      color="white"
      textAlign="center"
      p={10}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Heading fontSize="4xl" mb={6} fontFamily="'MedievalSharp', cursive">
        A Call to the Brave
      </Heading>
      <Text
        fontSize="lg"
        mb={8}
        maxWidth="600px"
        fontFamily="'MedievalSharp', cursive"
      >
        In a land of knights and dragons, a treasure awaits. The hunt begins in
        one month, but only those who solve the first riddle shall have a chance
        to claim it. Will you accept the challenge?
      </Text>
      <Box mb={6}>
        <Text
          fontSize="xl"
          fontWeight="bold"
          fontFamily="'MedievalSharp', cursive"
        >
          "I am always hungry, I must always be fed. The finger I touch, will
          soon turn red. What am I?"
        </Text>
      </Box>
      <Box mt={6}>
        <Input
          placeholder="Enter Promo Code"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
          width="300px"
          fontFamily="'MedievalSharp', cursive"
          textAlign="center"
          mb={4}
        />
        <Button
          colorScheme="yellow"
          size="lg"
          onClick={handleSubmit}
          fontFamily="'MedievalSharp', cursive"
        >
          Begin the Quest
        </Button>
      </Box>
    </Box>
  );
};

export default Landing;
