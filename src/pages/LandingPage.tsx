// src/pages/Landing.tsx
import {
  Box,
  Button,
  Heading,
  Text,
  Input,
  VStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import background from "../assets/background.webp";
import HeroCard from "../components/HeroCard";
import { heroes } from "../data/heroes";

const Landing = () => {
  const [promoCode, setPromoCode] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [riddleAnswer, setRiddleAnswer] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const [showHeroes, setShowHeroes] = useState(false);

  const handlePromoSubmit = () => {
    if (login(promoCode)) {
      setIsAuthenticated(true);
    } else {
      alert("Invalid promo code. Please try again.");
    }
  };

  const handleQuestSubmit = () => {
    const validAnswers = ["φωτια", "φωτιά", "fire"];
    if (validAnswers.includes(riddleAnswer.toLowerCase())) {
      if (email.includes("@")) {
        setShowHeroes(true);
      } else {
        alert("Παρακαλώ εισάγετε μια έγκυρη διεύθυνση email.");
      }
    } else {
      alert("Λάθος απάντηση. Προσπάθησε ξανά!");
    }
  };

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
      {!showHeroes && (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          backgroundColor="rgba(51, 51, 51, 0.75);"
          borderRadius="10px"
          padding={20}
        >
          {!isAuthenticated ? (
            // Authentication Form
            <VStack gap={6}>
              <Heading
                fontSize="40px"
                fontWeight="bold"
                color="white"
                fontFamily="'EB Garamond', serif"
              >
                Enter Eldoria
              </Heading>
              <Input
                placeholder="Enter Promo Code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                width="300px"
                fontFamily="'EB Garamond', serif"
                textAlign="center"
                mb={4}
              />
              <Button
                colorScheme="yellow"
                size="lg"
                onClick={handlePromoSubmit}
                fontFamily="'EB Garamond', serif"
              >
                Enter
              </Button>
            </VStack>
          ) : (
            // Quest Details and Riddle Form
            <VStack gap={6}>
              <Heading
                fontSize="50px"
                fontWeight="bold"
                color="white"
                fontFamily="'EB Garamond', serif"
              >
                To Κάλεσμα των Γενναίων
              </Heading>
              <Text
                fontSize="22px"
                color="white"
                fontWeight="bold"
                maxWidth="600px"
                fontFamily="'EB Garamond', serif"
                margin={0}
                padding={0}
              >
                Το σκοτάδι επιστρέφει στην Eldoria.
              </Text>
              <Text
                fontSize="25px"
                color="white"
                fontWeight="bold"
                maxWidth="600px"
                fontFamily="'EB Garamond', serif"
                margin={0}
              >
                Οι φλόγες της Πέτρς έχουν σβήσει, και η σκιά του Νόρβαθ βαδίζει
                ξανά στις ξεχασμένες πεδιάδες. Το βασίλειο χρειάζεται ήρωες. Για
                να ξεκινήσεις το ταξίδι σου, πρέπει να λύσεις τον γρίφο:
              </Text>
              <Text
                color="white"
                fontSize="20px"
                fontWeight="bold"
                fontFamily="'EB Garamond', serif"
                fontStyle="italic"
              >
                "Γεννιέμαι από στάχτη και πεινώ ασταμάτητα.
                <br /> Αν με θρέψεις, θα σε ζεστάνω.
                <br /> Αν με αγγίξεις, θα σε καταστρέψω.
                <br /> Τι είμαι?"
              </Text>
              <VStack gap={4} width="300px">
                <Input
                  placeholder="Το Email σου"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fontFamily="'EB Garamond', serif"
                  textAlign="center"
                />
                <Input
                  placeholder="Η απάντησή σου"
                  value={riddleAnswer}
                  onChange={(e) => setRiddleAnswer(e.target.value)}
                  fontFamily="'EB Garamond', serif"
                  textAlign="center"
                />
                <Button
                  colorScheme="white"
                  size="xl"
                  onClick={handleQuestSubmit}
                  fontFamily="'EB Garamond', serif"
                >
                  Ξεκίνα το Ταξίδι
                </Button>
              </VStack>
            </VStack>
          )}
        </Box>
      )}
      {showHeroes && (
        <Box
          mt={10}
          width="full"
          maxW="7xl"
          mx="auto"
          px={6}
          textAlign="center"
        >
          <Heading
            fontSize="40px"
            color="white"
            mb={10}
            fontFamily="'EB Garamond', serif"
            textShadow="0 0 10px rgba(255, 215, 0, 0.3)"
          >
            Οι Ήρωες της Eldoria
          </Heading>
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
          <Button
            mt={12}
            size="lg"
            bg="rgba(255, 215, 0, 0.1)"
            color="yellow.200"
            border="1px solid rgba(255, 215, 0, 0.3)"
            _hover={{
              bg: "rgba(255, 215, 0, 0.2)",
            }}
            onClick={() => navigate("/clue")}
          >
            Συνέχισε την Αποστολή
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Landing;
