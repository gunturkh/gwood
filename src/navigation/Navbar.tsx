import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import GWoodLogo from '../../public/assets/images/logo.png';

function Navbar() {
  const router = useRouter();
  return (
    <div
      className="navbar px-10 fixed top-0 z-50"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div className="navbar-start">
        <img
          src={GWoodLogo.src}
          alt="logo"
          onClick={() => router.push('/')}
          className="cursor-pointer w-[30px] h-[33px] sm:w-[60px] sm:h-[63px]"
        />
        <a
          className="btn btn-ghost normal-case text-base sm:text-2xl  "
          href={'/'}
          style={{ color: '#151206' }}
        >
          Gwood Asia
        </a>
      </div>
      <div className="navbar-end ">
        <div style={{ color: '#151206', fontWeight: 600 }}>Menu</div>
        <div
          className="dropdown dropdown-bottom dropdown-end"
          style={{ color: '#151206' }}
          tabIndex={0}
        >
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <div
            className="dropdown-content card-body text-center  w-40 p-2 mr-[-25px] rounded-b-xl"
            style={{ backgroundColor: '#ffffff' }}
          >
            <div className="hover:bg-[#820100] mx-[10px] py-2 hover:text-white hover:font-semibold font-medium rounded-xl">
              <Link href="/" className="my-4">
                Home
              </Link>
            </div>
            <div className="hover:bg-[#820100] mx-[10px] py-2 hover:text-white hover:font-semibold font-medium rounded-xl">
              <Link href="/about" className="my-4">
                About Us
              </Link>
            </div>
            <div className="hover:bg-[#820100] mx-[10px] py-2 hover:text-white hover:font-semibold font-medium rounded-xl">
              <Link href="/capabilities" className="my-4">
                Capabilities
              </Link>
            </div>
            <div className="hover:bg-[#820100] mx-[10px] py-2 hover:text-white hover:font-semibold font-medium rounded-xl">
              <Link href="/companies" className="my-4">
                Companies
              </Link>
            </div>
            <div className="hover:bg-[#820100] mx-[10px] py-2 hover:text-white hover:font-semibold font-medium rounded-xl">
              <Link href="/contacts" className="my-4">
                Contacts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
