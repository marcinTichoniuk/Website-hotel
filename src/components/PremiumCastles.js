import React from 'react';
import { useContext } from 'react';
import { CastleContext } from '../context';
import Title from './Title';
import Loading from './Loading';
import CastleCard from './CastleCard';

const PremiumCastles = () => {

  const context = useContext(CastleContext);
  const { premiumCastles, loading } = context;

  const premium = premiumCastles.map(castle => (
    <CastleCard key={castle.id} castle={castle} />
  ))

  return (
    <section className="section section--light">
      <Title title="Premium Castles" />
      {loading ? <Loading /> :
        <div className="section__cards">
          {premium}
        </div>
      }
    </section>
  );
}

export default PremiumCastles;