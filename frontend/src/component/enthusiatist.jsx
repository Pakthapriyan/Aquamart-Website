import React from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Meera K",
    avatar: "https://i.pravatar.cc/100?img=5",
    rating: 5,
    text: "I had so many doubts as a beginner, but the guides helped a lot. Excellent customer support too!",
  },
  {
    name: "Ananya S",
    avatar: "https://i.pravatar.cc/100?img=10",
    rating: 5,
    text: "The starter kit made my first aquarium so easy. My betta is thriving, and the setup looks amazing!",
  },
  {
    name: "David R",
    avatar: "https://i.pravatar.cc/100?img=15",
    rating: 5,
    text: "The luxury decor collection turned my tank into a centerpiece. A little pricey, but worth every penny.",
  },
];

export default function Testimonials() {
  return (
    <section
      className="bg-white py-16 px-6 text-center relative overflow-hidden"
      aria-label="Customer testimonials"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-2">
        Loved by Fish Enthusiasts Everywhere
      </h2>
      <p className="text-gray-600 mb-4">
        Building trust through satisfied customers and their thriving aquariums
        daily.
      </p>
      <a
        href="#"
        className="text-blue-600 hover:underline text-sm font-medium mb-12 inline-block"
      >
        View All Reviews
      </a>

      {/* Curved line */}
      <div className="relative w-full flex justify-center">
        <svg
          className="absolute top-0 left-0 w-full h-24"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
        >
          <path
            d="M0,5 Q50,15 100,5"
            stroke="#ccc"
            strokeWidth="0.5"
            fill="transparent"
          />
        </svg>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-28">
          {reviews.map((review, i) => (
            <blockquote
              key={i}
              className="relative bg-white shadow-lg rounded-lg p-6 w-72 mx-auto transition duration-300"
            >
              {/* Pin */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-blue-900 rounded-full"></div>
                  <div className="w-1 h-8 bg-blue-900 rounded-sm"></div>
                </div>
              </div>

              {/* Avatar & Name */}
              <div className="flex items-center gap-2 mb-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full"
                />
                <h4 className="font-semibold">{review.name}</h4>
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-3">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={18}
                    fill={idx < review.rating ? "#facc15" : "none"}
                    stroke="#facc15"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-700 text-sm italic">"{review.text}"</p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
