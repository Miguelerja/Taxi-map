import React from 'react';
import { Marker, Popup } from 'react-map-gl';

function setMarkerData(vehicle, active) {
  if (active === 'taxis') {
    return {
      latitude: vehicle.coordinate.latitude,
      longitude: vehicle.coordinate.longitude,
      icon: '/Images/taxi-icon.svg',
    };
  } else {
    return {
      longitude: vehicle.coordinates[0],
      latitude: vehicle.coordinates[1], 
      icon: '/Images/car2go-smart-car.png',
    };
  };
};

export default function generateMarkers(list, active) {
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