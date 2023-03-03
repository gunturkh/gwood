import React from 'react';

import Image from 'next/image';

import about1 from '../../public/assets/images/about1.png';
import about2 from '../../public/assets/images/about2.png';
import about3 from '../../public/assets/images/about3.png';
import about4 from '../../public/assets/images/about4.png';
import bg from '../../public/assets/images/aboutus.png';
import overlay from '../../public/assets/images/aboutusoverlay.png';
import arrow from '../../public/assets/images/scroll-arrow.png';
import { Footer } from '../footer/MainFooter';
import Navbar from '../navigation/Navbar';

function About() {
  return (
    <>
      <Navbar />
      <div
        className="h-[200vh] flex flex-row flex-wrap bg-accent-content py-32 px-16"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          // width: '100vw',
          height: '100%',
        }}
      >
        <div
          className="h-[500px] md:h-screen w-full flex flex-col items-center text-white"
          style={{
            backgroundImage: `url(${overlay.src})`,
            backgroundSize: 'cover',
            // width: '100vw',
            height: '100%',
          }}
        >
          <div className="h-[500px] lg:h-screen">
            <h1 className="text-center lg:text-[80px] font-semibold mt-0 lg:mt-32">
              Global Supply - Local Delivery!
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
          <div className="h-[500px] lg:h-screen text-[12px] sm:text-[30px] lg:text-[50px] font-thin text-left">
            <div className="flex flex-row flex-wrap w-full justify-center items-center">
              <div className="max-w-[50vw] p-4 lg:p-20 mb-16 ">
                <p>
                  Originally founded in 1997, the goals and objectives of the
                  Gwood Asia companies remain based on integrity and openness
                  towards those we conduct business with.
                </p>
              </div>
              <div
                className={`w-[113px] h-[150px] sm:w-[376px] sm:h-[500px] relative group`}
              >
                <div
                  className={`w-[113px] h-[150px] sm:w-[376px] sm:h-[500px] ease-in duration-100 border border-purple-500 rounded-3xl backdrop-blur-sm bg-white/30 group-hover:bg-purple-300/30 hover:from-purple-300 relative`}
                ></div>
                <div
                  className={`absolute w-[113px] h-[150px] sm:w-[376px] sm:h-[500px] sm:-top-[60px] sm:-right-[80px] -top-[20px] -right-[30px]`}
                >
                  <img
                    src={about1.src}
                    alt="Image 1"
                    className={`w-[113px] h-[150px] sm:w-[376px] sm:h-[500px]`}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[500px] lg:h-screen text-[12px] sm:text-[30px] lg:text-[50px] font-thin text-left mt-8 lg:mt-24">
            <div className="flex flex-row flex-wrap w-full justify-center items-center">
              <div
                className={`w-[113px] h-[150px] sm:w-[376px] sm:h-[500px] relative group mr-10`}
              >
                <div
                  className={`w-[113px] h-[150px] sm:w-[376px] sm:h-[500px] ease-in duration-100 border border-purple-500 rounded-3xl backdrop-blur-sm bg-white/30 group-hover:bg-purple-300/30 hover:from-purple-300 relative`}
                ></div>
                <div
                  className={`absolute w-[113px] h-[150px] sm:w-[376px] sm:h-[500px] sm:-top-[60px] sm:-left-[80px] -top-[20px] -left-[30px]`}
                >
                  <img
                    src={about2.src}
                    alt="Image 2"
                    className={`w-[113px] h-[150px] sm:w-[376px] sm:h-[500px]`}
                  />
                </div>
              </div>
              <div className="max-w-[50vw] p-4 lg:p-20 mb-16 ">
                <p>
                  Our independently registered businesses in Singapore,
                  Indonesia & Australia together with our S.E. Asia Regional
                  partners, provide flexibility to secure competitive services
                  and solutions in a timely and efficient manner.{' '}
                </p>
              </div>
            </div>
          </div>
          <div className="h-[500px] lg:h-screen text-[12px] sm:text-[30px] lg:text-[50px] font-thin text-left mt-8 lg:mt-24">
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
                className={`w-[135px] h-[150px] sm:w-[450px] sm:h-[500px] relative group`}
              >
                <div
                  className={`w-[135px] h-[150px] sm:w-[450px] sm:h-[500px] ease-in duration-100 border border-purple-500 rounded-3xl backdrop-blur-sm bg-white/30 group-hover:bg-purple-300/30 hover:from-purple-300 relative`}
                ></div>
                <div
                  className={`absolute w-[135px] h-[150px] sm:w-[450px] sm:h-[500px] sm:-top-[60px] sm:-right-[40px] -top-[20px] -right-[12px]`}
                >
                  <img
                    src={about3.src}
                    alt="Image 3"
                    className={`w-[113px] h-[150px] sm:w-[376px] sm:h-[500px]`}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[500px] lg:h-screen text-[12px] sm:text-[30px] lg:text-[50px] font-thin text-left mt-8 lg:mt-24">
            <div className="flex flex-row flex-wrap w-full justify-center items-center">
              <div className="max-w-[50vw] p-4 lg:p-20 mb-16 ">
                <p>
                  Gwood Asia facilitates a gateway for end users, EPCM, project
                  managers, engineering partners and OEM manufacturers , to
                  access in-country markets that best supports their objectives
                </p>
              </div>
              <div
                className={`w-[113px] h-[150px] sm:w-[376px] sm:h-[500px] relative group`}
              >
                <div
                  className={`w-[113px] h-[150px] sm:w-[376px] sm:h-[500px] ease-in duration-100 border border-purple-500 rounded-3xl backdrop-blur-sm bg-white/30 group-hover:bg-purple-300/30 hover:from-purple-300 relative`}
                ></div>
                <div
                  className={`absolute w-[113px] h-[150px] sm:w-[376px] sm:h-[500px] sm:-top-[60px] sm:-right-[80px] -top-[20px] -right-[30px]`}
                >
                  <img
                    src={about4.src}
                    alt="Image 4"
                    className={`w-[113px] h-[150px] sm:w-[376px] sm:h-[500px]`}
                  />
                </div>
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
