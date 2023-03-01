import React from 'react';

import Image from 'next/image';

import bg from '../../public/assets/images/companies-bg.png';
import main from '../../public/assets/images/companies-main.png';
import { Footer } from '../footer/MainFooter';
import Navbar from '../navigation/Navbar';

function Companies() {
  return (
    <>
      <Navbar />
      <div
        className="h-[200vh] flex flex-row bg-accent-content"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          // objectFit: 'contain',
          width: '100%',
          height: 'auto',
          // backgroundAttachment: 'fixed',
        }}
      >
        <div>
          <p>{' Gwood Supply & Distribution (Pte.) Ltd '}</p>
          <p>Goodwood Communicators Pty Ltd</p>
          <p>{'PT Gwood Indonesia (Batam)'}</p>
          <p>{'PT Gwood Indonesia (Jakarta)'}</p>
        </div>
        <Image
          // layout="fixed"
          src={main}
          alt="Company Main"
          className="w-full"
          // style={{ marginTop: 120 }}
        />
      </div>
      <Footer />
    </>
  );
}

export default Companies;
