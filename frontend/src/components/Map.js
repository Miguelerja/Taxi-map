import React, {Component} from 'react';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import VIEWPORT_CONFIG from '../helpers/mapUtils/viewPortConfig';
import generateMarkers from '../helpers/mapUtils/mapUtils';
import './styles/map.css';

export default class MapUber extends Component {
  state = {
    viewport: VIEWPORT_CONFIG,
  };

  render() {
    const { taxis, cars, active } = this.props;

    return (
      <ReactMapGL
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle='mapbox://styles/mapbox/streets-v11'
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
        >
        {(active === 'taxis')
          ? generateMarkers(taxis, active)
          : generateMarkers(cars, active)
        }
      </ReactMapGL>
    );
  };
};
