import React from 'react';

import Image from 'next/image';
import { ImArrowRight2 } from 'react-icons/im';

import GWoodLogo from '../../public/assets/images/logo.png';

export const Footer = () => {
  return (
    <div>
      <footer className=" flex flex-row flex-wrap p-10 bg-[#1C271D] text-base-content font-['Inter'] gap-40 justify-around relative top-[64px]">
        <div className="flex flex-col justify-center">
          <div className="flex justify-center">
            <Image
              src={GWoodLogo}
              alt="logo"
              width={100}
              height={100}
              style={{ width: '100px', height: 'auto' }}
            />
          </div>
          <p className="text-white font-semibold text-lg mt-4"> GWOOD ASIA</p>
        </div>
        <div className="flex flex-col max-w-[600px] gap-8">
          <span className="font-semibold text-white text-lg">
            International Group Operations
          </span>
          <span className="font-thin text-white text-lg">
            Mining, Power, Shipping, Oil & Gas
          </span>
          <a className="link link-hover text-white font-thin text-sm">
            Email : david_paddon@gwoodasia.com | david_gwood@yahoo.com
          </a>
        </div>
        <div className="group flex items-start justify-center flex-row gap-4 text-white">
          <div className="inline-flex items-center">
            <ImArrowRight2
              className="transition group-hover:translate-x-0 -translate-x-8 duration-100 ease-in-out"
              style={{ fontSize: 20, marginRight: 10 }}
            />
            <a
              href="mailto:commercial_admin@gwoodasia.com"
              className="font-thin no-underline"
              target="_blank"
              rel="noreferrer"
            >
              commercial_admin@gwoodasia.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
