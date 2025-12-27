import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen dark:bg-gray-800 text-white px-6 md:px-20 py-16">
      
      {/* 🔥 HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About <span className="text-yellow-400">Trendora</span>
        </h1>
        <p className="dark:text-gray-400 max-w-2xl mx-auto">
          Wear Your Trend. Live Your Style.
        </p>
      </motion.div>

      {/* 🧠 WHO WE ARE */}
      <motion.section
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <h2 className="text-2xl font-semibold mb-4 ">Who We Are</h2>
        <p className="dark:text-gray-300 leading-relaxed max-w-4xl ">
          Trendora is a modern Indian streetwear brand made for the new
          generation that lives bold, thinks differently, and dresses with
          confidence. We blend urban culture, comfort, and premium quality to
          create everyday street fashion that feels powerful and stylish.
        </p>
      </motion.section>

      {/* 🎯 MISSION & VISION */}
      <div className="grid md:grid-cols-2 gap-10 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="dark:bg-zinc-900 p-6 rounded-xl shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-3 text-yellow-400">
            Our Mission
          </h3>
          <p className="dark:text-gray-300">
            To make premium streetwear accessible and affordable for youth
            across India while maintaining world-class quality and trend-driven
            designs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="dark:bg-zinc-900 p-6 rounded-xl shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-3 text-yellow-400">
            Our Vision
          </h3>
          <p className="dark:text-gray-300">
            To become India’s most trusted youth streetwear brand where style,
            comfort, and affordability meet.
          </p>
        </motion.div>
      </div>

      {/* 🧵 PRODUCTS */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-14"
      >
        <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
          <li>✅ Streetwear T-Shirts</li>
          <li>✅ Oversized Hoodies</li>
          <li>✅ Cargo & Utility Pants</li>
          <li>✅ Sneakers & Footwear</li>
          <li>✅ Limited Edition Drops</li>
          <li>✅ Premium Urban Fashion</li>
        </ul>
      </motion.section>

      {/* 🤝 OUR PROMISE */}
      <motion.section
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-14 "
      >
        <h2 className="text-2xl font-semibold mb-4">Our Promise</h2>
        <p className="dark:text-gray-300 max-w-4xl">
          We promise quality you can trust, comfort you can feel, and style that
          speaks confidence. At Trendora, customer satisfaction is not optional
          — it’s our responsibility.
        </p>
      </motion.section>

      {/* 👤 FOUNDER NOTE */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="dark:bg-zinc-900 p-8 rounded-xl shadow-lg mb-14"
      >
        <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
          Founder’s Note
        </h2>
        <p className="dark:text-gray-300 leading-relaxed">
          Trendora was founded with one clear belief — Indian youth deserves
          world-class streetwear without paying international prices. This brand
          is built with passion for fashion, technology, and youth culture.
          Every design, every feature, and every update reflects this vision.
        </p>
      </motion.section>

      {/* 🌍 COMMUNITY */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-2xl font-semibold mb-3">
          Join the <span className="text-yellow-400">Trendora</span> Community
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Trendora is more than just a store — it’s a community of creators,
          hustlers, and trend-setters. Welcome to the future of Indian
          streetwear - <span className="text-blue-500 font-semibold">Sandeep Pandit</span>
        </p>
        <p className="mt-4 text-yellow-400 font-semibold">
          Wear Your Trend.
        </p>
      </motion.section>

    </div>
  );
};

export default About;
