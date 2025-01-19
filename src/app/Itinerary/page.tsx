"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardTitle,
  CardHeader,
} from "@/components/ui/card";
import { MapPin, Clock7, Calendar, LinkIcon } from "lucide-react";

const Itinerary = () => {
  const [showFirstText, setShowFirstText] = useState(true);

  useEffect(() => {
    // Switch to second text after 2 seconds
    const timer = setTimeout(() => setShowFirstText(false), 2000); // 2 seconds delay
    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <main
      className="min-h-screen w-screen flex flex-col items-center justify-center p-4 overflow-hidden"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white opacity-60"></div>

      {/* Animated Title */}
      <div className="relative">
        <AnimatePresence mode="wait">
          {showFirstText ? (
            <motion.h1
              key="first-text"
              className="text-red-500 text-4xl md:text-6xl font-extrabold mb-4 md:mb-8 tracking-wide drop-shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
            >
              You better have said yes on the first try...
            </motion.h1>
          ) : (
            <motion.h1
              key="second-text"
              className="text-red-500 text-4xl md:text-6xl font-extrabold mb-4 md:mb-8 tracking-wide drop-shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              HERE ARE THE ACTIVITIES
            </motion.h1>
          )}
        </AnimatePresence>
      </div>

      {/* Itinerary Cards */}
      <motion.div
        className="w-full md:w-3/4 flex flex-col gap-6 md:gap-4 md:flex-row justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 3.5 }}
      >
        {/* Dinner Card */}
        <Card className="bg-white border-none w-full md:w-1/3 text-primary shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl md:text-3xl font-bold text-red-500">
              Dinner
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg md:text-xl font-medium border-t border-gray-200 pt-4 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Calendar />
              <p className="text-gray-700">Friday 14th</p>
            </div>
            <div className="flex items-center gap-2">
              <Clock7 />
              <p className="text-gray-700">6pm</p>
            </div>
            <div className="flex items-center gap-2">
              <MapPin />
              <p className="text-gray-700">Himizu Japanese Fusion</p>
            </div>
            <div className="flex items-center gap-2">
              <LinkIcon />
              <a
                href="https://www.yelp.com/biz/himizu-modern-japanese-fusion-westminster-2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Yelp page for Himizu Modern Japanese Fusion"
                className="inline-block bg-red-500 text-white font-semibold py-1 px-4 rounded-lg shadow hover:bg-pink-600"
              >
                View on Yelp
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Cafe Card */}
        <Card className="bg-white border-none w-full md:w-1/3 text-primary shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl md:text-3xl font-bold text-red-500">
              Cafe
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg md:text-xl font-medium border-t border-gray-200 pt-4 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Calendar />
              <p className="text-gray-700">Friday 14th</p>
            </div>
            <div className="flex items-center gap-2">
              <Clock7 />
              <p className="text-gray-700">8:30pm</p>
            </div>
            <div className="flex items-center gap-2">
              <MapPin />
              <p className="text-gray-700">Kei Concept Coffee</p>
            </div>
            <div className="flex items-center gap-2">
              <LinkIcon />
              <a
                href="https://www.yelp.com/biz/kei-concept-coffee-westminster"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Yelp page for Kei Concept Coffee"
                className="inline-block bg-red-500 text-white font-semibold py-1 px-4 rounded-lg shadow hover:bg-pink-600"
              >
                View on Yelp
              </a>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </main>
  );
};

export default Itinerary;
