"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardTitle,
  CardHeader,
} from "@/components/ui/card";
import { Calendar, Clock7, LinkIcon } from "lucide-react";

const Itinerary = () => {
  const [textState, setTextState] = useState("first");

  useEffect(() => {
    const timer1 = setTimeout(() => setTextState("second"), 2000);
    const timer2 = setTimeout(() => setTextState("none"), 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <main
      className="min-h-screen w-screen flex flex-col items-center justify-center p-4 overflow-hidden"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="absolute inset-0 bg-white opacity-60"></div>

      <div className="relative">
        <AnimatePresence mode="wait">
          {textState !== "none" && (
            <motion.h1
              key={textState}
              className="text-red-500 text-4xl md:text-6xl font-extrabold mb-4 md:mb-8 tracking-wide drop-shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              {textState === "first"
                ? "You better have said yes on the first try..."
                : "HERE IS WHAT WE ARE DOING!!"}
            </motion.h1>
          )}
        </AnimatePresence>
      </div>

      <motion.div
        className="w-full md:w-3/4 flex flex-col gap-6 md:gap-4 justify-center items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 4.5 }}
      >
        <Card className="bg-white border-none w-full md:w-[80%] lg:w-[70%] h-auto text-primary shadow-lg hover:shadow-xl transform transition-all duration-300 ease-out flex flex-col items-center p-6">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl font-bold text-red-500 text-center">
              123 Farm Valentine&apos;s Nights
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg md:text-xl font-medium border-t border-gray-200 pt-4 flex flex-col gap-6 w-full">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <Image
                src="https://cdn.prod.website-files.com/631aad8b72030df19f607a97/67a1036a9d62f034d7732fd0_123farm-valentines-nights_4729w-p-500.jpg"
                alt="Valentine&apos;s Nights Lights at 123 Farm"
                width={350}
                height={250}
                className="w-full max-w-[350px] md:w-1/2 h-auto rounded-lg shadow-md"
              />
              <Image
                src="https://cdn.prod.website-files.com/631aad8b72030df19f607a97/631e621ef265cf0027cf8b74_lav-nights-2-p-500.jpg"
                alt="Dining at Valentine&apos;s Nights"
                width={350}
                height={250}
                className="w-full max-w-[350px] md:w-1/2 h-auto rounded-lg shadow-md"
              />
            </div>

            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-center mb-4">Event Itinerary</h2>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Calendar />
                  <p className="text-gray-700 font-medium">Sunday, February 16th</p>
                </div>
                <div className="flex items-center gap-2">
                  <Clock7 />
                  <p className="text-gray-700 font-medium">2:00 PM - Pick up</p>
                </div>
                <div className="flex items-center gap-2">
                  <Clock7 />
                  <p className="text-gray-700 font-medium">5:00 PM - Arrival</p>
                </div>
                <p className="text-gray-600">🌿 <strong>Sightseeing and taking pictures!</strong></p>
                <div className="flex items-center gap-2">
                  <Clock7 />
                  <p className="text-gray-700 font-medium">7:00 PM - Valentine&apos;s Dinner</p>
                </div>
                <p className="text-gray-600">🍽️ <strong>Enjoy a pink-themed dinner</strong> at the <strong>Grand Oak Restaurant</strong></p>
                <div className="flex items-center gap-2">
                  <Clock7 />
                  <p className="text-gray-700 font-medium">9:00 PM - Head home</p>
                </div>
                <p className="text-gray-600">💫 <strong>We start heading home.</strong></p>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <a
                href="https://www.123farm.com/lavendernights"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition-all"
              >
                <LinkIcon className="w-5 h-5" />
                Visit 123 Farm
              </a>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </main>
  );
};

export default Itinerary;
