import { motion, Variants } from "framer-motion";
import { useState } from "react";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

interface LanguageSelectionProps {
  selectedLanguage: string;
  setSelectedLanguage: (language: string) => void;
}

const LanguageSelection = ({ selectedLanguage, setSelectedLanguage } : LanguageSelectionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (short: string) => {
    setSelectedLanguage(short);
    setIsOpen(false); // Close the menu after selecting a language
  };

  const languages = [
    { name: 'English', short: 'EN' },
    { name: 'Spanish', short: 'ES' },
    { name: 'German', short: 'DE' },
    { name: 'Japanese', short: '日本' },
    { name: 'French', short: 'FR' },
    { name: 'Russian', short: 'РУ' },
  ];

  return (
    <>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="relative"
      >
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r w-16 from-blue-400 to-blue-500 text-white px-4 py-2 rounded-full shadow hover:shadow-lg transition duration-300"
        >
          {selectedLanguage}
        </motion.button>
        <motion.ul
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05
              }
            },
            closed: {
              clipPath: "inset(10% 50% 90% 50% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3
              }
            }
          }}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
          className="absolute right-0 mt-2 bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-lg shadow-lg p-4 space-y-2"
        >
          {languages.map((lang) => (
            <motion.li
              key={lang.short}
              variants={itemVariants}
              onClick={() => handleLanguageChange(lang.short)}
              className="hover:text-gray-300 cursor-pointer"
            >
              {lang.short}
            </motion.li>
          ))}
        </motion.ul>
      </motion.nav>
    </>
  );
};

export default LanguageSelection;
