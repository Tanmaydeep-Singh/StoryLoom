import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";

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
    y: -10,
    transition: { duration: 0.2 },
  },
};

const Accordion = ({ question, answer }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-3xl mx-auto overflow-hidden border-b border-white/10  mb-4">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center justify-between px-6 py-5 text-left font-medium text-lg sm:text-xl transition-all"
      >
        {question}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>

      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { height: "auto" },
          closed: { height: 0 },
        }}
        className="overflow-hidden px-6"
      >
        <motion.div variants={itemVariants} className="text-left pb-5 text-sm sm:text-base leading-relaxed">
          {answer}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Accordion;
