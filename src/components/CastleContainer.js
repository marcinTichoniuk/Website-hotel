import React from 'react';
import { CastleContext } from '../context';
import { useContext } from 'react';
import Loading from '../components/Loading';
import CastleFilter from './CastleFilter';
import CastleList from './CastleList';

const CastleContainer = () => {

  const context = useContext(CastleContext);
  const { loading, filteredCastles } = context;

  return (
    <section className="castles-section">
      {loading ? <Loading /> :
        <>
          <CastleFilter />
          <CastleList filteredCastles={filteredCastles} />
        </>
      }
    </section>
  );
}

export default CastleContainer;