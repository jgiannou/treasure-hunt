import {
  Box,
  Heading,
  Text,
  Image,
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";
import { Button } from "../components/ui/button";
import {
  DialogRoot,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogCloseTrigger,
  DialogBackdrop,
} from "../components/ui/dialog";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { heroes } from "../data/heroes";
import background from "../assets/background.webp";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export const HeroDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { heroId } = useParams();
  const navigate = useNavigate();
  const { setHeroSelected } = useAuth();

  const hero = heroes.find(
    (h) => h.name.toLowerCase() === heroId?.toLowerCase()
  );

  if (!hero) {
    return <Navigate to="/heroes" />;
  }

  const handleHeroConfirm = () => {
    setHeroSelected(hero.name);
    setIsOpen(false);
    navigate("/clue");
  };

  return (
    <Box
      backgroundImage={`url(${background})`}
      backgroundSize="cover"
      backgroundPosition="center"
      minHeight="100vh"
      color="white"
      position="relative"
    >
      <Button
        position="absolute"
        top={6}
        left={6}
        onClick={() => navigate("/heroes")}
        variant="ghost"
        size="lg"
        color="yellow.200"
        _hover={{
          bg: "rgba(255, 215, 0, 0.1)",
          transform: "translateX(-4px)",
        }}
        transition="all 0.2s"
        display="flex"
        alignItems="center"
        gap={2}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          width="24"
          height="24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
        Πίσω στους Ήρωες
      </Button>
      <Box mx="auto" padding="100px">
        <VStack gap={8} align="center" background="rgba(0, 60, 40, 0.6)">
          <Heading
            fontSize="50px"
            fontFamily="'EB Garamond', serif"
            textShadow="0 0 10px rgba(255, 215, 0, 0.3)"
            margin="0"
          >
            {hero.name}
          </Heading>
          <Text
            fontSize="25px"
            color="yellow.200"
            fontStyle="italic"
            fontFamily="'EB Garamond', serif"
            margin="0"
          >
            {hero.title}
          </Text>

          <Image
            src={hero.fightImage}
            alt={`${hero.name} in battle`}
            objectFit="contain"
            height="300px"
            width="100%"
          />

          <Text
            fontSize="20px"
            fontFamily="'EB Garamond', serif"
            textAlign="center"
            width="80%"
          >
            {hero.story}
          </Text>

          <Heading fontFamily="'EB Garamond', serif" color="yellow.200" mt={6}>
            Ικανότητες
          </Heading>

          <SimpleGrid columns={2} gap={4}>
            {hero.skills.map((skill) => (
              <Box
                key={skill.name}
                p={4}
                bg="rgba(255, 215, 0, 0.1)"
                borderRadius="md"
                border="1px solid rgba(255, 215, 0, 0.3)"
              >
                <Text
                  fontWeight="bold"
                  color="yellow.200"
                  fontFamily="'EB Garamond', serif"
                >
                  {skill.name}
                </Text>
                <Text
                  fontSize="sm"
                  width="sm"
                  mt={2}
                  fontFamily="'EB Garamond', serif"
                >
                  {skill.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>

          <Button
            size="lg"
            onClick={() => setIsOpen(true)}
            variant="outline"
            margin={8}
          >
            Επέλεξε τον {hero.name}
          </Button>

          <DialogRoot
            open={isOpen}
            onOpenChange={(details) => setIsOpen(details.open)}
          >
            <DialogBackdrop
              style={{
                position: "fixed",
                inset: 0,
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                backdropFilter: "blur(4px)",
                zIndex: 4999,
              }}
            />
            <DialogContent
              style={{
                position: "fixed",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 5000,
              }}
            >
              <Box
                bg="rgba(0, 20, 20, 0.95)"
                borderRadius="lg"
                border="2px solid rgba(255, 215, 0, 0.5)"
                boxShadow="0 0 20px rgba(255, 215, 0, 0.2)"
                position="relative"
                backdropFilter="blur(10px)"
              >
                <Box position="absolute" left={"4px"} top={"4px"}>
                  <DialogCloseTrigger />
                </Box>
                <DialogHeader position="relative" mb={8}>
                  <DialogTitle
                    fontSize="3xl"
                    fontWeight="bold"
                    color="yellow.200"
                    fontFamily="'EB Garamond', serif"
                    textAlign="center"
                    textShadow="0 0 10px rgba(255, 215, 0, 0.3)"
                    padding="4px"
                  >
                    Επιβεβαίωση Επιλογής Ήρωα
                  </DialogTitle>
                </DialogHeader>
                <DialogDescription
                  fontSize="xl"
                  mb={10}
                  color="gray.100"
                  fontFamily="'EB Garamond', serif"
                  textAlign="center"
                  lineHeight="tall"
                  padding="4px"
                >
                  Είσαι σίγουρος ότι θέλεις να επιλέξεις τον{" "}
                  <Text as="span" color="yellow.200" fontWeight="bold">
                    {hero.name}
                  </Text>{" "}
                  για την αποστολή σου;
                </DialogDescription>
                <DialogFooter
                  display="flex"
                  justifyContent="center"
                  gap={8}
                  mt={10}
                  mb={2}
                  padding="4px"
                >
                  <Button
                    variant="ghost"
                    onClick={() => setIsOpen(false)}
                    _hover={{
                      bg: "rgba(255, 255, 255, 0.1)",
                    }}
                    size="lg"
                    padding="4px"
                  >
                    Άκυρο
                  </Button>
                  <Button
                    onClick={handleHeroConfirm}
                    bg="rgba(255, 215, 0, 0.2)"
                    border="1px solid rgba(255, 215, 0, 0.5)"
                    color="yellow.200"
                    _hover={{
                      bg: "rgba(255, 215, 0, 0.3)",
                    }}
                    size="lg"
                    padding="4px"
                  >
                    Επιβεβαίωση
                  </Button>
                </DialogFooter>
              </Box>
            </DialogContent>
          </DialogRoot>
        </VStack>
      </Box>
    </Box>
  );
};
