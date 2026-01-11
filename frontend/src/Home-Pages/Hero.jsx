import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { ThemeContext } from "../ContextApis/ThemeContext";


const categories = ["T-shirts", "Joggers", "Hoodies", "Sneakers"];
const words = [
  "Elevate Your Streetwear",
  "Trendy. Minimal. Bold.",
  "Live With Trends..",
];

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const { theme, toggleTheme } = useContext(ThemeContext);

  // Simple typewriter effect
  useEffect(() => {
    const word = words[currentWordIndex];
    const typeSpeed = isDeleting ? 50 : 70;

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === word) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        setCurrentText((prev) =>
          isDeleting ? prev.slice(0, -1) : word.slice(0, prev.length + 1)
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <div
      className={`${
        theme === "dark"
          ? "bg-[url('/darkBanner.png')]"
          : "bg-[url('/Banner.png')]"
      } bg-cover bg-center h-[90vh] flex items-center px-4 sm:px-8 md:px-12 lg:px-20 text-white relative`}
    >
      <div className="w-full lg:w-1/2 flex flex-col h-auto lg:h-3/5 justify-between space-y-8 lg:space-y-0">
        {/* Typing headline */}
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-4xl font-bold text-blue-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {currentText}_
        </motion.h1>

        {/* Categories with fade-up animation */}
        <motion.ul
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-black text-lg sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {categories.map((item, index) => (
            <motion.li
              key={index}
              className="cursor-pointer"
              whileHover={{ scale: 1.05, color: "#f97316" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>

        {/* Buttons with hover animation */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-10 py-6 lg:py-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.button
            className="px-6 py-3 bg-orange-600 rounded-lg text-white font-semibold"
            whileHover={{ scale: 1.05, backgroundColor: "#fb923c" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Shop Now
          </motion.button>
          <motion.button
            className="px-6 py-3 bg-orange-600 rounded-lg text-white font-semibold"
            whileHover={{ scale: 1.05, backgroundColor: "#fb923c" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Explore Collection
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
