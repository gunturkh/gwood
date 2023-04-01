import React, { useState } from 'react';

import { Transition } from '@headlessui/react';
import Image from 'next/image';
import { ImArrowRight2 } from 'react-icons/im';

import btm from '../../public/assets/images/about4.png';
import aus from '../../public/assets/images/companies-aus.png';
import bg from '../../public/assets/images/companies-bg-1.png';
import jkt from '../../public/assets/images/companies-jkt.png';
import main from '../../public/assets/images/companies-main.png';
import sgp from '../../public/assets/images/companies-sgp.png';
import { Footer } from '../footer/MainFooter';
import Navbar from '../navigation/Navbar';

function Companies() {
  const [companyIndex, setCompanyIndex] = useState(0);

  return (
    <>
      <Navbar />
      <div
        className="h-[200vh] flex flex-row flex-wrap py-32 px-16 relative top-[64px]"
        style={{
          backgroundColor: '#ffffff',
          backgroundImage: `url(${bg.src})`,
          backgroundSize: 'cover',
          width: '100vw',
          height: '100%',
        }}
      >
        <div className="flex flex-col flex-1 justify-center mr-4 mb-8">
          <div
            tabIndex={0}
            onClick={() => setCompanyIndex(1)}
            className="collapse group border-b-2 border-gray-500 hover:border-b-0 flex flex-col"
          >
            <div className="flex flex-row items-center">
              <ImArrowRight2
                style={{ fontSize: 40, marginRight: 10 }}
                className="mr-4 text-white group-hover:block hidden"
              />
              <p className="text-white text-[40px] group-hover:font-bold">
                {' Gwood Supply & Distribution (Pte.) Ltd '}
              </p>
            </div>
            <div className="collapse-content text-[30px]">
              <p className="text-white font-thin ml-20 ">
                10 Anson Road #05-17 International Plaza,
              </p>
              <p className="text-white font-thin ml-20 ">Singapore 079903</p>
            </div>
          </div>
          <div
            tabIndex={1}
            onClick={() => setCompanyIndex(2)}
            className="collapse group border-b-2 border-gray-500 hover:border-b-0 flex flex-col"
          >
            <div className="flex flex-row items-center">
              <ImArrowRight2
                style={{ fontSize: 40, marginRight: 10 }}
                className="mr-4 text-white group-hover:block hidden"
              />
              <p className="text-white text-[40px] group-hover:font-bold">
                {'Goodwood Communicators Pty Ltd'}
              </p>
            </div>
            <div className="collapse-content text-[30px]">
              <p className="text-white font-thin ml-20 ">
                t/a Gwood Supply & Distribution
              </p>
              <p className="text-white font-thin ml-20 ">
                U4-28 Peninsula Road, Maylands WA 6051
              </p>
              <p className="text-white font-thin ml-20 ">Australia</p>
            </div>
          </div>
          <div
            tabIndex={2}
            onClick={() => setCompanyIndex(3)}
            className="collapse group border-b-2 border-gray-500 hover:border-b-0 flex flex-col"
          >
            <div className="flex flex-row items-center">
              <ImArrowRight2
                style={{ fontSize: 40, marginRight: 10 }}
                className="mr-4 text-white group-hover:block hidden"
              />
              <p className="text-white text-[40px] group-hover:font-bold">
                {'PT Gwood Indonesia (Batam)'}
              </p>
            </div>
            <div className="collapse-content text-[30px]">
              <p className="text-white font-thin ml-20 ">
                Gedung Graha Pena, Lt 1, No. 109
              </p>
              <p className="text-white font-thin ml-20 ">
                Jl. Raya Batam Centre, Teluk Tering Kec.
              </p>
              <p className="text-white font-thin ml-20 ">Batam 29461</p>
            </div>
          </div>
          <div
            tabIndex={3}
            onClick={() => setCompanyIndex(4)}
            className="collapse group border-b-2 border-gray-500 hover:border-b-0 flex flex-col"
          >
            <div className="flex flex-row items-center">
              <ImArrowRight2
                style={{ fontSize: 40, marginRight: 10 }}
                className="mr-4 text-white group-hover:block hidden"
              />
              <p className="text-white text-[40px] group-hover:font-bold">
                {'PT Gwood Indonesia (Jakarta)'}
              </p>
            </div>
            <div className="collapse-content text-[30px]">
              <p className="text-white font-thin ml-20 ">WTC 5 lantai 3A</p>
              <p className="text-white font-thin ml-20 ">
                Jalan Jendral Sudirman Kav 29-31
              </p>
              <p className="text-white font-thin ml-20 ">Jakarta 12920</p>
            </div>
          </div>
        </div>
        <Transition
          show={companyIndex === 0}
          enter="transition duration-200"
          enterFrom="opacity-0 scale-150"
          enterTo="opacity-100 scale-100"
          leave="transition duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-150"
        >
          <div className="w-[600px] h-full">
            <Image
              layout="responsive"
              src={main}
              alt="Company Main"
              width={536}
              height={620}
            />
          </div>
        </Transition>

        <Transition
          show={companyIndex === 1}
          enter="transition duration-200"
          enterFrom="opacity-0 scale-150"
          enterTo="opacity-100 scale-100"
          leave="transition duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-150"
        >
          <div className="w-[600px] h-full">
            <Image
              layout="responsive"
              src={sgp}
              alt="Gwood Supply & Distribution (Pte.) Ltd"
              width={536}
              height={620}
            />
          </div>
        </Transition>

        <Transition
          show={companyIndex === 2}
          enter="transition duration-200"
          enterFrom="opacity-0 scale-150"
          enterTo="opacity-100 scale-100"
          leave="transition duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-150"
        >
          <div className="w-[600px] h-full">
            <Image
              layout="responsive"
              src={aus}
              alt="Goodwood Communicators Pty Ltd"
              width={536}
              height={620}
            />
          </div>
        </Transition>

        <Transition
          show={companyIndex === 3}
          enter="transition duration-200"
          enterFrom="opacity-0 scale-150"
          enterTo="opacity-100 scale-100"
          leave="transition duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-150"
        >
          <div className="w-[600px] h-full">
            <Image
              layout="responsive"
              src={btm}
              alt="PT Gwood Indonesia (Batam)"
              width={536}
              height={620}
            />
          </div>
        </Transition>

        <Transition
          show={companyIndex === 4}
          enter="transition duration-200"
          enterFrom="opacity-0 scale-150"
          enterTo="opacity-100 scale-100"
          leave="transition duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-150"
        >
          <div className="w-[600px] h-full">
            <Image
              layout="responsive"
              src={jkt}
              alt="PT Gwood Indonesia (Jakarta)"
              width={536}
              height={620}
            />
          </div>
        </Transition>

        <Transition
          show={companyIndex === 5}
          enter="transition duration-200"
          enterFrom="opacity-0 scale-150"
          enterTo="opacity-100 scale-100"
          leave="transition duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-150"
        >
          <div className="w-[600px] h-full">
            <Image
              layout="responsive"
              src={main}
              alt="Company Main"
              width={536}
              height={620}
            />
          </div>
        </Transition>
      </div>
      <Footer />
    </>
  );
}

export default Companies;
