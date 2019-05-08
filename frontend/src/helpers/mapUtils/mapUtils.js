export function setMarkerData(vehicle, active) {
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