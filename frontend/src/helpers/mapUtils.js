import mapboxgl from 'mapbox-gl';

export function setTaxiMarkers (taxis, map) {
  taxis.forEach((taxi) => {
    const popUp = new mapboxgl.Popup({ closeButton: false, className: 'popUp' })
      .setText(taxi.id);

    new mapboxgl.Marker({ 'color': 'red' })
      .setLngLat([taxi.coordinate.longitude, taxi.coordinate.latitude])
      .setPopup(popUp)
      .addTo(map);
  });
};

export function setCarMarkers (cars, map) {
  cars.forEach((car) => {
    new mapboxgl.Marker({ 'color': 'green' })
      .setLngLat(car.coordinates)
      .addTo(map);
  });
};