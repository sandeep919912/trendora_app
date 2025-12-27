import { motion } from "framer-motion";

const categories = [
  { img: "/tBg.png", title: "T-Shirts" },
  { img: "/hBg.png", title: "Hoodies" },
  { img: "/jBg.png", title: "Jeans" },
  { img: "/sBg.png", title: "Shoes" },
];

const Category = () => {
  return (
    <div className="h-auto md:h-[50vh] flex flex-col justify-center items-center card">
      <h1 className="text-3xl md:text-4xl font-semibold text-blue-800 mb-3">
        Our Collections
      </h1>

      {/* Wrapper */}
      <div className="w-11/12 mx-auto bg-white md:h-[70%] rounded-md overflow-hidden shadow-lg dark:bg-gray-700 p-4">
        
        {/* DESKTOP: scrolling */}
        <motion.div
          className="hidden md:flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 15,
            repeat: Infinity,
          }}
        >
          {[...categories, ...categories].map((item, index) => (
            <div
              key={index}
              className="min-w-[200px] flex-shrink-0 flex flex-col items-center py-2 "
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[150px] object-contain rounded-md"
              />
              <p className="mt-2 font-semibold">{item.title}</p>
            </div>
          ))}
        </motion.div>

        {/* MOBILE: grid (NO scroll, NO animation) */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {categories.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[120px] object-contain rounded-md"
              />
              <p className="mt-2 font-semibold">{item.title}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Category;
