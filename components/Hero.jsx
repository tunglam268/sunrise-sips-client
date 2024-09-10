"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className={`relative xl:bg-cover xl:h-[1098px] py-40 pb-32 xl:py-0`} id="home">
      <div className={`container mx-auto`}>
        {/*text & img*/}
        <div className={`flex items-center xl:h-[960px]`}>
          <div>
            {/*text*/}
            <div className={`w-full xl:max-w-[460px] text-center xl:text-left mt-20`}>
              <motion.h2
                variants={fadeIn("down", 0.2)}
                initial={`hidden`}
                whileInView={`show`}
                viewport={{ once: true, amount: 0.4 }}
                className={`text-brown-heavy mb-2`}
              >
                Welcome to Sunrise Sips <br /> Restaurant
              </motion.h2>
              <motion.p
                variants={fadeIn("down", 0.3)}
                initial={`hidden`}
                whileInView={`show`}
                viewport={{ once: true, amount: 0.4 }}
                className={`text-black mb-12 max-w-lg mx-auto xl:max-w-none xl:mx-0`}
              >
                From the radiant warmth that blankets Australia’s capital city. Canberra, renowned for its abundance of
                sunshine, serves as the perfect backdrop for our indie coffee shop. That is why we chose the name
                “Sunrise Sips”. Whether you’re seeking a quick caffeine fix on your morning commute or a leisurely
                moment to savor the essence of Canberra’s lively culture, Sunrise Sips is here to fuel your day with
                passion and purpose, one sip at a time.
              </motion.p>
              <motion.div
                variants={fadeIn("down", 0.4)}
                initial={`hidden`}
                whileInView={`show`}
                viewport={{ once: true, amount: 0.4 }}
              >
                <Button className={'text-[18px]'} variant={"orange"}>Let's eat</Button>
              </motion.div>
            </div>
          </div>
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial={`hidden`}
            whileInView={`show`}
            viewport={{ once: true, amount: 0.1 }}
            className={`hidden xl:flex xl:absolute xl:top xl:right-[100px]`}
          >
            {/*image*/}
            <Image src={`/food/acai.png`} width={650} height={600} alt="" />
          </motion.div>
        </div>
      </div>
      {/*/!*coffee imgage*!/*/}
      <motion.div
        variants={fadeIn("up", 0.8)}
        initial={`hidden`}
        whileInView={`show`}
        viewport={{ once: true, amount: 0.1 }}
        className={`hidden xl:flex xl:relative xl:-top-36 xl:-left-14`}
      >
        <Image src={`/food/matcha.png`} width={350} height={600} alt="" />
      </motion.div>
    </section>
  );
};

export default Hero;
