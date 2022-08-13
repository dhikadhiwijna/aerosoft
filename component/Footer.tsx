import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <section className="bg-white" id="footer">
      <div className="flex flex-1 flex-col container mx-auto px-12">
        <div className="flex flex-1 justify-between items-center border-dashed border-black border-b-[1px]">
          <Image
            src="/assets/funtravialogo.svg"
            alt="Funtravia-Logo"
            width={100}
            height={100}
          />

          <h3 className="text-xl">Travel Never Been This Easy</h3>
        </div>

        <div className="lg:flex lg:flex-1 lg:justify-between lg:mt-12">
          <div className="my-6 flex justify-center items-center gap-2">
            <Image
              src="/vercelblack.svg"
              alt="Funtravia-Logo"
              width={50}
              height={50}
            />
            <h3 className="text-3xl">funtravia</h3>
          </div>

          <div className="flex lg:gap-3 flex-col items-center text-md font-light text-center pb-6">
            <h3 className="font-bold text-lg">Home</h3>
            <h3>About Us</h3>
            <h3>Privacy Policy</h3>
            <h3>Contact Us</h3>
            <h3>Career</h3>
          </div>

          <div className="flex flex-col lg:gap-3 items-center lg:items-start text-md font-light text-center lg:w-1/4 lg:text-left pb-6">
            <h2 className="font-bold text-lg">Office</h2>
            <h3 className="">
              Ruko Daan Mogot Jl.Bedugul 1A no.14 Kalideres, Jakarta Barat -
              11840
            </h3>
            <h3>021-54381893</h3>
          </div>

          <div className="flex flex-col items-center text-lg font-bold text-center lg:text-left pb-6">
            <h2>Download Apps</h2>
            <div>
              <Image
                src="/assets/googleplay.svg"
                alt="Phone Logo"
                width={140}
                height={80}
              />
              <Image
                src="/assets/appleplay.svg"
                alt="Phone Logo"
                width={140}
                height={80}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light-green text-center py-6 px-32 text-white text-lg">
        <h3>
          Funtravia by PT. Alfaro Garda Digital Nusantara &copy; 2015-2020. All
          rights reserved.
        </h3>
      </div>
    </section>
  );
};

export default Footer;
