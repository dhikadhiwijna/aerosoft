import Image from "next/legacy/image";
import React from "react";
import { Tile, TileBackground, TileContent, TileWrapper } from "./Tile";
import { WorkBackground, WorkContainer, WorkLeft, WorkRight } from "./Work";

const Works = () => {
  return (
    <TileWrapper numOfPages={4}>
      {/* <TileBackground>
        <WorkBackground />
      </TileBackground> */}
      <TileContent>
        <Tile
          page={0}
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <div className="text-2xl md:text-3xl font-semibold mb-5 mt-12 md:mt-0">
                  Itinerary
                </div>
                <div className="text-sm md:text-2xl">
                  Create Itineray for your trip. Travel with buddy
                </div>
              </WorkLeft>
              <WorkRight progress={progress} page={0}>
                <Image
                  src="/assets/showcase/itinerary.svg"
                  alt="itinerary"
                  width={120}
                  height={140}
                  layout="responsive"
                />
              </WorkRight>
            </WorkContainer>
          )}
        ></Tile>
        <Tile
          page={1}
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <div className="text-2xl md:text-3xl font-semibold mb-5 mt-12 md:mt-0">
                  FunFeed
                </div>
                <div className="text-sm md:text-2xl">
                  Share Travel Moment With Your Friends
                </div>
              </WorkLeft>
              <WorkRight progress={progress} page={1}>
                <Image
                  src="/assets/showcase/funfeed.svg"
                  alt="funfeed"
                  width={120}
                  height={140}
                  layout="responsive"
                />
              </WorkRight>
            </WorkContainer>
          )}
        ></Tile>
        <Tile
          page={2}
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <div className="text-2xl md:text-3xl font-semibold  mb-5 mt-12 md:mt-0">
                  Chat
                </div>
                <div className="text-sm md:text-2xl">
                  Chat room. Say hi to all travelers around the world!
                </div>
              </WorkLeft>
              <WorkRight progress={progress} page={2}>
                <Image
                  src="/assets/showcase/chat.svg"
                  alt="chat"
                  width={120}
                  height={140}
                  layout="responsive"
                />
              </WorkRight>
            </WorkContainer>
          )}
        ></Tile>
        <Tile
          page={3}
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <div className="text-2xl md:text-3xl font-semibold  mb-5 mt-12 md:mt-0">
                  Journal
                </div>
                <div className="text-sm md:text-2xl">
                  Hundreds Article For Your Trip Recommendation
                </div>
              </WorkLeft>
              <WorkRight progress={progress} page={3}>
                <Image
                  src="/assets/showcase/journal.svg"
                  alt="journal"
                  width={120}
                  height={140}
                  layout="responsive"
                />
              </WorkRight>
            </WorkContainer>
          )}
        ></Tile>
      </TileContent>
    </TileWrapper>
  );
};

export default Works;
