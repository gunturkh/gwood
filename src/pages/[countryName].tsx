import React, { useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import australia1 from '../../public/assets/images/au-1.png';
import australia2 from '../../public/assets/images/au-2.png';
import australia from '../../public/assets/images/australia.png';
import indonesia1 from '../../public/assets/images/id-1.png';
import indonesia2 from '../../public/assets/images/id-2.png';
import indonesia3 from '../../public/assets/images/id-3.png';
import indonesia4 from '../../public/assets/images/id-4.png';
import indonesia from '../../public/assets/images/indonesia.png';
import PdfLogo from '../../public/assets/images/pdf.png';
import singapore1 from '../../public/assets/images/sg-1.png';
import singapore2 from '../../public/assets/images/sg-2.png';
import singapore3 from '../../public/assets/images/sg-3.png';
import singapore4 from '../../public/assets/images/sg-4.png';
import singapore from '../../public/assets/images/singapore.png';
import { Footer } from '../footer/MainFooter';
import Navbar from '../navigation/Navbar';

function About() {
  const router = useRouter();
  const { countryName } = router.query;
  const [selectedTab, setSelectedTab] = useState(0);
  const countryBg = (country: string) => {
    switch (country) {
      case 'singapore':
        return `url(${singapore.src})`;
      case 'australia':
        return `url(${australia.src})`;
      case 'indonesia':
        return `url(${indonesia.src})`;
      default:
        return `url(${singapore.src})`;
    }
  };

  const title = (country: string) => {
    switch (country) {
      case 'singapore':
        return `GWOOD SUPPLY & DISTRIBUTION PTE. LTD`;
      case 'australia':
        return `GWOOD COMMUNICATORS PTY LTD`;
      case 'indonesia':
        return `PT GWOOD INDONESIA`;
      default:
        return `GWOOD SUPPLY & DISTRIBUTION PTE. LTD`;
    }
  };

  const tabs = (country: string) => {
    switch (country) {
      case 'singapore':
        return [
          'Regional Trade Center',
          'Out-Sourced Procurement',
          'Bulk Material Supply',
          'Document Licenses',
        ];
      case 'australia':
        return ['ASA Standards Material', 'Document Licenses'];
      case 'indonesia':
        return [
          'Engineering Service',
          'Sub Contract Support',
          'Global Procurement Sourcing',
          'Document Licenses',
        ];
      default:
        return [
          'Regional Trade Center',
          'Out-Sourced Procurement',
          'Bulk Material Supply',
          'Document Licenses',
        ];
    }
  };

  const content = ({
    country,
    tabIndex,
  }: {
    country: string;
    tabIndex: number;
  }) => {
    let innerContent;
    if (country === 'australia') {
      if (tabIndex === 0) {
        innerContent = (
          <>
            <Image
              height={500}
              layout="fixed"
              src={australia1}
              alt="Engineering Service"
              className="w-full"
            />
            <div className="flex flex-col px-8 font-Inter text-black justify-center gap-y-8">
              <p>Export of quality assurred products, spare parts and </p>
              <p>engineering fabrication all complient to Australian</p>
              <p>{'Standards Association (ASA):'}</p>
              <div className="flex flex-col ml-8 gap-y-8">
                <p>1. One off purchase support services</p>
                <p>2. FPA inventory management</p>
                <p>3. Critical equipment and spares</p>
              </div>
            </div>
          </>
        );
      }
      if (tabIndex === 1) {
        innerContent = (
          <>
            <Image
              height={500}
              layout="fixed"
              src={australia2}
              alt="Document Licenses"
              className="w-full"
            />
            <div className="flex flex-col px-8 font-Inter text-black justify-start gap-y-8">
              <div className="inline-flex items-center mt-20">
                <Image
                  src={PdfLogo}
                  alt="logo"
                  width={54}
                  height={56}
                  style={{ width: '54px', height: 'auto' }}
                />
                <a
                  href="https://gwoodasia.com/doc/Gwood_certificate_of_registration.pdf"
                  target="_blank"
                  className="text-black ml-4"
                  rel="noreferrer"
                >
                  Australia Company Registered Documents.pdf
                </a>
              </div>
            </div>
          </>
        );
      }
    }
    if (country === 'indonesia') {
      if (tabIndex === 0) {
        innerContent = (
          <>
            <Image
              height={500}
              layout="fixed"
              src={indonesia1}
              alt="Engineering Service"
              className="w-full"
            />
            <div className="flex flex-col px-8 font-Inter text-black justify-center gap-y-8">
              <p>Technical engineering support for remote and on-site </p>
              <p>projects.</p>
              <div className="flex flex-col ml-8 gap-y-8">
                <p>1. Biowaste to Energy Conversion</p>
                <p>2. Filtration Module Installation</p>
                <p>3. Fuel System Analysis</p>
              </div>
            </div>
          </>
        );
      }
      if (tabIndex === 1) {
        innerContent = (
          <>
            <Image
              height={500}
              layout="fixed"
              src={indonesia2}
              alt="Sub Contract Support"
              className="w-full"
            />
            <div className="flex flex-col px-8 font-Inter text-black justify-center gap-y-8">
              <p>Support facilitation for EPCM project development</p>
              <div className="flex flex-col ml-8 gap-y-8">
                <p>1. Project Administration</p>
                <p>2. Material Supply and Logistics</p>
                <p>3. Regional Delivery Services</p>
              </div>
            </div>
          </>
        );
      }
      if (tabIndex === 2) {
        innerContent = (
          <>
            <Image
              height={500}
              layout="fixed"
              src={indonesia3}
              alt="Global Procurement Sourcing"
              className="w-full"
            />
            <div className="flex flex-col px-8 font-Inter text-black justify-center gap-y-8">
              <p>Our Gwood Asia regional network provides timely </p>
              <p>procurement and logistical support for in-country clients</p>
              <p>within Indonesia:</p>
              <div className="flex flex-col ml-8 gap-y-8">
                <p>1. Out-Sourced Purchase Support </p>
                <p>2. FPA Inventory Management</p>
                <p>3. Critical Equipment and Spares</p>
              </div>
            </div>
          </>
        );
      }
      if (tabIndex === 3) {
        innerContent = (
          <>
            <Image
              height={500}
              layout="fixed"
              src={indonesia4}
              alt="Document Licenses"
              className="w-full"
            />
            <div className="flex flex-col px-8 font-Inter text-black justify-start gap-y-8">
              <div className="inline-flex items-center mt-20">
                <Image
                  src={PdfLogo}
                  alt="logo"
                  width={54}
                  height={56}
                  style={{ width: '54px', height: 'auto' }}
                />
                <div className="flex flex-col justify-start">
                  <a
                    href="https://gwoodasia.com/Batam_SIUP_2018.pdf"
                    target="_blank"
                    className="text-black ml-4 mb-4"
                    rel="noreferrer"
                  >
                    Batam Company Registered Documents.pdf
                  </a>
                  <a
                    href="https://gwoodasia.com/doc/Surat_Keterangan_Domisili_Jkt_2.pdf"
                    target="_blank"
                    className="text-black ml-4"
                    rel="noreferrer"
                  >
                    Jakarta Company Registered Documents.pdf
                  </a>
                </div>
              </div>
            </div>
          </>
        );
      }
    }
    if (country === 'singapore') {
      if (tabIndex === 0) {
        innerContent = (
          <>
            <Image
              height={500}
              layout="fixed"
              src={singapore1}
              alt="Regional Trade Center"
              className="w-full"
            />
            <div className="flex flex-col px-8 font-Inter text-black justify-center gap-y-8">
              <p>Singapore offers multinational product representation,</p>
              <p>legal assurance and banking flexibility, our trade office </p>
              <p>supports:</p>
              <div className="flex flex-col ml-8 gap-y-8">
                <p>1. Centralized Global Sourcing</p>
                <p>2. Multiple Currency Transactions</p>
                <p>3. Trans-Modal Logistics Services</p>
              </div>
            </div>
          </>
        );
      }
      if (tabIndex === 1) {
        innerContent = (
          <>
            <Image
              height={500}
              layout="fixed"
              src={singapore2}
              alt="Out-Sourced Procurement"
              className="w-full"
            />
            <div className="flex flex-col px-8 font-Inter text-black justify-center gap-y-8">
              <p>Gwood provides access to global purchase of parts, </p>
              <p>equipment and services, through mutual agreements and</p>
              <p>binding negotiations for:</p>
              <div className="flex flex-col ml-8 gap-y-8">
                <p>1. OEM Product Supplies</p>
                <p>2. Sourcing Critical Equipment</p>
                <p>3. Technical Engineering Support</p>
              </div>
            </div>
          </>
        );
      }
      if (tabIndex === 2) {
        innerContent = (
          <>
            <Image
              height={500}
              layout="fixed"
              src={singapore3}
              alt="Bulk Material Supply"
              className="w-full"
            />
            <div className="flex flex-col px-8 font-Inter text-black justify-center gap-y-8">
              <p>Facilitating a secure platform for international shipments </p>
              <p>of contracted and project material for:</p>
              <div className="flex flex-col ml-8 gap-y-8">
                <p>1. Raw Commodity Handling</p>
                <p>2. Project Material Supply</p>
                <p>3. Equipment Module Delivery </p>
              </div>
            </div>
          </>
        );
      }
      if (tabIndex === 3) {
        innerContent = (
          <>
            <Image
              height={500}
              layout="fixed"
              src={singapore4}
              alt="Document Licenses"
              className="w-full"
            />
            <div className="flex flex-col px-8 font-Inter text-black justify-start gap-y-8">
              <div className="inline-flex items-center mt-20">
                <Image
                  src={PdfLogo}
                  alt="logo"
                  width={54}
                  height={56}
                  style={{ width: '54px', height: 'auto' }}
                />
                <a
                  href="https://gwoodasia.com/doc/SGP_Reg.pdf"
                  target="_blank"
                  className="text-black ml-4"
                  rel="noreferrer"
                >
                  Singapore Company Registered Documents.pdf
                </a>
              </div>
            </div>
          </>
        );
      }
    }
    return (
      <div className="h-full bg-white/80 flex flex-1 justify-center flex-row p-10">
        {innerContent}
      </div>
    );
  };
  return (
    <div
      style={{
        backgroundImage: countryBg(countryName as string),
        backgroundSize: 'cover',
        width: '100vw',
        height: '100%',
        backgroundAttachment: 'fixed',
      }}
    >
      <Navbar />
      <div className="flex flex-col">
        <div className="h-[50vh] flex">
          <h1 className="lg:px-80 px:20 text-center text-white text-[20px] md:text-[45px] font-light flex flex-1 justify-center items-center font-Lato">
            {title(countryName as string)}
          </h1>
        </div>
        <div className="flex flex-row justify-around font-Inter font-semibold px-40 gap-x-4 lg:gap-x-10">
          {tabs(countryName as string)?.map((tab, tabIndex) => {
            return (
              <button
                className={`flex justify-center items-center h-[50px] w-[100px] py-2 px-1 lg:h-[80px] lg:w-[200px] text-[9px] rounded-tr-md rounded-tl-md lg:py-[20px] lg:px-[15px] lg:text-base ${
                  selectedTab === tabIndex
                    ? 'bg-[#ACC1AE] text-[#1E1B1B]'
                    : 'bg-[#4E6C50] text-white'
                } `}
                onClick={() => setSelectedTab(tabIndex)}
                key={`${countryName}-tab-${tabIndex}`}
              >
                {tab}
              </button>
            );
          })}
        </div>
        {content({ country: countryName as string, tabIndex: selectedTab })}
      </div>
      <Footer />
    </div>
  );
}

export default About;
