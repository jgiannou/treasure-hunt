import aranImage from "../assets/aran-knight.webp";
import calenImage from "../assets/calen.webp";
import drakosImage from "../assets/drakos.webp";
import morganImage from "../assets/morgan.webp";
import aelinImage from "../assets/aelin.webp";
import lyraImage from "../assets/lyra.webp";
import aranFightImage from "../assets/aran-fight.webp";
import calenFightImage from "../assets/kalen-fight.webp";
import drakosFightImage from "../assets/drakos-fight.webp";
import morganFightImage from "../assets/morgan-fight.webp";
import aelinFightImage from "../assets/aelin-fight.webp";
import lyraFightImage from "../assets/lura-fight.webp";
export const heroes = [
  {
    name: "Άραν",
    title: "Ο Εξόριστος Ιππότης",
    story:
      "Ο Άραν στεκόταν στο κατώφλι της μεγάλης πόρτας που οδηγούσε στα Βουνά της Δύσης. Ο αέρας μύριζε στάχτη, όπως τη νύχτα που όλα άλλαξαν. Είχε ορκιστεί πως δε θα επέστρεφε ποτέ, αλλά το φάντασμα του βασιλιά Άλντεν ψιθύριζε ακόμα στ' αυτιά του. Η Πέτρα έπρεπε να βρεθεί, όχι για τη δόξα – αλλά για την τιμή του.",
    image: aranImage,
    fightImage: aranFightImage,
    skills: [
      {
        name: "Λεπίδα της Τιμής",
        description: "Ισχυρή επίθεση που αγνοεί την πανοπλία του εχθρού.",
      },
      {
        name: "Αντεπίθεση",
        description:
          "Ο Άραν αποκρούει τις επιθέσεις και χτυπά τον εχθρό με δύναμη.",
      },
      {
        name: "Θωράκιση Μάχης",
        description: "Αυξάνει προσωρινά την άμυνά του, μειώνοντας τη ζημιά.",
      },
      {
        name: "Ορμή Ιππότη",
        description: "Ορμά μπροστά, ακινητοποιώντας τους εχθρούς του.",
      },
    ],
  },
  {
    name: "Κάλεν",
    title: "Ο Μοναχός του Φωτός",
    story:
      "Ο Κάλεν προσευχήθηκε στο φως του πρωινού ήλιου. Η φλόγα στον ναό τρεμόπαιξε – σημάδι πως ο Νόρβαθ πλησίαζε. Ήξερε πως δε θα έβρισκε την Πέτρα μόνο με πίστη. Έπρεπε να βγει στον κόσμο και να τη διεκδικήσει με τα ίδια του τα χέρια.",
    image: calenImage,
    fightImage: calenFightImage,
    skills: [
      {
        name: "Θεραπεία Φωτός",
        description: "Ανανεώνει τη ζωή των συμμάχων του.",
      },
      {
        name: "Ασπίδα Λαμπρότητας",
        description: "Προστατευτικό πεδίο που μπλοκάρει επιθέσεις.",
      },
      {
        name: "Φλεγόμενο Χτύπημα",
        description: "Επιτίθεται με το φως, προκαλώντας ζημιά στους εχθρούς.",
      },
      {
        name: "Επίκληση του Ήλιου",
        description: "Απελευθερώνει έκρηξη φωτός, τυφλώνοντας τους εχθρούς.",
      },
    ],
  },
  {
    name: "Ντράκος",
    title: "Ο Κυνηγός Κεφαλών",
    story:
      "Ο Ντράκος παρακολουθούσε από τις σκιές, κρατώντας το τόξο του έτοιμο. Ο εχθρός δε θα έβλεπε το βέλος που θα ερχόταν μέσα από το σκοτάδι, μέχρι να είναι πολύ αργά.",
    image: drakosImage,
    fightImage: drakosFightImage,
    skills: [
      {
        name: "Μοιραίο Βέλος",
        description: "Στοχευμένη βολή που προκαλεί κρίσιμη ζημιά.",
      },
      {
        name: "Απόκρυψη Σκιών",
        description: "Γίνεται αόρατος, αυξάνοντας την αποφυγή του.",
      },
      {
        name: "Φόλα Κυνηγού",
        description: "Τοποθετεί παγίδες στο έδαφος.",
      },
      {
        name: "Άλμα Κυνηγού",
        description: "Οπισθοχωρεί γρήγορα για να αναπροσαρμοστεί.",
      },
    ],
  },
  {
    name: "Λύρα",
    title: "Η Κλέφτρα των Σκιών",
    story:
      "Η Λύρα κινήθηκε σιωπηλά μέσα στα σοκάκια της πόλης. Το χρυσό νόμισμα στην ζώνη της έλαμπε απαλά στο φως του φεγγαριού, υπενθυμίζοντας της το στόχο της – να βρει την Πέτρα της Φλόγας, και να αποκτήσει τη δύναμη που αναζητούσε μια ζωή.",
    image: lyraImage,
    fightImage: lyraFightImage,
    skills: [
      {
        name: "Αόρατο Βήμα",
        description: "Εξαφανίζεται από το πεδίο της μάχης προσωρινά.",
      },
      {
        name: "Μαχαιριά Σκιών",
        description: "Χτύπημα που παρακάμπτει την άμυνα του εχθρού.",
      },
      {
        name: "Κλέφτικη Ευελιξία",
        description: "Αυξάνει την ταχύτητα και την αποφυγή της.",
      },
      {
        name: "Ξαφνική Επίθεση",
        description: "Εξορμά από το σκοτάδι, προκαλώντας διπλή ζημιά.",
      },
    ],
  },

  {
    name: "Μόργκαν",
    title: "Ο Κυνηγός των Δαιμόνων",
    story:
      "Ο Μόργκαν περπάτησε μέσα από τα αποκαΐδια του χωριού του, το σπαθί του έλαμπε με τη δύναμη των ψυχών των δαιμόνων που είχε εξοντώσει. Δεν υπήρχε χώρος για έλεος, μόνο εκδίκηση.",
    image: morganImage,
    fightImage: morganFightImage,
    skills: [
      {
        name: "Λεπίδα των Ψυχών",
        description: "Απορροφά τη δύναμη των εχθρών που σκοτώνει.",
      },
      {
        name: "Αποφυγή Σκιών",
        description: "Μειώνει τη ζημιά για περιορισμένο χρόνο.",
      },
      {
        name: "Θυσιαστική Οργή",
        description: "Αυξάνει τη ζημιά εις βάρος της υγείας του.",
      },
      {
        name: "Φωνή των Δαιμόνων",
        description: "Φωνάζει, εκφοβίζοντας και αποδυναμώνοντας τους εχθρούς.",
      },
    ],
  },
  {
    name: "Αέλιν",
    title: "Η Ξωτικιά Μάγισσα",
    story:
      "Η Αέλιν περπάτησε ήρεμα ανάμεσα στα αρχαία δέντρα του δάσους. Το ραβδί της αντηχούσε με μαγική ενέργεια, καθώς παρακολουθούσε τις σκιές να κινούνται στις αντανακλάσεις των λιμνών.",
    image: aelinImage,
    fightImage: aelinFightImage,
    skills: [
      {
        name: "Καθρέφτης Σκιών",
        description: "Δημιουργεί κλώνους της μέσω αντανάκλασης.",
      },
      {
        name: "Ξόρκι Αντανάκλασης",
        description: "Επιστρέφει επιθέσεις πίσω στον εχθρό.",
      },
      {
        name: "Αρχαία Ορατότητα",
        description: "Βλέπει αόρατους εχθρούς και κρυμμένες παρουσίες.",
      },
      {
        name: "Μαγικό Ραβδί των Αμπέλων",
        description: "Το ραβδί της απορροφά και ενισχύει τη μαγεία.",
      },
    ],
  },
];
