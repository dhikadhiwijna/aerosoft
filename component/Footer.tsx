import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";
import { animateScroll as Scroll } from "react-scroll";

const Footer = () => {
  return (
    <section className="bg-white" id="footer">
      <div className="flex flex-1 flex-col container mx-auto px-12">
        <div className="flex flex-1 justify-between flex-col md:flex-row items-center border-dashed border-black border-b-[1px]">
          <Image
            src="/assets/funtravialogo.svg"
            alt="Funtravia-Logo"
            width={100}
            height={100}
          />

          <h3 className="text-md text-center lg:text-xl my-5">
            Travel Never Been This Easy
          </h3>
        </div>

        <div
          className="lg:flex lg:flex-1 lg:justify-between lg:mt-12"
          onClick={() => Scroll.scrollToTop()}
        >
          <div className="my-6 flex justify-center items-center gap-2 cursor-pointer">
            <Image
              src="/assets/png/logo.png"
              alt="Funtravia-Logo"
              width={50}
              height={50}
            />
            <h3 className="text-3xl">funtravia</h3>
          </div>

          <div className="flex gap-3 flex-col items-center text-md font-light text-center pb-6">
            <h3 className="font-bold text-lg">Home</h3>
            <Link href="/about-us">
              <button>About Us</button>
            </Link>
            <Link href="privacy-policy">
              <button>Privacy &amp; Policy</button>
            </Link>
            <Link href="contact-us">
              <button>Contact Us</button>
            </Link>
            <Link href="/career">
              <button>Career</button>
            </Link>
          </div>

          <div className="flex flex-col gap-3 items-center lg:items-start text-md font-light text-center lg:w-1/4 lg:text-left pb-6">
            <h2 className="font-bold text-lg">Office</h2>
            <h3 className="">
              Ruko Daan Mogot Jl.Bedugul 1A no.14 Kalideres, Jakarta Barat -
              11840
            </h3>
            <h3>021-54381893</h3>
          </div>

          <div className="flex flex-col items-center lg:items-start text-lg font-bold text-center lg:text-left pb-6">
            <h2>Download Apps</h2>
            <div className="lg:-ml-2">
              <Image
                src="/assets/googleplay.svg"
                alt="Phone Logo"
                width={120}
                height={80}
              />
              <Image
                src="/assets/appleplay.svg"
                alt="Phone Logo"
                width={120}
                height={80}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light-green text-center py-6 px-5 lg:px-32 text-white text-sm lg:text-lg">
        <h3>
          Funtravia by PT. Alfaro Garda Digital Nusantara &copy; 2015-2020. All
          rights reserved.
        </h3>
      </div>
    </section>
  );
};

export default Footer;
