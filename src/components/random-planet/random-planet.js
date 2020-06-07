import React, { Component } from 'react';

import Loader from '../loader';
import Error from '../error';

import SwapiService from '../../services/swapi-service';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {},
    error: false,
    showRandomPlanet: true,
    loading: true
  };

  componentDidMount() {
    console.log('didMount');
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 10000);
  }

  componentWillUnmount() {
    console.log('willUnmount');
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false
    });
  }

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    })
  }

  onToggleRandomPlanet = () => {
    this.setState(({ showRandomPlanet }) => {
      return { showRandomPlanet: !showRandomPlanet }
    });
  }

  updatePlanet = () => {
    console.log('update');
    if (!this.state.showRandomPlanet)
      return false;
    const id = Math.floor(Math.random() * 18) + 1;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  render() {
    console.log('render');
    const { planet, error, loading, showRandomPlanet } = this.state;

    const hasData = (!loading && !error) ? true : false;

    const errorMsg = (error) ? <Error /> : null;
    const loader = (loading) ? <Loader /> : null;
    const content = (hasData) ? <PlanetView planet={planet} /> : null;

    return (
      <div>
        <div
          style={(showRandomPlanet) ? { display: '' } : { display: 'none' }}
          className="random-planet jumbotron rounded">
          {errorMsg}
          {loader}
          {content}
        </div>
        <div className="random-planet jumbotron rounded">
          <button
            type="button"
            onClick={this.onToggleRandomPlanet}
            className="btn btn-outline-warning">Toggle random planet</button>
        </div>
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;

  return (
    <React.Fragment>
      <img className="planet-image"
        alt=""
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
      <div>
        <h4>{name} ({id})</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}