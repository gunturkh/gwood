import React from 'react';

import Image from 'next/image';

import about1 from '../../public/assets/images/about1.png';
import about2 from '../../public/assets/images/about2.png';
import about3 from '../../public/assets/images/about3.png';
import about4 from '../../public/assets/images/about4.png';
import bg from '../../public/assets/images/aboutus.png';
import capabilities1 from '../../public/assets/images/capabilities1.png';
import capabilities2 from '../../public/assets/images/capabilities2.png';
import capabilities3 from '../../public/assets/images/capabilities3.png';
import capabilities4 from '../../public/assets/images/capabilities4.png';
import logo from '../../public/assets/images/logo.png';
import arrow from '../../public/assets/images/scroll-arrow.png';
import { Footer } from '../footer/MainFooter';
import Navbar from '../navigation/Navbar';

function About() {
  return (
    <>
      <Navbar />
      <div
        className="h-[200vh] flex flex-row flex-wrap md:py-32 md:px-16 px-8 py-4 relative top-[64px]"
        style={{
          backgroundColor: '#ffffff',
          backgroundImage: `url(${bg.src})`,
          backgroundSize: 'cover',
          // backgroundAttachment: 'fixed',
          // width: '100vw',
          height: '100%',
        }}
      >
        <div
          className="h-[500px] md:h-screen w-full flex flex-col items-center text-white"
          style={{
            // backgroundImage: `url(${overlay.src})`,
            // backgroundSize: 'cover',
            // width: '100vw',
            height: '100%',
          }}
        >
          <div className="h-[600px] md:h-screen">
            <div className="flex">
              <img
                src={logo.src}
                alt="Gwood Logo"
                className={`w-[121px] h-[131px] lg:w-[326px] lg:h-[352px] mr-8`}
              />
              <h1 className="text-center lg:text-[60px] font-semibold mt-8 lg:mt-32 text-[#E0D1B4]">
                Global Supply - Local Delivery!
              </h1>
            </div>
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
          <div className="h-[300px] md:h-screen text-[12px] sm:text-[20px] lg:text-[30px] font-thin text-left relative -left-[50px]">
            <div className="flex flex-row  w-full justify-center items-center">
              <div className="max-w-[50vw] p-4 lg:p-20 mb-16 ">
                <p>
                  Originally founded in 1997, the goals and objectives of the
                  Gwood Asia companies remain based on integrity and openness
                  towards those we conduct business with.
                </p>
              </div>
              <div
                className={`w-[113px] h-[150px] lg:w-[430px] lg:h-[600px] relative group`}
              >
                <div
                  className={`gradient-border-mask w-[113px] h-[150px] lg:w-[430px] lg:h-[600px] ease-in duration-100 rounded-3xl backdrop-blur-sm transition-all bg-white/40 from-white/80 to-white/10 group-hover:bg-white/50 group-hover:bg-gradient-to-br group-hover:from-[#FF6F07]/20 group-hover:via-[#FF6F07]/5 group-hover:to-transparent relative`}
                ></div>
                <div
                  className={`absolute w-[113px] h-[150px] lg:w-[430px] lg:h-[600px] lg:-top-[60px] lg:-right-[80px] -top-[20px] -right-[30px]`}
                >
                  <img
                    src={about1.src}
                    alt="Image 1"
                    className={`w-[113px] h-[150px] lg:w-[430px] lg:h-[600px]`}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[300px] lg:h-screen text-[12px] sm:text-[20px] lg:text-[30px] font-thin text-left mt-8 lg:mt-[50px] relative left-[50px]">
            <div className="flex flex-row flex-wrap w-full items-center">
              <div
                className={`w-[113px] h-[150px] lg:w-[430px] lg:h-[600px] relative group mr-4`}
              >
                <div
                  className={`gradient-border-mask w-[113px] h-[150px] lg:w-[430px] lg:h-[600px] ease-in duration-100 rounded-3xl backdrop-blur-sm transition-all bg-white/40 from-white/80 to-white/10 group-hover:bg-white/50 group-hover:bg-gradient-to-br group-hover:from-[#FF6F07]/20 group-hover:via-[#FF6F07]/5 group-hover:to-transparent relative`}
                ></div>
                <div
                  className={`absolute w-[113px] h-[150px] lg:w-[430px] lg:h-[600px] lg:-top-[60px] lg:-left-[80px] -top-[20px] -left-[30px]`}
                >
                  <img
                    src={about2.src}
                    alt="Image 2"
                    className={`w-[113px] h-[150px] lg:w-[430px] lg:h-[600px]`}
                  />
                </div>
              </div>
              <div className="max-w-[50vw] p-4 lg:p-1 mb-16 ">
                <p>
                  Our independently registered businesses in Singapore,
                  Indonesia & Australia together with our S.E. Asia Regional
                  partners, provide flexibility to secure competitive services
                  and solutions in a timely and efficient manner.{' '}
                </p>
              </div>
            </div>
          </div>
          <div className="h-[300px] lg:h-screen text-[12px] sm:text-[20px] lg:text-[30px] font-thin text-left mt-8 lg:mt-[50px]">
            <div className="flex flex-row flex-wrap w-full justify-center items-center">
              <div className="max-w-[50vw] p-4 lg:p-20 mb-16 ">
                <p>The Gwood Asia focus is to</p>
                <ul className="list-disc ml-10">
                  <li>build trust with our clients</li>
                  <li>loyalty with our service providers &</li>
                  <li>a reputation for timely delivery</li>
                </ul>
              </div>
              <div
                className={`w-[113px] h-[150px] lg:w-[430px] lg:h-[600px] relative group`}
              >
                <div
                  className={`gradient-border-mask w-[113px] h-[150px] lg:w-[430px] lg:h-[600px] ease-in duration-100 rounded-3xl backdrop-blur-sm transition-all bg-white/40 from-white/80 to-white/10 group-hover:bg-white/50 group-hover:bg-gradient-to-br group-hover:from-[#FF6F07]/20 group-hover:via-[#FF6F07]/5 group-hover:to-transparent relative`}
                ></div>
                <div
                  className={`absolute w-[113px] h-[150px] lg:w-[430px] lg:h-[600px] lg:-top-[60px] lg:-right-[80px] -top-[20px] -right-[30px]`}
                >
                  <img
                    src={about3.src}
                    alt="Image 3"
                    className={`w-[113px] h-[150px] lg:w-[430px] lg:h-[600px]`}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[300px] lg:h-screen text-[12px] sm:text-[20px] lg:text-[30px] font-thin text-left mt-8 lg:mt-[50px]">
            <div className="flex flex-row flex-wrap w-full justify-center items-center">
              <div
                className={`w-[113px] h-[150px] lg:w-[430px] lg:h-[600px] relative group mr-4`}
              >
                <div
                  className={`gradient-border-mask w-[113px] h-[150px] lg:w-[430px] lg:h-[600px] ease-in duration-100 rounded-3xl backdrop-blur-sm transition-all bg-white/40 from-white/80 to-white/10 group-hover:bg-white/50 group-hover:bg-gradient-to-br group-hover:from-[#FF6F07]/20 group-hover:via-[#FF6F07]/5 group-hover:to-transparent relative`}
                ></div>
                <div
                  className={`absolute w-[113px] h-[150px] lg:w-[430px] lg:h-[600px] lg:-top-[60px] lg:-left-[80px] -top-[20px] -left-[30px]`}
                >
                  <img
                    src={about4.src}
                    alt="Image 4"
                    className={`w-[113px] h-[150px] lg:w-[430px] lg:h-[600px]`}
                  />
                </div>
              </div>
              <div className="max-w-[50vw] p-4 lg:p-1 mb-16 ">
                <p>
                  Gwood Asia facilitates a gateway for end users, EPCM, project
                  managers, engineering partners and OEM manufacturers , to
                  access in-country markets that best supports their objectives
                </p>
              </div>
            </div>
          </div>

          {/* capabilities */}
          <div className="h-[500px] md:h-screen w-full">
            <h1 className="text-right lg:text-[80px] font-semibold mt-0 lg:mt-32">
              &bull; Capabilities
            </h1>
          </div>
          <div className="h-[300px] md:h-screen text-[12px] sm:text-[20px] lg:text-[30px] font-thin text-left text-white">
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
                  className={`gradient-border-mask w-[113px] h-[150px] lg:w-[376px] lg:h-[500px] ease-in duration-100 rounded-3xl bg-white/40 from-white/80 to-white/10 group-hover:bg-white/50 group-hover:bg-gradient-to-br group-hover:from-[#FF6F07]/20 group-hover:via-[#FF6F07]/5 group-hover:to-transparent relative`}
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
          <div className="h-[500px] lg:h-screen text-[12px] md:text-[20px] lg:text-[30px] font-thin text-left mt-48 lg:mt-[50rem] text-white">
            <div className="flex flex-row flex-wrap w-full justify-center items-center">
              <div
                className={`w-[113px] h-[150px] md:w-[376px] md:h-[500px] relative group mr-10`}
              >
                <div
                  className={`gradient-border-mask w-[113px] h-[150px] md:w-[376px] md:h-[500px] ease-in duration-100 rounded-3xl bg-white/40 from-white/80 to-white/10 group-hover:bg-white/50 group-hover:bg-gradient-to-br group-hover:from-[#FF6F07]/20 group-hover:via-[#FF6F07]/5 group-hover:to-transparent relative`}
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
          <div className="h-[500px] lg:h-screen text-[12px] md:text-[20px] lg:text-[30px] font-thin text-left mt-8 lg:mt-48 text-white">
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
                  className={`gradient-border-mask w-[113px] h-[150px] md:w-[376px] md:h-[500px] ease-in duration-100 rounded-3xl bg-white/40 from-white/80 to-white/10 group-hover:bg-white/50 group-hover:bg-gradient-to-br group-hover:from-[#FF6F07]/20 group-hover:via-[#FF6F07]/5 group-hover:to-transparent relative`}
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
          <div className="h-[500px] lg:h-screen text-[12px] md:text-[20px] lg:text-[30px] font-thin text-left mt-8 lg:mt-[30rem] text-white">
            <div className="flex flex-row flex-wrap w-full justify-center items-center">
              <div
                className={`w-[113px] h-[150px] md:w-[376px] md:h-[500px] relative group mr-10`}
              >
                <div
                  className={`gradient-border-mask w-[113px] h-[150px] md:w-[376px] md:h-[500px] ease-in duration-100 rounded-3xl bg-white/40 from-white/80 to-white/10 group-hover:bg-white/50 group-hover:bg-gradient-to-br group-hover:from-[#FF6F07]/20 group-hover:via-[#FF6F07]/5 group-hover:to-transparent relative`}
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

export default About;
