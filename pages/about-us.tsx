import { NextPage } from "next";
import { useState, useCallback, useRef } from "react";
import Image from "next/legacy/image";
import React from "react";
import Footer from "../component/Footer";
import Head from "next/head";

const AboutUs: NextPage = () => {
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
        <title>Funtravia - About Us</title>
        <meta name="description" content="About Us" />
        <link rel="icon" href="/assets/png/logo.png" />
      </Head>
      {/* header */}
      <div
        className="flex flex-col justify-center items-center min-h-[75vh] bg-light-white sticky -mt-[3.7em] md:-mt-[4.7em] -z-10"
        id="header"
      >
        <Image
          src="/assets/png/bg-about.png"
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
            <h1 className="mb-6 text-6xl uppercase">
              Travel never been this easy
            </h1>

            <div className="lg:mt-12">
              <h2 className="text-md lg:text-xl font-normal">
                Enjoying your travelling journey has never been easier and
                spoiling with Funtravia. Everything is done in your hands!
              </h2>
            </div>
          </div>
          <div
            className={`hidden lg:block rounded-full bg-pink hover:bg-red-500 duration-300 ${
              imageLoaded ? "opacity-100" : "opacity-0 -translate-y-10"
            }`}
          >
            <Image
              src="/assets/svg/icon-about.svg"
              alt="header"
              width={300}
              height={300}
              objectPosition="center"
              onLoad={handleImageLoaded}
            />
          </div>
        </div>
      </div>
      {/* end of header */}
      <div className="bg-gradient-to-b from-white via-white to-light-white">
        <div className="w-3/4 m-auto">
          <h1 className="text-3xl text-light-green uppercase text-center my-10">
            <strong>About Funtravia</strong>
          </h1>

          <div className="flex justify-between items-center">
            <div className="w-3/4 text-lg mb-24">
              <p>
                Funtravia adalah sebuah platform digital dari PT. Alfaro Garda
                Digital Nusantara yang bergerak di bidang pariwisata untuk
                memudahkan para Traveller dalam melakukan perjalanan liburan
                baik di dalam negeri hingga ke seluruh dunia.
              </p>
              <br />
              <p>
                Berdiri pada tahun 2019 dengan visi dan misi untuk memberikan
                akses informasi wisata dan memudahkan Traveller dalam menyusun
                Itinerary serta memajukan potensi wisata di Indonesia.
              </p>
              <br />
              <p>
                Untuk mewujudkan misi tersebut, Funtravia memiliki berbagai
                fitur untuk memudahkan para Traveller, Seperti Itinerary,
                mencari informasi tentang lokasi wisata, berbagi momen
                perjalanan dalam bentuk foto dan video, juga terhubung dengan
                Traveller lainnya yang menjadi bagian dari aplikasi Funtravia.
              </p>
            </div>
            <Image
              src="/assets/svg/icon-about.svg"
              alt="header"
              width={300}
              height={300}
              objectPosition="center"
            />
          </div>
        </div>
      </div>
      <div className="text-center my-24 text-xl w-1/2 mx-auto">
        <p>
          Funtravia memberi kemudahan untuk para traveller dalam merencanakan
          perjalanan ke lokasi yang ada di seluruh penjuru dunia.
        </p>
        <br />
        <p>
          Mencari ide perjalan? rekomendasi itinerary? atau mencari teman
          perjalanan?
        </p>
      </div>
      <div className="bg-gradient-to-t from-white via-white to-light-white py-10">
        <h1 className="text-3xl text-light-green uppercase text-center my-10">
          <strong>Meet Our Team</strong>
        </h1>
        <div className="w-3/4 grid md:grid-cols-2 lg:grid-cols-4 gap-3 mx-auto justify-center items-center">
          {image.map((item, index) => (
            <div className="mx-auto" key={index}>
              <Image
                src={item.image}
                alt={item.role}
                width={250}
                height={250}
                objectPosition="center"
                loading="lazy"
              />
              <p className="text-light-green text-xl text-center">
                {item.name}
              </p>
              <p className="text-black text-lg text-center">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
