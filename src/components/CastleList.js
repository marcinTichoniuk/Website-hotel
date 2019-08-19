import React from 'react';
import CastleCard from './CastleCard';

const CastleList = ({ filteredCastles }) => {

  if (filteredCastles.length === 0) {
    return (
      <div className="error">
        <h3 className="error__title">No castles matched...</h3>
      </div>
    )
  }
  const castles = filteredCastles.map(castle => (
    <CastleCard key={castle.id} castle={castle} />
  ))

  return (
    <div className="castles-section__list">
      {castles}
    </div>
  );
}

export default CastleList;