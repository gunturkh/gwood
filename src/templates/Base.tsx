/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
import { useState } from 'react';

import dynamic from 'next/dynamic';

import { Hero } from './Hero';
import bg from '../../public/assets/images/newbg.png';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';

const ReactGlobe = dynamic(() => import('react-globe'), {
  ssr: false,
});

const Base = () => {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [markers, _] = useState([
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
  // const [event, setEvent] = useState<any>(null);
  // const [details, setDetails] = useState<any>(null);

  function markerTooltipRenderer(marker: any) {
    return `CITY: ${marker.city} (Value: ${marker.value})`;
  }

  const options = {
    markerTooltipRenderer,
  };

  // function onClickMarker(marker: any, markerObject: any, markerEvent: any) {
  function onClickMarker() {
    // setEvent({
    //   type: 'CLICK',
    //   marker,
    //   markerObjectID: markerObject.uuid,
    //   pointerEventPosition: { x: markerEvent.clientX, y: markerEvent.clientY },
    // });
    // setDetails(markerTooltipRenderer(marker));
  }

  // function onDefocus(previousFocus: any) {
  function onDefocus() {
    // setEvent({
    //   type: 'DEFOCUS',
    //   previousFocus,
    // });
    // setDetails(null);
  }
  return (
    <div
      className="antialiased text-gray-600"
      style={{
        backgroundImage: `url(${bg.src})`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
      }}
    >
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero />
      <ReactGlobe
        height="90vh"
        globeBackgroundTexture={null}
        //  @ts-ignore
        markers={markers}
        options={options}
        onClickMarker={onClickMarker}
        onDefocus={onDefocus}
      />
      {/* <VerticalFeatures /> */}
      {/* <Banner /> */}
      {/* <Footer /> */}
    </div>
  );
};

export { Base };
