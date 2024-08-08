import { useState } from "react";
import { motion, Variants } from "framer-motion";

interface AccordionProps {
  question: string;
  answer: string;
}

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.2 },
  },
};

const Accordion = ({ question, answer }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div className="w-full max-w-3xl m-2 mx-auto">
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left m-2 p-4 bg-gray-800 text-white shadow-lg rounded-xl border border-gray-700 transition-all duration-300 text-lg md:text-xl font-semibold"
      >
        {question}
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: {
              height: "auto",
            },
            closed: {
              height: 0,
              transition: { type: "spring", bounce: 0, duration: 0.3 },
            },
          }}
          className="overflow-hidden"
        >
          <motion.div variants={itemVariants} className="pt-2 text-gray-300 text-base font-normal">
            <p>{answer}</p>
          </motion.div>
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

export default Accordion;
