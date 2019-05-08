import vehicleService from './vehicleService';

export default async () => {
  const { placemarks } = await vehicleService.getCars();
  const { poiList } = await vehicleService.getTaxis();

  return {
    taxis: poiList,
    cars: placemarks,
  };
};
