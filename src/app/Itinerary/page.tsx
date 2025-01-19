"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardHeader,
} from "@/components/ui/card";
import { MapPin, Clock7, Calendar, LinkIcon } from "lucide-react";


const Itinerary = () => {
  return (
    <main className=" min-h-screen w-screen flex flex-col items-center justify-center p-4"
      style={{ backgroundImage: "url('/bg.png')"}}>
      <div className="absolute inset-0 bg-white opacity-60"></div> {/* Overlay */}
      {/* Animated Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-red-500 text-6xl font-extrabold mb-8 tracking-wide drop-shadow-lg">
          Activity
        </h1>
      </motion.div>

      {/* Itinerary Card */}
      <motion.div
        className="w-full md:w-3/4 flex gap-4 md:flex-row flex-col justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Card className="bg-white border-none w-1/4 text-primary shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out">
          <CardHeader className="pb-4">
            <CardTitle className="text-3xl font-bold text-red-500 ">Dinner</CardTitle>
          </CardHeader>
          <CardContent className="text-xl font-medium border-t border-gray-200 pt-4 flex flex-col gap-3">
            <div className="flex items-center gap-2 ">
              <Calendar/>
              <p className="text-gray-700">
                Friday 14th
              </p>
            </div>
            <div className="flex items-center gap-2 ">
              <Clock7/>
              <p className="text-gray-700">
                6pm
              </p>
            </div>
            <div className="flex items-center gap-2">
              <MapPin/>
              <p className="text-gray-700">
                Himizu Japanese Fusion
              </p>
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
        <Card className="bg-white border-none w-1/4 text-primary shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out">
          <CardHeader className="pb-4">
            <CardTitle className="text-3xl font-bold text-red-500 ">Cafe</CardTitle>
          </CardHeader>
          <CardContent className="text-xl font-medium border-t border-gray-200 pt-4 flex flex-col gap-3">
            <div className="flex items-center gap-2 ">
              <Calendar/>
              <p className="text-gray-700">
                Friday 14th
              </p>
            </div>
            <div className="flex items-center gap-2 ">
              <Clock7/>
              <p className="text-gray-700">
                8:30pm
              </p>
            </div>
            <div className="flex items-center gap-2">
              <MapPin/>
              <p className="text-gray-700">
                Kei Concept Coffee
              </p>
            </div>
            <div className="flex items-center gap-2">
              <LinkIcon/>
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
      </motion.div>
    </main>
  );
};

export default Itinerary;
