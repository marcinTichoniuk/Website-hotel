import React from 'react';
import Title from './Title';
import { useContext } from 'react';
import { CastleContext } from '../context';


const CastleFilter = () => {
  const context = useContext(CastleContext);
  const { handleChange, castles, continent, minPrice, price, maxPrice, minSize, maxSize, haunted, premium, freeAlcohol } = context;

  let uniqueContinent = [...new Set(castles.map(castle => castle.continent))];
  uniqueContinent = [...uniqueContinent, 'All'];
  const unique = uniqueContinent.map(continent => (
    <option key={continent} value={continent}>{continent}</option>
  ))

  return (
    <>
      <Title title="Search Castle" />
      <div className="castles-section__form">
        {/* continent */}
        <div className="castles-section__container">
          <label className="castles-section__label"> Continent
          <select name="continent" value={continent} onChange={handleChange} className="castles-section__select">
              {unique}
            </select>
          </label>
        </div>
        {/* end of continent */}
        {/* price */}
        <div className="castles-section__container">
          <label className="castles-section__label"> Price {price}$
          <input type="range" name="price" value={price} min={minPrice} max={maxPrice} onChange={handleChange} className="castles-section__input-range" />
          </label>
        </div>
        {/* end of price */}
        {/* size */}
        <div className="castles-section__container">
          <label className="castles-section__label"> Size m2
          <input type="number" name="minSize" value={minSize} onChange={handleChange} className="castles-section__input-number" />
            <input type="number" name="maxSize" value={maxSize} onChange={handleChange} className="castles-section__input-number" />
          </label>
        </div>
        {/* end of size */}
        {/* haunted */}
        <div className="castles-section__container">
          <div>
            <label className="castles-section__label">
              <input type="checkbox" name="haunted" checked={haunted} onChange={handleChange} className="castles-section__checkbox" />
              Haunted
            </label>
          </div>
          <div>
            <label className="castles-section__label">
              <input type="checkbox" name="premium" checked={premium} onChange={handleChange} className="castles-section__checkbox" />
              Premium
            </label>
          </div>
          <div>
            <input type="checkbox" id="alcohol" name="freeAlcohol" checked={freeAlcohol} onChange={handleChange} className="castles-section__checkbox" />
            <label htmlFor="alcohol" className="castles-section__label">Free Alcohol</label>
          </div>
        </div>
        {/* end of haunted */}
      </div>
    </>
  );
}

export default CastleFilter;