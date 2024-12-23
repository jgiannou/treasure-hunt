import { Box, Button, Heading, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import background from "../../assets/background.webp";

export const LandingAuth = () => {
  const [promoCode, setPromoCode] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handlePromoSubmit = () => {
    const success = login(promoCode);
    if (success) {
      navigate("/riddle");
    } else {
      alert("Λάθος κωδικός πρόσβασης. Παρακαλώ δοκιμάστε ξανά.");
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
      </Box>
    </Box>
  );
};
