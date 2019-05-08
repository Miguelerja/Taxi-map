import axios from 'axios';

class CarService {
  constructor() {
    this.vehicles = axios.create({
      baseURL: 'http://localhost:5000',
    });
  };

  getTaxis(){
    return this.vehicles.get('/mytaxi/vehicles')
      .then(({ data }) => data);
  }
  
  getCars(){
    return this.vehicles.get('/car2go/vehicles')
      .then(({ data }) => data);
  }
};

const carService = new CarService();

export default carService;
