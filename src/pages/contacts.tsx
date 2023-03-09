import React from 'react';

import Image from 'next/image';

import call from '../../public/assets/images/callus.png';
import hero from '../../public/assets/images/contact-hero.png';
import map from '../../public/assets/images/contact-map.png';
import divider from '../../public/assets/images/dividercontactus.png';
import email from '../../public/assets/images/emailus.png';
import fb from '../../public/assets/images/fbcontact.png';
import linkedin from '../../public/assets/images/socmed.png';
import { Footer } from '../footer/MainFooter';
import Navbar from '../navigation/Navbar';

function Contacts() {
  const cardImage = (item: any, idx: number) => {
    let img;
    let text;
    let link;
    switch (idx) {
      case 0:
        img = (
          <Image
            layout="fixed"
            src={call}
            alt="divider"
            className="w-full"
            style={{ marginBottom: 40 }}
          />
        );
        text = <p className="text-xl text-[#6975E1]">+65 8139 0383</p>;
        link = 'https://wa.me/+6581390383';
        break;
      case 1:
        img = (
          <Image
            layout="fixed"
            src={email}
            alt="divider"
            className="w-full"
            style={{ marginBottom: 40 }}
          />
        );
        text = <p className="text-xl text-[#6975E1]">SEND EMAIL</p>;
        link = 'mailto:commercial_admin@gwoodasia.com';
        break;
      case 2:
        img = (
          <Image
            layout="fixed"
            src={linkedin}
            alt="divider"
            className="w-full"
            style={{ marginBottom: 40 }}
          />
        );
        text = <p className="text-xl text-[#6975E1]">LINKEDIN</p>;
        link = 'https://www.linkedin.com/in/gwood-asia-92493787';
        break;
      case 3:
        img = (
          <Image
            layout="fixed"
            src={fb}
            alt="divider"
            className="w-full"
            style={{ marginBottom: 40 }}
          />
        );
        text = <p className="text-xl text-[#6975E1]">FACEBOOK</p>;
        link = 'https://www.facebook.com/gwood.asia.9';
        break;
      default:
        img = <></>;
        break;
    }

    return (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="w-[300px] h-[300px] p-4 rounded-3xl shadow-lg gap-4 m-4 flex flex-col items-center justify-around"
      >
        {img}
        <p className="text-xl text-black">{item}</p>
        {text}
      </a>
    );
  };
  return (
    <>
      <Navbar />
      <div
        style={{
          backgroundImage: `url(${hero.src})`,
          backgroundSize: 'cover',
          width: '100vw',
          height: '523px',
          // backgroundAttachment: 'fixed',
        }}
        className="flex justify-center items-center"
      >
        <h1 className="font-Manrope text-[20px] lg:text-[80px] text-white">
          HOW CAN WE HELP YOU?
        </h1>
      </div>
      <div className="bg-accent-content flex flex-col items-center justify-center pl-4 lg:p-12">
        <div className="flex flex-row flex-wrap w-full justify-around mb-8 ">
          {['CALL US', 'EMAIL US', 'SOCIAL MEDIA', 'SOCIAL MEDIA'].map(
            (item: any, key: number) => {
              return (
                <div key={`contact-item-${key}`}>{cardImage(item, key)}</div>
              );
            }
          )}
        </div>
        <img src={divider.src} alt="divider" className="w-24 mb-10 lg:w-36" />
        <Image
          // layout="fixed"
          src={map}
          alt="map"
          className="w-full"
          style={{ marginTop: 120 }}
        />
      </div>
      <Footer />
    </>
  );
}

export default Contacts;
