import React, { Component } from 'react';
import propTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import { setTaxiMarkers, setCarMarkers } from '../helpers/mapUtils';
import './styles/map.css';

export default class Map extends Component {
  state = {
    toggle: false,
  };

  geolocation = new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true
    },
    trackUserLocation: true
  });

  componentDidMount() {
    const { taxis, cars, active } = this.props;
    const mapConfig = {
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [9.993682, 53.551086],
      zoom: 15,
    };

    mapboxgl.accessToken = 'pk.eyJ1IjoiYWplciIsImEiOiJjanNwdHJreTkweHRrM3lyMnF5eG03YmYxIn0.myLECOiJBHCAM3rF00_vXw';
  
    this.map = new mapboxgl.Map(mapConfig);

    this.map.on('load', () => {
      this.map.addControl(this.geolocation);
      console.log('map load')

      if (active === 'taxis') {
        setTaxiMarkers(taxis, this.map);
      } else {
        setCarMarkers(cars, this.map);
      };
    });
  };

  componentDidUpdate(prevProps) {
    if (this.props.active !== prevProps.active) {
      this.setState({toggle: !this.state.toggle});
    };
  };

  render() {
    return <div id='map' className='map' data-test='map'></div>;
  };
};

Map.propTypes = {
  taxis: propTypes.arrayOf(propTypes.object).isRequired,
  cars: propTypes.arrayOf(propTypes.object).isRequired,
  active: propTypes.string.isRequired,
}
