import React, { Component } from 'react';
import Loader from '../loader';

import SwapiService from '../../services/swapi-service';
export default class ItemList extends Component {

  swapiService = new SwapiService();

  state = {
    peopleList: null
  };

  componentDidMount() {
    this.swapiService
      .getAllPeople()
      .then((peopleList) => {
        this.setState({
          peopleList
        })
      })
      .catch(this.onError);
  }

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    })
  }

  renderItems(arr) {

  }

  render() {

    const { peopleList } = this.state;

    if (!peopleList) {
      return <Loader />
    }

    return (
      <ul className="item-list list-group">
        <li className="list-group-item">
          Luke Skywalker
          </li>
        <li className="list-group-item">
          Darth Vader
          </li>
        <li className="list-group-item">
          R2-D2
          </li>
      </ul>
    );
  }
}