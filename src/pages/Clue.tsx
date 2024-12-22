// src/pages/Clue.tsx
import { Box, Button, Heading, Text, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Clue = () => {
  // Array of clues and their correct answers
  const clues = [
    {
      question: "I speak without a mouth and hear without ears. What am I?",
      answer: "echo",
    },
    {
      question:
        "The more of this you take, the more you leave behind. What is it?",
      answer: "footsteps",
    },
    { question: "What has keys but can’t open locks?", answer: "piano" },
  ];
  const [currentClueIndex, setCurrentClueIndex] = useState(() => {
    // Retrieve progress from local storage
    return Number(localStorage.getItem("currentClueIndex")) || 0;
  });

  const goToNextClue = () => {
    const nextIndex = currentClueIndex + 1;
    setCurrentClueIndex(nextIndex);
    localStorage.setItem("currentClueIndex", nextIndex.toString()); // Save progress
    setIsCorrect(false);
    setUserAnswer("");
  };

  useEffect(() => {
    // Clear local storage when the hunt is completed
    if (currentClueIndex >= clues.length) {
      localStorage.removeItem("currentClueIndex");
    }
  }, [currentClueIndex]);

  const [userAnswer, setUserAnswer] = useState(""); // User input
  const [isCorrect, setIsCorrect] = useState(false); // Answer validation state

  const currentClue = clues[currentClueIndex];

  const handleSubmit = () => {
    if (userAnswer.trim().toLowerCase() === currentClue.answer.toLowerCase()) {
      setIsCorrect(true);
    } else {
      alert("Incorrect! Try again.");
    }
  };

  return (
    <Box textAlign="center" p={5}>
      <Heading>Medieval Style Clue</Heading>

      <Text mt={4}>{currentClue.question}</Text>
      {!isCorrect ? (
        <Box mt={6}>
          <Input
            placeholder="Your answer"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            width="300px"
            mx="auto"
          />
          <Button colorScheme="teal" mt={4} onClick={handleSubmit}>
            Submit Answer
          </Button>
        </Box>
      ) : (
        <Box mt={6}>
          <Text color="green.500">Correct! Get ready for the next clue.</Text>
          <Button colorScheme="blue" mt={4} onClick={goToNextClue}>
            Next Clue
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Clue;
