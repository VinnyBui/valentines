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
import { MapPin, Clock7, Calendar, Link } from "lucide-react";

const Itinerary = () => {
  return (
    <main className=" min-h-screen w-screen flex flex-col items-center justify-center p-4">
      {/* Animated Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-white text-6xl font-extrabold mb-8 tracking-wide drop-shadow-lg">
          Activity
        </h1>
      </motion.div>

      {/* Itinerary Card */}
      <motion.div
        className="w-full md:w-1/4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Card className="bg-white border-none text-primary shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out">
          <CardHeader className="pb-4">
            <CardTitle className="text-3xl font-bold">Dinner</CardTitle>
          </CardHeader>
          <CardContent className="text-xl font-medium border-t border-gray-200 pt-4 flex flex-col gap-3">
            <div className="flex items-center gap-2 ">
              <Calendar/>
              <p>
                Friday 14th
              </p>
            </div>
            <div className="flex items-center gap-2 ">
              <Clock7/>
              <p>
                6pm
              </p>
            </div>
            <div className="flex items-center gap-2">
              <MapPin/>
              <p>
                Himizu Modern Japanese Fusion
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Link/>
              <a
                href="https://www.yelp.com/biz/himizu-modern-japanese-fusion-westminster-2"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Yelp Link
              </a>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </main>
  );
};

export default Itinerary;
