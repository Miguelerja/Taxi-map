import React, { Component } from 'react';
import propTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import './styles/map.css';


export default class Map extends Component {
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
      zoom: 9,
    };

    mapboxgl.accessToken = 'pk.eyJ1IjoiYWplciIsImEiOiJjanNwdHJreTkweHRrM3lyMnF5eG03YmYxIn0.myLECOiJBHCAM3rF00_vXw';
  
    this.map = new mapboxgl.Map(mapConfig);

    this.map.on('load', () => {
      this.map.addControl(this.geolocation);

      const popUpConfig = {
        closeButton: false,
        className: 'popup',
      };

      
      if (active === 'taxis') {
        taxis.forEach((taxi) => {
          const popUp = new mapboxgl.Popup(popUpConfig)
            .setText(taxi.id);

          new mapboxgl.Marker({ 'color': 'red' })
            .setLngLat([taxi.coordinate.longitude, taxi.coordinate.latitude])
            .setPopup(popUp)
            .addTo(this.map);

        });
      } else {
        cars.forEach((car) => {
          new mapboxgl.Marker({ 'color': 'green' })
            .setLngLat(car.coordinates)
            .addTo(this.map);
        });
      };
    });
  };

  render() {
    return <div id='map' className='map' data-test='map'></div>;
  };
};

Map.propTypes = {
  taxis: propTypes.arrayOf(propTypes.object),
  cars: propTypes.arrayOf(propTypes.object),
}
