import dynamic from 'next/dynamic';

import { Hero } from './Hero';
import bg from '../../public/assets/images/newbg.png';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';

const ReactGlobe = dynamic(() => import('react-globe'), {
  ssr: false,
});

const Base = () => (
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
    <ReactGlobe height="90vh" globeBackgroundTexture={null} />
    {/* <VerticalFeatures /> */}
    {/* <Banner /> */}
    {/* <Footer /> */}
  </div>
);

export { Base };
