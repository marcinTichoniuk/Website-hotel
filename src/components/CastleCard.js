import React from 'react';
import defaultImg from '../images/europe3.jpg';
import LinkButton from './LinkButton';

const CastleCard = ({ castle }) => {
  const { name, price, slug, images } = castle;

  return (
    <div className="card">
      <img className="card__img" src={images[0] || defaultImg} alt="castle" />
      <div className="card__text-area">
        <div className="card__text-container">
          <h3 className="card__castle-name">{name}</h3>
          <p className="card__castle-price">{price} $ / per night</p>
        </div>
        <div className="card__btn">
          <LinkButton linkTo={`/castles/${slug}`} btnName='More info' />
        </div>
      </div>
    </div>
  );
}

export default CastleCard;