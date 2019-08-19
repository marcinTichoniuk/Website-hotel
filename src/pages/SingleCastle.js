import React, { Component } from 'react';
import { CastleContext } from '../context';
import StyledHeader from '../components/StyledHeader';
import Banner from '../components/Banner';
import LinkButton from '../components/LinkButton';
import defaultBg from '../images/europe5.jpg';

class SingleCastle extends Component {
  state = {
    slug: this.props.match.params.id
  }

  static contextType = CastleContext;

  // componentDidMount() {
  //   console.log('mount in single castle')
  // }

  render() {
    // console.log('render in single castle')
    const value = this.context;
    const { getCastle } = value;
    const castle = getCastle(this.state.slug);

    if (!castle) {
      return (
        <div className="error">
          <h3 className="error__title">Error! No such castles...</h3>
          <LinkButton linkTo="/castles" btnName="Back to Castles" />
        </div>
      )
    }
    console.log(castle)
    const { name, images, description, freeAlcohol, haunted, continent, price, size, extras } = castle;
    const photos = images.map(img => (
      <div key={img} className="castle-section__images">
        <img className="castle-section__image" src={img} alt="castle" />
      </div>
    ))

    return (
      <>
        <StyledHeader bgImg={images[0] || defaultBg}>
          <Banner title={name}>
            <LinkButton linkTo="/castles" btnName="Back to Castles" />
          </Banner>
        </StyledHeader>
        <section className="castle-section">
          <div className="castle-section__gallery">
            {photos}
          </div>
          <div className="castle-section__text-container">
            <div className="castle-section__description">
              <h3 className="castle-section__title">Details</h3>
              <p className="castle-section__text">{description}</p>
            </div>
            <div className="castle-section__info">
              <h3 className="castle-section__title">Info</h3>
              <h5 className="castle-section__subtitle">Price: ${price} /per night</h5>
              <h5 className="castle-section__subtitle">Size: {size} m2</h5>
              <h5 className="castle-section__subtitle">Continent: {continent}</h5>
              <h5 className="castle-section__subtitle">{haunted && 'Haunted'}</h5>
              <h5 className="castle-section__subtitle">Free Alcohol: {freeAlcohol ? 'No limit' : '1 bottle of wine'}</h5>
            </div>
            <div className="castle-section__extras">
              <h3 className="castle-section__title">Extras</h3>
              <ul className="castle-section__list">
                {extras.map(item => (
                  <li key={item} className="castle-section__item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default SingleCastle;