"use client"
import helixImage from "../assets/images/helix2.png";
import emojiStar from "../assets/images/emojistar.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end']
  });

  useEffect(() => {
    scrollYProgress.on('change', (value) => console.log(value))
  }, []);

  const translateY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <div className="bg-black text-white py-[72px] sm:py-24 text-center overflow-hidden">
      <div className="container max-w-xl relative z-10" ref={containerRef}>

        <motion.div style={{ translateY }}>
          <Image src={helixImage} alt="Helix" className="absolute top-6 left-[calc(100%+36px)]" quality={100} />
        </motion.div>

        <motion.div style={{ translateY }}>
          <Image src={emojiStar} alt="Emoji Star" className="absolute -top-[120px] right-[calc(100%+24px)]" quality={100} />
        </motion.div>

        <h2 className="font-bold text-5xl tracking-tighter sm:text-6xl ">Get Instant Access</h2>
        <p className="text-xl text-white/70 mt-5">Celebrate the joy of accomplishment with an app designed to track yor progress and motivate your efforts.</p>
        <form className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
          <input type="email" placeholder="your@email.com" className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1" />
          <button className="bg-white text-black font-medium rounded-lg h-12 px-5">Get Access!</button>
        </form>
      </div>
    </div>
  );
};
