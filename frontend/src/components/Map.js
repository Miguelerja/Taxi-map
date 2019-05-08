import React, {Component} from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import VIEWPORT_CONFIG from '../helpers/mapUtils/viewPortConfig';
import { setMarkerData } from '../helpers/mapUtils/mapUtils';
import './styles/map.css';

export default class MapUber extends Component {
  state = {
    viewport: VIEWPORT_CONFIG,
  };

  generateMarkers = (list, active) => {
    return list.map((vehicle, index) => {
      const { latitude, longitude, icon } = setMarkerData(vehicle, active);

      return (
        <Marker key={latitude + index} latitude={latitude} longitude={longitude}>
          <img className='icon' src={icon} alt='taxi icon' />
          <Popup latitude={latitude} longitude={longitude} closeButton={false}>
          </Popup>
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
