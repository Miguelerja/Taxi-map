import React, {Component} from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import './styles/map.css';

export default class MapUber extends Component {
  state = {
    viewport: {
      width: '100vw',
      height: '80vh',
      latitude: 53.551086,
      longitude: 9.993682,
      zoom: 15,
    }
  };

  generateMarkers = (list, active) => {
    return list.map((vehicle) => {
      let latitude;
      let longitude;
      let icon;

      if (active === 'taxis') {
        latitude = vehicle.coordinate.latitude;
        longitude = vehicle.coordinate.longitude;
        icon = '/Images/taxi-icon.svg';
      } else {
        longitude = vehicle.coordinates[0];
        latitude = vehicle.coordinates[1]; 
        icon = '/Images/car2go-smart-car.png';
      };

      return (
        <Marker
          latitude={latitude}
          longitude={longitude}
          >
          <img className='icon' src={icon} alt='taxi icon' />
        </Marker>
      );
    });
  };

  render() {
    const { taxis, cars, active } = this.props;

    return (
      <ReactMapGL
        mapboxApiAccessToken={'pk.eyJ1IjoiYWplciIsImEiOiJjanNwdHJreTkweHRrM3lyMnF5eG03YmYxIn0.myLECOiJBHCAM3rF00_vXw'}
        mapStyle='mapbox://styles/mapbox/streets-v11'
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
        >
        {(active === 'taxis')
          ? this.generateMarkers(taxis, active)
          : this.generateMarkers(cars, active)
        }
      </ReactMapGL>
    );
  };
};
