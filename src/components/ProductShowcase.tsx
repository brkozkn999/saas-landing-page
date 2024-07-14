"use client"
import Image from "next/image";
import appScreen from "../assets/images/app-screen.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export const ProductShowcase = () => {
  const appImage = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ['start end', 'end end']
  });

  useEffect(() => {
    scrollYProgress.on('change', (latest) => { })
  }, []);

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] sm:py-24 overflow-hidden">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">
          Intuitive interface
        </h2>
        <div className="max-w-lg mx-auto">
          <p className="text-xl text-center text-white/70 mt-5">
            Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes, one task at a time.
          </p>
        </div>
        <motion.div
          className="flex justify-center items-center mt-14"
          style={{
            opacity: opacity,
            rotateX: rotateX,
            transformPerspective: '800px'
          }}
        >
          <Image
            src={appScreen}
            alt="The product screenshot"
            className="mx-auto"
            ref={appImage}
          />
        </motion.div>
      </div>
    </div>
  );
};