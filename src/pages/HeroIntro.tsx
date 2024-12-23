import {
  Box,
  Heading,
  Text,
  Image,
  VStack,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { heroes } from "../data/heroes";
import background from "../assets/background.webp";
import prologos from "../assets/prologos.webp";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import maxh from "../assets/maxh.webp";
import prodosia from "../assets/prodosia.webp";
export const HeroIntro = () => {
  const navigate = useNavigate();
  const { selectedHero } = useAuth();
  const [showChapter, setShowChapter] = useState(false);

  // Αν ο χρήστης δεν έχει επιλέξει ήρωα, τον στέλνουμε στη λίστα ηρώων
  if (!selectedHero) {
    navigate("/heroes");
    return null;
  }

  const hero = heroes.find((h) => h.name === selectedHero);

  if (!hero) {
    navigate("/heroes");
    return null;
  }

  return (
    <Box
      backgroundImage={`url(${background})`}
      backgroundSize="cover"
      backgroundPosition="center"
      minHeight="100vh"
      color="white"
      position="relative"
    >
      <Box mx="auto" padding="100px">
        <VStack gap={10} align="center" maxW="4xl" mx="auto">
          {!showChapter ? (
            <>
              <Heading
                fontSize="60px"
                fontFamily="'EB Garamond', serif"
                textShadow="0 0 10px rgba(255, 215, 0, 0.3)"
                textAlign="center"
                margin="0px"
              >
                {hero.name}
              </Heading>

              <Text
                fontSize="30px"
                color="yellow.200"
                fontStyle="italic"
                fontFamily="'EB Garamond', serif"
                textAlign="center"
                textShadow="0 0 10px rgba(255, 215, 0, 0.2)"
                margin="0px"
              >
                {hero.title}
              </Text>

              <Image
                src={hero.fightImage}
                alt={`${hero.name} in battle`}
                objectFit="contain"
                height="400px"
                width="100%"
                filter="drop-shadow(0 0 20px rgba(255, 215, 0, 0.2))"
              />

              <Text
                fontSize="24px"
                fontFamily="'EB Garamond', serif"
                textAlign="center"
                lineHeight="1.8"
                color="gray.100"
                maxW="3xl"
                px={6}
                textShadow="0 0 10px rgba(0, 0, 0, 0.5)"
              >
                {hero.story}
              </Text>

              <Box mt={12}>
                <Heading
                  fontSize="36px"
                  fontFamily="'EB Garamond', serif"
                  color="yellow.200"
                  mb={8}
                  textAlign="center"
                  textShadow="0 0 10px rgba(255, 215, 0, 0.3)"
                >
                  Μυστικές Ικανότητε��
                </Heading>

                <SimpleGrid columns={2} gap={8} width="100%" px={6}>
                  {hero.skills.map((skill) => (
                    <Box
                      key={skill.name}
                      p={6}
                      bg="rgba(255, 215, 0, 0.1)"
                      borderRadius="lg"
                      border="1px solid rgba(255, 215, 0, 0.3)"
                      backdropFilter="blur(10px)"
                      transform="translateZ(0)"
                      transition="all 0.3s"
                      _hover={{
                        bg: "rgba(255, 215, 0, 0.15)",
                        transform: "translateY(-2px)",
                      }}
                    >
                      <Text
                        fontWeight="bold"
                        fontSize="22px"
                        color="yellow.200"
                        fontFamily="'EB Garamond', serif"
                        mb={3}
                        textShadow="0 0 10px rgba(255, 215, 0, 0.3)"
                      >
                        {skill.name}
                      </Text>
                      <Text
                        fontSize="18px"
                        color="gray.100"
                        fontFamily="'EB Garamond', serif"
                        lineHeight="1.6"
                      >
                        {skill.description}
                      </Text>
                    </Box>
                  ))}
                </SimpleGrid>
              </Box>
            </>
          ) : (
            <Box
              opacity={1}
              transition="opacity 0.3s"
              style={{ animationFillMode: "forwards" }}
              background="rgba(1, 50, 32, 0.65)"
            >
              <VStack gap={8} maxW="3xl" mx="auto" padding="15px">
                <Heading
                  fontSize="49px"
                  fontFamily="'EB Garamond', serif"
                  color="yellow.200"
                  textShadow="0 0 10px rgba(255, 215, 0, 0.3)"
                  textAlign="center"
                  mb={8}
                >
                  Κεφάλαιο 1
                </Heading>
                <Text
                  fontSize="30px"
                  fontFamily="'EB Garamond', serif"
                  textAlign="center"
                  lineHeight="1.5"
                  color="gray.100"
                  textShadow="0 0 10px rgba(0, 0, 0, 0.5)"
                  marginBottom="10px"
                >
                  Πρόλογος
                </Text>
                <Text
                  fontSize="24px"
                  fontFamily="'EB Garamond', serif"
                  textAlign="center"
                  lineHeight="1.5"
                  color="gray.100"
                  textShadow="0 0 10px rgba(0, 0, 0, 0.5)"
                  fontWeight="bold"
                  margin="0px"
                  background="rgba(255, 215, 0, 0.1)"
                  borderRadius="10px"
                  border="1px solid rgba(255, 215, 0, 0.3)"
                  backdropFilter="blur(10px)"
                  transform="translateZ(0)"
                  transition="all 0.3s"
                  _hover={{
                    bg: "rgba(255, 215, 0, 0.15)",
                    transform: "translateY(-2px)",
                  }}
                  padding="10px"
                >
                  Η Ελδόρια υπήρξε κάποτε το λαμπρότερο βασίλειο των θνητών. Τα
                  τείχη της αγκάλιαζαν τον ορίζοντα και οι πύργοι της άγγιζαν τα
                  σύννεφα. Όμως, όσο δυνατά έκαιγαν οι φλόγες της δόξας της,
                  τόσο μεγαλύτερη ήταν η σκιά που καραδοκούσε πίσω από τα
                  πα��άτια της.
                  <br />
                  <br /> Πριν από τους βασιλιάδες, πριν την άνοδο της Ελδόρια, η
                  γη ανήκε στον Νόρβαθ, τον Άρχοντα της Ένατης Νύχτας.
                  <br />Ο Νόρβαθ δεν ήταν άνθρωπος.
                  <br /> Ήταν σκοτάδι με σχήμα και θέληση – ένα ον σφυρηλατημένο
                  από τις αρχαίες νύχτες πριν ακόμα ο ήλιος στεριώσει στον
                  ουρανό.
                  <br />
                  <br /> Όταν οι πρώτοι βασιλείς ήρθαν, βρήκαν έναν κόσμο καμένο
                  και στοιχειωμένο. Χρειάστηκαν αιώνες μάχης και θυσίας για να
                  νικήσουν τον Νόρβαθ και να τον ρίξουν στα βάθη της γης.
                  <br /> Η Πέτρα της Φλόγας ήταν το όπλο και η αλυσίδα τους.{" "}
                  <br />
                  Μια δύναμη γεννημένη από το ίδιο το σκοτάδι, σφυρηλατημένη για
                  να φυλακίσει τον Άρχοντα.
                  <br /> Η Πέτρα δεν ήταν σωτηρία, αλλά κατάρα.
                </Text>
                <Image
                  src={prologos}
                  alt={`${hero.name} in battle`}
                  objectFit="cover"
                  height="100%"
                  width="100%"
                  filter="drop-shadow(0 0 20px rgba(255, 215, 0, 0.2))"
                />
                <Text
                  fontSize="30px"
                  fontFamily="'EB Garamond', serif"
                  textAlign="center"
                  lineHeight="1.5"
                  color="gray.100"
                  textShadow="0 0 10px rgba(0, 0, 0, 0.5)"
                  marginBottom="10px"
                >
                  Η Προδοσία του Βασιλιά Άλντεν
                </Text>
                <Text
                  fontSize="24px"
                  fontFamily="'EB Garamond', serif"
                  textAlign="center"
                  lineHeight="1.5"
                  color="gray.100"
                  textShadow="0 0 10px rgba(0, 0, 0, 0.5)"
                  fontWeight="bold"
                  margin="0px"
                  background="rgba(255, 215, 0, 0.1)"
                  borderRadius="10px"
                  border="1px solid rgba(255, 215, 0, 0.3)"
                  backdropFilter="blur(10px)"
                  transform="translateZ(0)"
                  transition="all 0.3s"
                  _hover={{
                    bg: "rgba(255, 215, 0, 0.15)",
                    transform: "translateY(-2px)",
                  }}
                  padding="10px"
                >
                  Χίλια χρόνια μετά, ο Βασιλιάς Άλντεν ο Σοφός κάθισε στον θρόνο
                  της Ελδόρια, φύλακας της Πέτρας. Επί βασιλείας του, το
                  βασίλειο έζησε εποχές δόξας και τρόμου.
                  <br /> Οι εχθροί του εξαφανίζονταν στη φλόγα της Πέτρας, αλλά
                  η δύναμή της άρχισε να εξασθενεί.
                  <br /> Οι προφήτες προειδοποίησαν πως η Ένατη Νύχτα πλησίαζε
                  ξανά.
                  <br /> Ο Νόρβαθ ανασυντασσόταν στις σκιές. “Η Πέτρα καίει
                  ακόμα,” είπε ο Άλντεν. “Ο Νόρβαθ είναι αλυσοδεμένος.”
                  <br /> Αλλά τη νύχτα, ο βασιλιάς έβλεπε σκιές να σέρνονται
                  κατά μήκος των τοίχων.
                  <br /> Άκουγε βήματα έξω από τις πύλες της αυλής – και η φλόγα
                  του θρόνου του τρεμόπαιζε όπως δεν είχε κάνει ποτέ πριν.
                </Text>
                <Image
                  src={prodosia}
                  alt={`${hero.name} in battle`}
                  objectFit="cover"
                  height="100%"
                  width="100%"
                  filter="drop-shadow(0 0 20px rgba(255, 215, 0, 0.2))"
                />
                <Text
                  fontSize="30px"
                  fontFamily="'EB Garamond', serif"
                  textAlign="center"
                  lineHeight="1.5"
                  color="gray.100"
                  textShadow="0 0 10px rgba(0, 0, 0, 0.5)"
                  marginBottom="10px"
                >
                  Η Μάχη της Ένατης Νύχτας
                </Text>
                <Text
                  fontSize="24px"
                  fontFamily="'EB Garamond', serif"
                  textAlign="center"
                  lineHeight="1.5"
                  color="gray.100"
                  textShadow="0 0 10px rgba(0, 0, 0, 0.5)"
                  fontWeight="bold"
                  margin="0px"
                  background="rgba(255, 215, 0, 0.1)"
                  borderRadius="10px"
                  border="1px solid rgba(255, 215, 0, 0.3)"
                  backdropFilter="blur(10px)"
                  transform="translateZ(0)"
                  transition="all 0.3s"
                  _hover={{
                    bg: "rgba(255, 215, 0, 0.15)",
                    transform: "translateY(-2px)",
                  }}
                  padding="10px"
                >
                  Όταν τα Βουνά της Δύσης γέμισαν με μαύρο φως, ο Άλντεν γνώριζε
                  πως η ώρα είχε φτάσει.
                  <br /> Από τις ρωγμές της γης, βγήκαν τα Παιδιά της Στάχτης –
                  δαίμονες σφυρηλατημένοι από το σκοτάδι που είχε μείνει πίσω
                  από τον Νόρβαθ.
                  <br /> Ο βασιλιάς οδήγησε τους καλύτερους πολεμιστές του στις
                  πύλες των βουνών.
                  <br /> Η μάχη που ακολούθησε ήταν άγρια και σύντομη.
                  <br /> Οι φλόγες τύλιξαν τον ουρανό, αλλά κανένα φως δεν έκαψε
                  τη σκιά που πλησίαζε.
                  <br /> Στη μέση της μάχης, η Πέτρα εγκατέλειψε το βασιλιά.
                  <br /> Το φως της έσβησε και χάθηκε μέσα στις ερημιές. Ο
                  Άλντεν δεν επέστρεψε ποτέ.
                </Text>
                <Image
                  src={maxh}
                  alt={`${hero.name} in battle`}
                  objectFit="cover"
                  height="100%"
                  width="100%"
                  filter="drop-shadow(0 0 20px rgba(255, 215, 0, 0.2))"
                />
                <Text
                  fontSize="30px"
                  fontFamily="'EB Garamond', serif"
                  textAlign="center"
                  lineHeight="1.5"
                  color="gray.100"
                  textShadow="0 0 10px rgba(0, 0, 0, 0.5)"
                  marginBottom="10px"
                >
                  Οι εξι Κυνηγοί της Πέτρας
                </Text>
                <Text
                  fontSize="24px"
                  fontFamily="'EB Garamond', serif"
                  textAlign="center"
                  lineHeight="1.5"
                  color="gray.100"
                  textShadow="0 0 10px rgba(0, 0, 0, 0.5)"
                  fontWeight="bold"
                  margin="0px"
                  background="rgba(255, 215, 0, 0.1)"
                  borderRadius="10px"
                  border="1px solid rgba(255, 215, 0, 0.3)"
                  backdropFilter="blur(10px)"
                  transform="translateZ(0)"
                  transition="all 0.3s"
                  _hover={{
                    bg: "rgba(255, 215, 0, 0.15)",
                    transform: "translateY(-2px)",
                  }}
                  padding="10px"
                >
                  Με την Πέτρα χαμένη και την Ελδόρια διχασμένη, οι εξι
                  μοναχικές ψυχές ξεκινούν το κυνήγι.
                  <br /> Κανείς τους δεν είναι αθώος – όλοι έχουν λόγους που
                  τους οδηγούν σε αυτή την αναζήτηση....
                </Text>
              </VStack>
            </Box>
          )}

          {!showChapter && (
            <Button
              size="lg"
              onClick={() => setShowChapter(true)}
              variant="outline"
              marginTop={12}
              fontSize="29px"
              fontFamily="'EB Garamond', serif"
              color="yellow.200"
              borderColor="rgba(255, 215, 0, 0.3)"
              _hover={{
                bg: "rgba(255, 215, 0, 0.1)",
                transform: "translateY(-2px)",
              }}
              transition="all 0.3s"
            >
              Κεφάλαιο 1
            </Button>
          )}
        </VStack>
      </Box>
    </Box>
  );
};
