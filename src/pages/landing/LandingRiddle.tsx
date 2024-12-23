import {
  Box,
  Button as ChakraButton,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import background from "../../assets/background.webp";
import { useAuth } from "../../context/AuthContext";

export const LandingRiddle = () => {
  const [email, setEmail] = useState("");
  const [riddleAnswer, setRiddleAnswer] = useState("");
  const navigate = useNavigate();
  const { setRiddleCompleted } = useAuth();

  const handleRiddleSubmit = async () => {
    const validAnswers = ["φωτια", "φωτιά", "fire"];
    if (validAnswers.includes(riddleAnswer.toLowerCase())) {
      if (email.includes("@")) {
        // Submit to Netlify Forms
        try {
          const formData = new FormData();
          formData.append("form-name", "riddle-submissions");
          formData.append("email", email);
          formData.append("date", new Date().toLocaleString());

          await fetch("/", {
            method: "POST",
            body: formData,
          });
        } catch (error) {
          console.error("Error submitting form:", error);
        }

        const success = setRiddleCompleted(email);
        if (success) {
          navigate("/heroes");
        } else {
          alert("Παρακαλώ εισάγετε μια έγκυρη διεύθυνση email.");
        }
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
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        backgroundColor="rgba(51, 51, 51, 0.75);"
        borderRadius="10px"
        padding={20}
      >
        {/* Hidden Netlify Form */}
        <form
          name="riddle-submissions"
          method="POST"
          data-netlify="true"
          hidden
        >
          <input type="email" name="email" />
          <input type="text" name="date" />
          <input type="hidden" name="form-name" value="riddle-submissions" />
        </form>

        <VStack gap={6}>
          <Heading
            fontSize="50px"
            fontWeight="bold"
            color="white"
            fontFamily="'EB Garamond', serif"
          >
            Το Κάλεσμα των Γενναίων
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
            Οι φλόγες της Πέτρας έχουν σβήσει, και η σκιά του Νόρβαθ βαδίζει
            ξανά στις ξεχασμένες πεδιάδες. Το βασίλειο χρειάζεται ήρωες. Για να
            ξεκινήσεις το ταξίδι σου, πρέπει να λύσεις τον γρίφο:
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
              fontSize="20px"
            />
            <Input
              placeholder="Η απάντησή σου"
              fontSize="20px"
              value={riddleAnswer}
              onChange={(e) => setRiddleAnswer(e.target.value)}
              fontFamily="'EB Garamond', serif"
              textAlign="center"
            />
            <ChakraButton
              colorScheme="yellow"
              size="lg"
              onClick={handleRiddleSubmit}
              fontFamily="'EB Garamond', serif"
              fontSize="20px"
              marginTop="20px"
            >
              Ξεκίνα το Ταξίδι
            </ChakraButton>
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
};
