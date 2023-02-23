/* eslint-disable global-require */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
import { useRef, useState } from 'react';

import { GlobeMethods } from 'react-globe.gl';
import { SizeMe } from 'react-sizeme';

import bg from '../../public/assets/images/newbg.png';
import { Meta } from '../layout/Meta';
import Navbar from '../navigation/Navbar';
import { AppConfig } from '../utils/AppConfig';

let Globe: any = () => null;
if (typeof window !== 'undefined') Globe = require('react-globe.gl').default;

const Base = () => {
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
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <SizeMe monitorHeight>
        {({ size: { width } }) => (
          <>
            <Navbar />
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
                <div style='background-color: #FAECD6; position: fixed;
                top: -15px;
                left: -120px;
                padding: 5px 15px;
                font-weight: bold;
                border-top-left-radius: 10px;
                border-bottom-left-radius: 10px;
                border-top-right-radius: 10px;' >${d.city}</div>
                <div>${markerSvg}</div>
              </div>`;
                el.style.color = '#000';
                el.style.width = `${d.size}px`;

                // @ts-ignore
                el.style['pointer-events'] = 'auto';
                el.style.cursor = 'pointer';
                el.onclick = () => console.info(d);
                return el;
              }}
            />
          </>
        )}
      </SizeMe>
      {/* <VerticalFeatures /> */}
      {/* <Banner /> */}
      {/* <Footer /> */}
    </div>
  );
};

export { Base };
