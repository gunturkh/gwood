import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import GWoodLogo from '../../public/assets/images/logo.png';

function Navbar() {
  return (
    <div className="navbar bg-accent-content px-10">
      <div className="navbar-start">
        <Image src={GWoodLogo} alt="logo" height={63} width={60} />
        <a
          className="btn btn-ghost normal-case text-2xl  "
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
          <div className="dropdown-content card-body text-center bg-accent-content w-40 p-2 mr-[-25px] rounded-b-xl">
            <Link href="/" className="my-4">
              <div className="hover:bg-[#820100] mx-[10px] py-2 hover:text-white hover:font-semibold font-medium rounded-xl">
                Home
              </div>
            </Link>
            <Link href="/about" className="my-4">
              <div className="hover:bg-[#820100] mx-[10px] py-2 hover:text-white hover:font-semibold font-medium rounded-xl">
                About Us
              </div>
            </Link>
            <Link href="/capabilities" className="my-4">
              <div className="hover:bg-[#820100] mx-[10px] py-2 hover:text-white hover:font-semibold font-medium rounded-xl">
                Capabilities
              </div>
            </Link>
            <Link href="/companies" className="my-4">
              <div className="hover:bg-[#820100] mx-[10px] py-2 hover:text-white hover:font-semibold font-medium rounded-xl">
                Companies
              </div>
            </Link>
            <Link href="/contacts" className="my-4">
              <div className="hover:bg-[#820100] mx-[10px] py-2 hover:text-white hover:font-semibold font-medium rounded-xl">
                Contacts
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
