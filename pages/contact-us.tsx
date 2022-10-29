import { NextPage } from "next";
import { useState, useCallback, useRef } from "react";
import Image from "next/legacy/image";
import React from "react";
import Footer from "../component/Footer";
import Head from "next/head";
import ContactUs from "../component/Home/ContactUs";
import { Link as ScrollLink, animateScroll as Scroll } from "react-scroll";

const Contact: NextPage = () => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  const handleImageLoaded: () => void = useCallback(
    () => setImageLoaded(true),
    []
  );

  return (
    <div>
      <Head>
        <title>Funtravia Contact</title>
        <meta name="description" content="Contact Us" />
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
            <h1 className="mb-6 text-6xl uppercase">Hi! Do you need help?</h1>

            <div className="lg:mt-12">
              <h2 className="text-md lg:text-xl font-normal">
                Chat us or send email if you want to ask about our company and
                service.
              </h2>
            </div>
            <button className="py-3 px-8 mt-10 bg-pink hover:bg-light-green duration-300 rounded-md text-white cursor-pointer">
              <ScrollLink
                className="link"
                to="contactus"
                spy={true}
                smooth={true}
                offset={-50}
                duration={300}
              >
                <span>Contact Us</span>
              </ScrollLink>
            </button>
          </div>
          <div
            className={`hidden lg:block duration-300 ${
              imageLoaded ? "opacity-100" : "opacity-0 -translate-y-10"
            }`}
          >
            <Image
              src="/assets/svg/icon-contact.svg"
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
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Contact;
