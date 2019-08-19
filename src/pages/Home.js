import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import LinkButton from '../components/LinkButton';
import Attractions from '../components/Attractions';
import PremiumCastles from '../components/PremiumCastles';

const Home = () => {
  return (
    <>
      <Header>
        <Banner title="Want to visit our castle?" subtitle="Check what we offer!">
          <LinkButton linkTo="/castles" btnName="Our Castles" />
        </Banner>
      </Header>
      <Attractions />
      <PremiumCastles />
    </>
  );
}

export default Home;