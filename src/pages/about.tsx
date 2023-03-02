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
          className="h-screen w-full flex flex-col items-center text-white"
          style={{
            backgroundImage: `url(${overlay.src})`,
            backgroundSize: 'cover',
            // width: '100vw',
            height: '100%',
          }}
        >
          <div className="h-screen">
            <h1 className="text-[80px] font-semibold mt-32">
              Global Supply - Local Delivery!
            </h1>
            <div className="w-full flex justify-center mt-24 animate-bounce">
              <Image
                layout="fixed"
                src={arrow}
                alt="Scroll Arrow"
                width={80}
                height={80}
              />
            </div>
          </div>
          <div className="h-screen text-[50px] font-thin text-left">
            <div className="flex flex-row flex-wrap w-full justify-center items-center">
              <div className="max-w-[50vw] p-20">
                <p>
                  Originally founded in 1997, the goals and objectives of the
                  Gwood Asia companies remain based on integrity and openness
                  towards those we conduct business with.
                </p>
              </div>
              <div className="w-[500px] h-full relative">
                <div className="w-[551px] h-[735px] rounded-xl backdrop-blur-sm bg-white/30"></div>
                <div>
                  <Image
                    layout="responsive"
                    src={about1}
                    alt="Image 1"
                    width={551}
                    height={735}
                    // className="absolute"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="h-screen text-3xl font-thin">
            <p>
              Our independently registered businesses in Singapore, Indonesia &
              Australia together with our S.E. Asia Regional partners, provide
              flexibility to secure competitive services and solutions in a
              timely and efficient manner.{' '}
            </p>
            <div className="w-[300px] h-full">
              <Image
                layout="responsive"
                src={about2}
                alt="Image 2"
                width={551}
                height={735}
              />
            </div>
          </div>
          <div className="h-screen text-3xl font-thin">
            <p>The Gwood Asia focus is to</p>
            <ul className="list-disc">
              <li>build trust with our clients</li>
              <li>loyalty with our service providers &</li>
              <li>a reputation for timely delivery</li>
            </ul>
            <div className="w-[300px] h-full">
              <Image
                layout="responsive"
                src={about3}
                alt="Image 3"
                width={551}
                height={735}
              />
            </div>
          </div>
          <div className="h-screen text-3xl font-thin">
            <p>
              Gwood Asia facilitates a gateway for end users, EPCM, project
              managers, engineering partners and OEM manufacturers , to access
              in-country markets that best supports their objectives
            </p>
            <div className="w-[300px] h-full">
              <Image
                layout="responsive"
                src={about4}
                alt="Image 4"
                width={551}
                height={735}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
