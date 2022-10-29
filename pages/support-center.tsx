import { NextPage } from "next";
import { useState, useCallback } from "react";
import Image from "next/legacy/image";
import React from "react";
import Footer from "../component/Footer";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faSearch } from "@fortawesome/free-solid-svg-icons";

const Support: NextPage = () => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  const handleImageLoaded: () => void = useCallback(
    () => setImageLoaded(true),
    []
  );

  return (
    <div>
      <Head>
        <title>Funtravia Support Center</title>
        <meta name="description" content="Support Center" />
        <link rel="icon" href="/assets/png/logo.png" />
      </Head>
      {/* header */}
      <div
        className="flex flex-col justify-center items-center min-h-[75vh] bg-light-white sticky -mt-[3.7em] md:-mt-[4.7em]"
        id="header"
      >
        <Image
          src="/assets/png/bg-contact.png"
          alt="header"
          layout="fill"
          objectFit="contain"
          objectPosition="center"
          onLoad={handleImageLoaded}
        />
        <div className="relative lg:absolute font-bold z-10 w-3/4 text-dark-gray text-center lg:text-left flex-1 flex flex-col lg:flex-row items-center justify-center xl:justify-between lg:top-0 lg:bottom-0">
          <div
            className={`z-50 w-4/6 duration-300 ${
              imageLoaded ? "opacity-100" : "opacity-0 -translate-y-10"
            }`}
          >
            <h1 className="mb-6 text-6xl">Funtravia Support Center</h1>

            <div className="flex bg-white w-3/5 px-4 mt-10 rounded-md drop-shadow-[0_5px_3px_rgba(0,0,0,0.1)] focus:border focus:border-light-green hover:border-light-green duration-300">
              <FontAwesomeIcon icon={faSearch} width={20} className="mr-3" />

              <input
                type="text"
                id="search"
                placeholder="Type your topic here (e.g. Itinerary)"
                className="py-3 my-2 border-2 font-normal border-white w-full focus:outline-none"
              />
            </div>
          </div>
          <div
            className={`hidden lg:block duration-300 ${
              imageLoaded ? "opacity-100" : "opacity-0 -translate-y-10"
            }`}
          >
            <Image
              src="/assets/svg/icon-support-center.svg"
              alt="header"
              width={600}
              height={600}
              objectPosition="center"
              onLoad={handleImageLoaded}
            />
          </div>
        </div>
      </div>
      {/* end of header */}

      <Footer />
    </div>
  );
};

export default Support;
