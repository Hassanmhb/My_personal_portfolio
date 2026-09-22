import { motion } from "framer-motion";

const ScrollAnimate = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: 45,
        scale: 0.96
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        scale: 1
      }}
      viewport={{ 
        once: true,    // Performance fast aur smooth rakhne ke liye
        amount: 0.2    // Screen par 20% aate hi trigger ho jaye
      }}
      transition={{ 
        duration: 0.65, 
        ease: [0.215, 0.61, 0.355, 1], // Custom cubic-bezier curve for ultra-smooth feel
        delay: delay 
      }}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimate;