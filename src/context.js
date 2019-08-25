import React, { Component } from 'react';
import data from './data';

const CastleContext = React.createContext();

class CastleProvider extends Component {
  state = {
    castles: [],
    filteredCastles: [],
    premiumCastles: [],
    loading: true,
    continent: 'All',
    minPrice: 0,
    maxPrice: 0,
    price: 0,
    minSize: 0,
    maxSize: 0,
    haunted: false,
    freeAlcohol: false,
    premium: false,
  }

  componentDidMount() {
    // console.log('mount in context')
    const castles = data;
    const filteredCastles = [...castles].sort((a, b) => a.price - b.price);
    const premiumCastles = castles.filter(castle => castle.premium);
    const maxPrice = Math.max(...castles.map(castle => castle.price));
    const minPrice = Math.min(...castles.map(castle => castle.price));
    const maxSize = Math.max(...castles.map(castle => castle.size));
    const minSize = Math.min(...castles.map(castle => castle.size));
    this.setState({
      castles,
      filteredCastles,
      premiumCastles,
      loading: false,
      maxPrice,
      minPrice,
      price: maxPrice,
      maxSize,
      minSize,
    })
  }

  getCastle = (slug) => {
    const castle = [...this.state.castles].find(castle => castle.slug === slug);
    return castle;
  }

  handleChange = e => {
    if (e.target.type === "checkbox") {
      this.setState({
        [e.target.name]: e.target.checked
      }, this.chosenCastles)
    } else {
      this.setState({
        [e.target.name]: e.target.value
      }, this.chosenCastles)
    }
  }

  chosenCastles = () => {
    // state destructuring 
    let { castles, continent, price, minSize, maxSize, haunted, premium, freeAlcohol } = this.state;
    price = parseInt(price);
    minSize = parseInt(minSize);
    maxSize = parseInt(maxSize);
    // starter castles --> you can see every castle
    let tempCastles = [...castles];

    // you can see every castle when continent is All;  filter by continent
    if (continent !== 'All') {
      tempCastles = tempCastles.filter(castle => castle.continent === continent);
    }

    // filter by price
    tempCastles = tempCastles.filter(castle => castle.price <= price);

    // filter by size
    tempCastles = tempCastles.filter(castle => castle.size >= minSize && castle.size <= maxSize);

    // filter by extras
    if (haunted) {
      tempCastles = tempCastles.filter(castle => castle.haunted)
    }
    if (premium) {
      tempCastles = tempCastles.filter(castle => castle.premium)
    }
    if (freeAlcohol) {
      tempCastles = tempCastles.filter(castle => castle.freeAlcohol)
    }

    tempCastles.sort((a, b) => a.price - b.price);

    this.setState({
      filteredCastles: tempCastles,
    })
  }

  render() {
    // console.log('render in context')
    return (
      <CastleContext.Provider value={{
        ...this.state,
        getCastle: this.getCastle,
        handleChange: this.handleChange,
      }}>
        {this.props.children}
      </CastleContext.Provider>
    );
  }
}

const CastleConsumer = CastleContext.Consumer;

export { CastleContext, CastleConsumer, CastleProvider };