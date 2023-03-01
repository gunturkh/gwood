/* eslint-disable global-require */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
import { useRef, useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';
import { GlobeMethods } from 'react-globe.gl';
import { SizeMe } from 'react-sizeme';

import bg from '../../public/assets/images/newbg.png';
import { Meta } from '../layout/Meta';
import Navbar from '../navigation/Navbar';
import { AppConfig } from '../utils/AppConfig';

let Globe: any = () => null;
if (typeof window !== 'undefined') Globe = require('react-globe.gl').default;

const Base = () => {
  const router = useRouter();
  const globeEl = useRef<GlobeMethods>();
  const markerSvg = `<svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.68193 25.0525C2.83316 16.2469 9.10822 3.41669 20.2637 3.41669C31.4191 3.41669 37.6942 16.2469 30.8454 25.0525L20.2637 38.6576L9.68193 25.0525ZM20.2636 22.2084C23.0941 22.2084 25.3886 19.9138 25.3886 17.0834C25.3886 14.2529 23.0941 11.9584 20.2636 11.9584C17.4332 11.9584 15.1386 14.2529 15.1386 17.0834C15.1386 19.9138 17.4332 22.2084 20.2636 22.2084Z" fill="#CD521A"/>
  </svg>
  `;
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [places, _] = useState([
    {
      id: 'marker1',
      city: 'Singapore',
      color: '#CD521A',
      coordinates: [1.3521, 103.8198],
      lat: 1.3521,
      lng: 103.8198,
      size: 50,
    },

    {
      id: 'marker2',
      city: 'Indonesia',
      color: '#CD521A',
      coordinates: [-6.2295712, 106.7594778, 12],
      lat: -6.2295712,
      lng: 106.7594778,
      size: 50,
    },
    {
      id: 'marker3',
      city: 'Australia',
      color: '#CD521A',
      coordinates: [-32.0381872, 115.3872256, 10],
      lat: -32.0381872,
      lng: 115.3872256,
      size: 50,
    },
  ]);

  return (
    <div
      className="antialiased text-gray-600"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: 'cover',
        width: '100vw',
        height: '100vh',
      }}
    >
      <Navbar />
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <div className="fixed w-[72px] h-[636px] bg-[#820100] top-[150px] flex flex-col justify-evenly py-10 rounded-tr-3xl rounded-br-3xl shadow z-50">
        <a
          href="https://www.facebook.com/gwood.asia.9/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={'/assets/images/fb.svg'}
            alt="Facebook"
            height={80}
            width={80}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/gwood-asia-92493787/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={'/assets/images/linkedin.svg'}
            alt="LinkedIn"
            height={80}
            width={80}
          />
        </a>
        <a
          href="mailto:commercial_admin@gwoodasia.com"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={'/assets/images/email.svg'}
            alt="Email"
            height={80}
            width={80}
          />
        </a>
        <a href="https://wa.me/+6581390383" target="_blank" rel="noreferrer">
          <Image
            src={'/assets/images/wa.svg'}
            alt="Whatsapp"
            height={80}
            width={80}
          />
        </a>
      </div>
      <SizeMe monitorHeight>
        {({ size: { width } }) => (
          <>
            <Globe
              ref={globeEl}
              onGlobeReady={() => {
                const MAP_CENTER = {
                  lat: -13.3766016,
                  lng: 127.342919,
                  altitude: 1.5,
                };
                if (globeEl && globeEl.current) {
                  globeEl?.current?.pointOfView(MAP_CENTER, 100);
                }
              }}
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
              width={width as number}
              backgroundColor="rgba(0,0,0,0)"
              htmlElementsData={places}
              htmlElement={(d: any) => {
                const el = document.createElement('div');
                el.innerHTML = `
              <div>
                <div class='hover:bg-[#820100] hover:text-white bg-[#FAECD6] fixed top-[-15px] left-[-120px] py-2 px-4 font-bold rounded-tl-lg rounded-bl-lg rounded-tr-lg'>${d.city}</div>
                <div>${markerSvg}</div>
              </div>`;
                el.style.color = '#000';
                el.style.width = `${d.size}px`;

                // @ts-ignore
                el.style['pointer-events'] = 'auto';
                el.style.cursor = 'pointer';
                el.onclick = () => router.push(d.city.toLowerCase());
                return el;
              }}
            />
          </>
        )}
      </SizeMe>
    </div>
  );
};

export { Base };
