import React, { Component } from 'react';

export default class Error extends Component {
  render() {
    return (
      <div style={{ width: '100%', color: 'orange', textAlign: 'center' }}>
        <small>Something bad happened here. We'll fix it soon.</small><br />
        May the force be with you
        </div>
    );
  }
}