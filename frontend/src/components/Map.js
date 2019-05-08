import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


export default class Map extends Component {
  geolocation = new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true
    },
    trackUserLocation: true
  });

  componentDidMount() {
    const mapConfig = {
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [2.1905327, 41.397765199999995],
      zoom: 9,
    };

    mapboxgl.accessToken = 'pk.eyJ1IjoiYWplciIsImEiOiJjanNwdHJreTkweHRrM3lyMnF5eG03YmYxIn0.myLECOiJBHCAM3rF00_vXw';
  
    this.map = new mapboxgl.Map(mapConfig);

    this.map.on('load', () => {
      this.map.addControl(this.geolocation)
    });
  };

  render() {
    return <div id='map' className='map' data-test='map'></div>;
  };
};
