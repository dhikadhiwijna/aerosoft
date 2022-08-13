import { NextPage } from "next";
import { useState, useCallback, useRef, useContext } from "react";
import Image from "next/image";
import React from "react";
import imageHeader from "../public/assets/headerimage1.jpg";
import styles from "../styles/Home.module.css";
import { ScrollContext } from "../utils/scroll-observer";
import { useParallax } from "react-scroll-parallax";

const MastHead: NextPage = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const scrollY = useContext(ScrollContext);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { ref } = useParallax<HTMLDivElement>({ speed: 10 });

  let progress: number = 0;
  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, (scrollY as any) / elContainer.clientHeight);
  }

  const handleImageLoaded = useCallback(() => setImageLoaded(true), []);

  return (
    // Video & Text Header
    <div
      ref={refContainer}
      className="min-h-screen flex flex-col justify-center items-center bg-light-green sticky -mt-[3.7em] md:-mt-[4.7em] top-0 -z-10"
      style={{ transform: `translateY(-${progress * 20}vh)` }}
      id="header"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src={"/assets/header.webm"} type="video/webm;codecs:vp9" />
      </video>
      {/* <Image
        src="/assets/headerFuntravia.svg"
        alt="header"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      /> */}

      <div
        ref={ref}
        className="relative pt-20 p-5 lg:p-48 font-bold z-10 text-white text-center lg:text-left flex-1 flex flex-col lg:flex-row items-center xl:items-start justify-start top-0 drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]"
      >
        <div
          className={`w-3/4 z-50 duration-300 ${
            imageLoaded ? "opacity-100" : "opacity-0 -translate-y-10"
          }`}
        >
          <h2 className="text-xl xl:text-3xl tracking-tight mb-8 lg:mb-20">
            Travel never been this easy
          </h2>
          <h1 className="mb-6 text-3xl xl:text-5xl uppercase">
            Satu aplikasi untuk kemudahan perjalanan liburanmu
          </h1>

          <div className="lg:mt-24 -ml-5">
            <h2 className="text-md lg:text-xl uppercase font-normal ml-4">
              Download sekarang!
            </h2>
            <Image
              src="/assets/googleplay.svg"
              alt="Phone Logo"
              width={160}
              height={80}
            />
            <Image
              src="/assets/appleplay.svg"
              alt="Phone Logo"
              width={160}
              height={80}
            />
          </div>
        </div>

        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden lg:block absolute top-60 lg:-top-10 md:top-40 right-10 bg-transparent drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] duration-300 ${
            imageLoaded ? "opacity-100" : "opacity-0 -translate-y-10"
          }`}
        >
          <Image
            src="/phone.svg"
            alt="Phone Logo"
            width={600}
            height={900}
            onLoad={handleImageLoaded}
          />
        </a>

        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className={`absolute lg:hidden top-60 left:0 lg:-top-10 md:top-44 right-15 bg-transparent drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] duration-300 ${
            imageLoaded ? "opacity-100" : "opacity-0 -translate-y-10"
          }`}
        >
          <Image
            src="/phone.svg"
            alt="Phone Logo"
            width={400}
            height={620}
            onLoad={handleImageLoaded}
          />
        </a>
      </div>
    </div>
  );
};

export default MastHead;
