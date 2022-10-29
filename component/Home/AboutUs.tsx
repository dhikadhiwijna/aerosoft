import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import IntersectObserver from "../../utils/intersection-observer";

const AboutUs: React.FC = () => {
  const intersectionObserver = IntersectObserver;

  const [mouseMoveX, setMouseMoveX] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    let mouseHover = document.addEventListener("mousemove", (e) => {
      const x = e.clientX;
      const y = e.clientY;
      setMouseMoveX({ x, y });
    });

    return () => document.removeEventListener("mousemove", mouseHover as any);
  }, [mouseMoveX]);

  useEffect(() => {
    intersectionObserver();
  }, [intersectionObserver]);

  return (
    <section
      className={`flex flex-col justify-center items-center py-20 bg-gradient-to-b from-white to-light-white text-xl md:text-lg`}
    >
      <div className="px-11 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        <div className="text-center w-60">
          <Image
            src="/assets/aboutheader/abouttrip.svg"
            alt="header"
            width={200}
            height={200}
          />
          <p className="text-lg">
            Create Itinerary for your trip. Travel with buddy.
          </p>
        </div>
        <div className="w-60 text-center">
          <Image
            src="/assets/aboutheader/aboutpost.svg"
            alt="header"
            width={200}
            height={200}
          />
          <p className="text-lg">Share Travel Moment With Your Friends</p>
        </div>
        <div className="w-60 text-center">
          <Image
            src="/assets/aboutheader/aboutchat.svg"
            alt="header"
            width={200}
            height={200}
          />
          <p className="text-lg">
            Chat room. Say hi to all travelers around the world!
          </p>
        </div>
        <div className="w-60 text-center">
          <Image
            src="/assets/aboutheader/aboutarticle.svg"
            alt="header"
            width={200}
            height={200}
          />
          <p className="text-lg">
            Hundreds Article For Your Trip Recommendation
          </p>
        </div>
      </div>

      <div
        id="aboutus"
        className="container p-11 pt-24 flex flex-col lg:flex-row items-center"
      >
        <div className="flex justify-center items-center relative">
          <div
            style={{
              transform: `translate(${mouseMoveX.x / 20}px,${
                mouseMoveX.y / 20
              }px)`,
            }}
          >
            <Image
              src="/assets/aboutphone/aboutphone.svg"
              alt="header"
              width={600}
              height={600}
            />
          </div>
          <div
            style={{
              transform: `translate(-${mouseMoveX.x / 20}px,-${
                mouseMoveX.y / 20
              }px)`,
            }}
            className={`absolute right-0 top-0 w-24 h-12 z-30`}
          >
            <Image
              src="/assets/aboutphone/aboutphonechat.svg"
              alt="header"
              layout="fill"
              objectFit="contain"
            />
          </div>

          <div
            style={{
              transform: `translate(${mouseMoveX.x / 20}px,-${
                mouseMoveX.y / 20
              }px)`,
            }}
            className="absolute right-0 md:right-20 bottom-0 md:bottom-40 w-12 h-12 z-30"
          >
            <Image
              src="/assets/aboutphone/aboutphonemap.svg"
              alt="header"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div
            style={{
              transform: `translate(-${mouseMoveX.x / 20}px,${
                mouseMoveX.y / 20
              }px)`,
            }}
            className="absolute left-10 md:left-20 w-12 h-12 z-30"
          >
            <Image
              src="/assets/aboutphone/aboutphoneshare.svg"
              alt="header"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        <div className="text-justify delay-500 pt-20 lg:pt-0 lg:text-left lg:w-4/5">
          <h1 className="hidden-div text-3xl font-bold text-center lg:text-left">
            Create Your Itinerary
          </h1>
          <p className="hidden-div delay-1000 lg:leading-10 py-12 text-lg">
            Over and over again, I hear people say that they find it hard to
            start planning an itinerary, it is overwhelming and confusing.
            Eventually, after all the fuss, they get there. Often at the start
            of the planning process, we choose a destination with a purpose in
            mind. We might then look at flights and try to decide the best time
            to travel. Then we might look at accomodation, things to do, where
            to eat and the list goes on. What if I told you there is a much
            easier way to get started? In addition, be confident once you have
            finished creating your dream itinerary? Lets make all of these steps
            easier with us, Funtravia.
          </p>
          <div className="md:flex hidden items-center md:items-start justify-center lg:justify-start gap-3 text-lg text-center flex-col md:flex-row ">
            <div className="flex flex-col items-center gap-2 w-32">
              <Image
                src="/assets/aboutphone/icon1.svg"
                alt="header"
                width={70}
                height={70}
              />
              <h5>Easy to Create</h5>
            </div>

            <div className="flex flex-col items-center  gap-2 w-32">
              <Image
                src="/assets/aboutphone/icon2.svg"
                alt="header"
                width={70}
                height={70}
              />
              <h5>Hundreds Destination</h5>
            </div>
            <div className="flex flex-col items-center  gap-2 w-32">
              <Image
                src="/assets/aboutphone/icon3.svg"
                alt="header"
                width={70}
                height={70}
              />
              <h5>Connect &amp; Share</h5>
            </div>
            <div className="flex flex-col items-center  gap-2 w-32">
              <Image
                src="/assets/aboutphone/icon4.svg"
                alt="header"
                width={70}
                height={70}
              />
              <h5>Chat With Travel Buddy</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
