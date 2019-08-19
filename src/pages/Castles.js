import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import LinkButton from '../components/LinkButton';
import CastleContainer from '../components/CastleContainer';

const Castles = () => {
  return (
    <>
      <Header headerClass="header header--castles-img">
        <Banner title="Our Castles">
          <LinkButton />
        </Banner>
      </Header>
      <CastleContainer />
    </>
  );
}

export default Castles;