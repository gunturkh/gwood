import React from 'react';

import Image from 'next/image';

import capabilities1 from '../../public/assets/images/capabilities1.png';
import capabilities2 from '../../public/assets/images/capabilities2.png';
import capabilities3 from '../../public/assets/images/capabilities3.png';
import capabilities4 from '../../public/assets/images/capabilities4.png';
import overlay from '../../public/assets/images/capabilitiesoverlay.png';
import arrow from '../../public/assets/images/scroll-arrow.png';
import { Footer } from '../footer/MainFooter';
import Navbar from '../navigation/Navbar';

function Capabilities() {
  return (
    <>
      <Navbar />
      <div
        className="h-[200vh] flex flex-row flex-wrap md:py-32 md:px-16 px-8 py-4 relative top-[64px]"
        style={{
          backgroundColor: `#1E2537`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          // width: '100vw',
          height: '100%',
        }}
      >
        <div
          className="h-[500px] lg:h-screen w-full flex flex-col items-center text-white"
          style={{
            backgroundImage: `url(${overlay.src})`,
            backgroundSize: 'cover',
            // width: '100vw',
            height: '100%',
          }}
        >
          <div className="h-[500px] md:h-screen">
            <h1 className="text-center lg:text-[80px] font-semibold mt-0 lg:mt-32">
              Capabilities
            </h1>
            <div className="w-full flex justify-center mt-[12rem] animate-bounce">
              <Image
                layout="fixed"
                src={arrow}
                alt="Scroll Arrow"
                width={80}
                height={80}
              />
            </div>
          </div>
          <div className="h-[300px] md:h-screen text-[12px] sm:text-[20px] lg:text-[40px] font-thin text-left">
            <div className="flex flex-row flex-wrap w-full justify-center items-center">
              <div className="max-w-[50vw] p-4 lg:p-20 mb-16 mr-16 ">
                <p className="font-semibold ">CONTRACTS</p>
                <ul className="list-disc ml-8 lg:ml-24">
                  <li>Project Sub-Contracts</li>
                  <li>Engineering Design</li>
                  <li>Cost Control Services</li>
                </ul>
              </div>
              <div
                className={`w-[113px] h-[150px] lg:w-[376px] lg:h-[500px] relative group mr-10`}
              >
                <div
                  className={`w-[113px] h-[150px] lg:w-[376px] lg:h-[500px] ease-in duration-100 border border-purple-500 rounded-3xl backdrop-blur-sm bg-white/30 group-hover:bg-purple-300/30 hover:from-purple-300 relative`}
                ></div>
                <div
                  className={`absolute w-[113px] h-[150px] lg:w-[376px] lg:h-[500px] lg:-top-[60px] lg:-left-[80px] -top-[20px] -left-[30px]`}
                >
                  <img
                    src={capabilities1.src}
                    alt="Image 1"
                    className={`w-[113px] h-[150px] lg:w-[376px] lg:h-[500px]`}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[500px] lg:h-screen text-[12px] md:text-[20px] lg:text-[40px] font-thin text-left mt-48 lg:mt-[50rem]">
            <div className="flex flex-row flex-wrap w-full justify-center items-center">
              <div
                className={`w-[113px] h-[150px] md:w-[376px] md:h-[500px] relative group mr-10`}
              >
                <div
                  className={`w-[113px] h-[150px] md:w-[376px] md:h-[500px] ease-in duration-100 border border-purple-500 rounded-3xl backdrop-blur-sm bg-white/30 group-hover:bg-purple-300/30 hover:from-purple-300 relative`}
                ></div>
                <div
                  className={`absolute w-[113px] h-[150px] md:w-[376px] md:h-[500px] md:-top-[60px] md:-left-[80px] -top-[20px] -left-[30px]`}
                >
                  <img
                    src={capabilities2.src}
                    alt="Image 2"
                    className={`w-[113px] h-[150px] md:w-[376px] md:h-[500px]`}
                  />
                </div>
              </div>
              <div className="max-w-[50vw] p-4 lg:pl-[12rem] mb-16 ">
                <p className="font-semibold ">LOGISTICS</p>
                <ul className="list-disc ml-8 lg:ml-24">
                  <li>Freight Consignments</li>
                  <li>Multiple Currency Orders</li>
                  <li>Commodity Trades</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="h-[500px] lg:h-screen text-[12px] md:text-[20px] lg:text-[40px] font-thin text-left mt-8 lg:mt-48">
            <div className="flex flex-row flex-wrap w-full justify-center items-center">
              <div className="max-w-[50vw] p-4 lg:p-20 mb-16 ">
                <p className="font-semibold ">COMMERCIAL</p>
                <ul className="list-disc ml-8 lg:ml-24">
                  <li>Regional Trade Centre</li>
                  <li>International Standards Material</li>
                  <li>Critical Equipment Supply</li>
                </ul>
              </div>
              <div
                className={`w-[113px] h-[150px] md:w-[376px] md:h-[500px] relative group mr-10`}
              >
                <div
                  className={`w-[113px] h-[150px] md:w-[376px] md:h-[500px] ease-in duration-100 border border-purple-500 rounded-3xl backdrop-blur-sm bg-white/30 group-hover:bg-purple-300/30 hover:from-purple-300 relative`}
                ></div>
                <div
                  className={`absolute w-[113px] h-[150px] md:w-[376px] md:h-[500px] md:-top-[60px] md:-left-[80px] -top-[20px] -left-[30px]`}
                >
                  <img
                    src={capabilities3.src}
                    alt="Image 3"
                    className={`w-[113px] h-[150px] md:w-[376px] md:h-[500px]`}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[500px] lg:h-screen text-[12px] md:text-[20px] lg:text-[40px] font-thin text-left mt-8 lg:mt-[30rem]">
            <div className="flex flex-row flex-wrap w-full justify-center items-center">
              <div
                className={`w-[113px] h-[150px] md:w-[376px] md:h-[500px] relative group mr-10`}
              >
                <div
                  className={`w-[113px] h-[150px] md:w-[376px] md:h-[500px] ease-in duration-100 border border-purple-500 rounded-3xl backdrop-blur-sm bg-white/30 group-hover:bg-purple-300/30 hover:from-purple-300 relative`}
                ></div>
                <div
                  className={`absolute w-[113px] h-[150px] md:w-[376px] md:h-[500px] md:-top-[60px] md:-right-[80px] -top-[20px] -right-[30px]`}
                >
                  <img
                    src={capabilities4.src}
                    alt="Image 4"
                    className={`w-[113px] h-[150px] md:w-[376px] md:h-[500px]`}
                  />
                </div>
              </div>
              <div className="max-w-[50vw] p-4 lg:pl-[12rem] mb-16 ">
                <p className="font-semibold ">MATERIAL</p>
                <ul className="list-disc ml-8 lg:ml-24">
                  <li>Specialised Fabrication</li>
                  <li>OEM Brand Distribution</li>
                  <li>Out-Sourced Purchasing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Capabilities;
