"use client";
import { motion, useMotionValue } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button"

const Hero = () => {
  const size = useMotionValue(1);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [position, setPosition] = useState({ top: "auto", left: "auto" });

  const handleDislikeClick = () => {
    size.set(size.get() * 1.2);
    setDislikeCount(dislikeCount + 1)
    // Move button to a random position after 5 clicks
    if (dislikeCount + 1 >= 5) {
      setPosition({
        top: `${Math.random() * 80 + 10}%`, // Random vertical position (10%-90%)
        left: `${Math.random() * 80 + 10}%`, // Random horizontal position (10%-90%)
      });
    }
  };

  return (
    <section className="h-screen w-screen flex flex-col justify-center items-center bg-background">
      <motion.div
        initial={{ 
          scale: 1, 
          rotate: 0,
        }}
        animate={{ 
          scale: [0, 2, 1],
          rotate: [-10, 10, -8, 8, -4, 4, 0],
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h1 className="text-black text-5xl font-bold mb-6 drop-shadow-xl">
          Will you be my  <span className="text-red-500">Valentine?</span>
        </h1>
      </motion.div>
      <motion.div className="w-1/3 flex justify-around p-20"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{           
          duration: 0.6,
          delay: 1.1,
          ease: "easeInOut", }}
      >
        <motion.div 
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.9 }}
          style={{ scale: size }}
        >
          <Button className="text-3xl p-6">
            ❤️
          </Button>
        </motion.div>
        <motion.div
          style={{
            position: position.top === "auto" ? "relative" : "absolute",
            top: position.top,
            left: position.left,
            transform: position.top !== "auto" ? "translate(-50%, -50%)" : "none", /* Centers the element;dont rlly need it */
          }} 
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.9 }}
        >
          <Button 
            className="rounded-full text-3xl p-6" variant="destructive"
            onClick={handleDislikeClick}
          >
            👎
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
