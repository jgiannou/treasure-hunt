import { motion } from "framer-motion";
import {
  Card,
  Image,
  Text,
  Heading,
  SimpleGrid,
  Box,
  Badge,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface Skill {
  name: string;
  description: string;
}

interface HeroProps {
  name: string;
  title: string;
  story: string;
  image: string;
  skills: Skill[];
  isAvailable?: boolean;
}

const HeroCard = ({
  name,
  title,
  story,
  image,
  skills,
  isAvailable = true,
}: HeroProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!isAvailable) return;
    navigate(`/hero/${name.toLowerCase()}`);
  };

  return (
    <motion.div
      whileHover={{ y: isAvailable ? -8 : 0 }}
      transition={{ duration: 0.3 }}
      style={{
        height: "100%",
        cursor: isAvailable ? "pointer" : "not-allowed",
        filter: !isAvailable ? "grayscale(0.7)" : "none",
        opacity: !isAvailable ? 0.8 : 1,
      }}
      onClick={handleClick}
    >
      <Card.Root
        maxW="sm"
        height="100%"
        color="white"
        borderRadius="20px"
        overflow="hidden"
        boxShadow="0 0 20px rgba(255, 215, 0, 0.2)"
        border="1px solid rgba(255, 215, 0, 0.3)"
        background="rgba(1, 50, 32, 0.65)"
        padding={6}
        position="relative"
      >
        {!isAvailable && (
          <Badge
            position="absolute"
            top={4}
            right={4}
            colorScheme="red"
            fontSize="md"
            px={3}
            py={1}
            borderRadius="full"
            bg="rgba(200, 0, 0, 0.2)"
            border="1px solid rgba(255, 0, 0, 0.3)"
            fontFamily="'EB Garamond', serif"
          >
            Μη Διαθέσιμος
          </Badge>
        )}
        <Card.Body
          p={6}
          gap={6}
          display="flex"
          justifyContent="space-between"
          flexDirection="column"
          height="100%"
        >
          <Card.Title
            fontFamily="'EB Garamond', serif"
            fontSize="25px"
            fontWeight="bold"
            margin={0}
          >
            {name}
          </Card.Title>
          <Text
            fontSize="22px"
            color="yellow.200"
            fontStyle="italic"
            margin={0}
            fontFamily="'EB Garamond', serif"
          >
            {title}
          </Text>
          <Image
            src={image}
            alt={name}
            height="300px"
            width="100%"
            objectFit="contain"
            borderRadius="md"
          />
          <Card.Description
            fontSize="sm"
            color="gray.300"
            lineHeight="1.6"
            fontFamily="'EB Garamond', serif"
            mt={0}
            width="100%"
          >
            {story}
          </Card.Description>
          <Box>
            <Heading
              size="sm"
              fontFamily="'EB Garamond', serif"
              color="yellow.200"
              borderBottom="1px solid rgba(255, 215, 0, 0.3)"
              mb={2}
            >
              Ικανότητες
            </Heading>
            <SimpleGrid columns={2} gap={2}>
              {skills.map((skill) => (
                <div key={skill.description}>
                  <Text
                    fontFamily="'EB Garamond', serif"
                    fontSize="17px"
                    key={skill.description}
                    fontWeight="bold"
                    padding={1}
                    margin={0}
                    bg="rgba(255, 215, 0, 0.1)"
                    color="yellow.200"
                    title={skill.description}
                    cursor="help"
                    _hover={{
                      bg: "rgba(255, 215, 0, 0.2)",
                    }}
                  >
                    {skill.name}:
                  </Text>
                  <Text
                    fontFamily="'EB Garamond', serif"
                    fontSize="15px"
                    fontStyle="italic"
                    padding={1}
                    margin={0}
                  >
                    {skill.description}
                  </Text>
                </div>
              ))}
            </SimpleGrid>
          </Box>
        </Card.Body>
      </Card.Root>
    </motion.div>
  );
};

export default HeroCard;
