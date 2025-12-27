import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Customer 1",
    feedback: "Best streetwear ever!",
    rating: 5,
  },
  {
    name: "Customer 2",
    feedback: "Love the fit and style!",
    rating: 5,
  },
  {
    name: "Customer 3",
    feedback: "Super comfortable and trendy.",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 container mx-auto card">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-blue-800 mb-10">
          TESTIMONIALS
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all card duration-300 flex flex-col items-center"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={
                      i < item.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>

              {/* Feedback */}
              <p className="text-gray-700 italic mb-4">“{item.feedback}”</p>

              {/* Name */}
              <h3 className="text-lg font-semibold text-gray-900">
                - {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
