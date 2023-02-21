/* eslint-disable global-require */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
import { useRef, useState } from 'react';

import { GlobeMethods } from 'react-globe.gl';
import { SizeMe } from 'react-sizeme';

import { Hero } from './Hero';
import bg from '../../public/assets/images/newbg.png';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';

let Globe: any = () => null;
if (typeof window !== 'undefined') Globe = require('react-globe.gl').default;

const Base = () => {
  const globeEl = useRef<GlobeMethods>();
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [places, _] = useState([
    {
      id: 'marker1',
      city: 'Singapore',
      color: 'red',
      coordinates: [1.3521, 103.8198],
      value: 50,
    },

    {
      id: 'marker2',
      city: 'Indonesia',
      color: 'red',
      coordinates: [-6.2295712, 106.7594778, 12],
      value: 50,
    },
    {
      id: 'marker3',
      city: 'Australia',
      color: 'red',
      coordinates: [-32.0381872, 115.3872256, 10],
      value: 50,
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
      <Hero />
      <SizeMe>
        {({ size: { width } }) => (
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
            onLabelClick={(e: any) => {
              // eslint-disable-next-line no-alert
              window.alert(`label click ${JSON.stringify(e)}`);
            }}
            labelsData={places}
            labelLat={(d: any) => (d as any)?.coordinates[0]}
            labelLng={(d: any) => (d as any)?.coordinates[1]}
            labelText={(d: any) => (d as any).city}
            labelSize={() => 2}
            labelDotRadius={() => 2}
            labelColor={() => 'rgba(255, 0, 0, 1)'}
            labelResolution={2}
          />
        )}
      </SizeMe>
      {/* <VerticalFeatures /> */}
      {/* <Banner /> */}
      {/* <Footer /> */}
    </div>
  );
};

export { Base };
