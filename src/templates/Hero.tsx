import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import GWoodLogo from '../../public/assets/images/logo.png';
import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-1">
      <NavbarTwoColumns logo={<Image src={GWoodLogo} alt="logo" />}>
        <li>
          <Link href="/">
            <a>Menu</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>
  </Background>
);

export { Hero };
