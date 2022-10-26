import { NextPage } from "next";
import { useState, useCallback, useRef } from "react";
import Image from "next/image";
import React from "react";
import Footer from "../component/Footer";
import Head from "next/head";

const Career: NextPage = () => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  const handleImageLoaded: () => void = useCallback(
    () => setImageLoaded(true),
    []
  );
  interface team {
    name: string;
    role: string;
    image: string;
  }
  const image: team[] = [
    {
      name: "Rossiwan Lim",
      role: "Director",
      image: "/assets/png/round-image-2.png",
    },
    {
      name: "Albert Wahyu",
      role: "Director",
      image: "/assets/png/round-image-2.png",
    },
    {
      name: "Sthepanie",
      role: "Director",
      image: "/assets/png/round-image-3.png",
    },
    {
      name: "Prasetian",
      role: "Product Manager",
      image: "/assets/png/round-image-2.png",
    },
    {
      name: "Desy Felicia",
      role: "Lead Analyst",
      image: "/assets/png/round-image-3.png",
    },
    {
      name: "Indi Rahmalia",
      role: "Illustrator",
      image: "/assets/png/round-image-3.png",
    },
    {
      name: "Andhika Yudhistira",
      role: "Lead Designer",
      image: "/assets/png/round-image-2.png",
    },
  ];

  return (
    <div>
      <Head>
        <title>Career</title>
        <meta name="description" content="Career" />
        <link rel="icon" href="/assets/png/logo.png" />
      </Head>
      {/* header */}
      <div
        className="flex flex-col justify-center items-center min-h-[75vh] bg-light-white sticky -mt-[3.7em] md:-mt-[4.7em] -z-10"
        id="header"
      >
        <Image
          src="/assets/png/bg-career.png"
          alt="header"
          layout="fill"
          objectFit="contain"
          objectPosition="center"
          onLoad={handleImageLoaded}
        />
        <div className="relative lg:absolute font-bold z-10 w-3/4 text-dark-gray text-center lg:text-left flex-1 flex flex-col lg:flex-row items-center justify-center xl:justify-between lg:top-0 lg:bottom-0">
          <div
            className={`z-50 w-full duration-300 ${
              imageLoaded ? "opacity-100" : "opacity-0 -translate-y-10"
            } justify-center items-center text-center`}
          >
            <h1 className="mb-6 text-7xl">Grow your Career With Us</h1>

            <div className="lg:mt-12">
              <h2 className="text-md lg:text-lg font-normal">
                At Funtravia our mission is to empower the greatest minds to
                create the greatest digital experience
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* end of header */}

      <Footer />
    </div>
  );
};

export default Career;
