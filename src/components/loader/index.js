import React, { Component } from 'react';

// https://loading.io/
export default class Loader extends Component {
  render() {
    const loader = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: transparent; display: block;" width="111px" height="111px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <circle cx="50" cy="50" r="45.091" fill="none" stroke="#93dbe9" stroke-width="2">
          <animate attributeName="r" repeatCount="indefinite" dur="0.9615384615384615s" values="0;46" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.4807692307692307s"></animate>
          <animate attributeName="opacity" repeatCount="indefinite" dur="0.9615384615384615s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.4807692307692307s"></animate>
        </circle>
        <circle cx="50" cy="50" r="26.6555" fill="none" stroke="#689cc5" stroke-width="2">
          <animate attributeName="r" repeatCount="indefinite" dur="0.9615384615384615s" values="0;46" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline"></animate>
          <animate attributeName="opacity" repeatCount="indefinite" dur="0.9615384615384615s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline"></animate>
        </circle>
        </svg>`;
    return (
      <div style={{ width: '100%' }}
        dangerouslySetInnerHTML={{ __html: loader }} />
    );
  }
}