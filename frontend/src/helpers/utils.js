export function determineState (interior, exterior) {
  if (interior === 'GOOD' && exterior === 'GOOD') {
    return {
      description: 'Excellent',
      styling: 'success',
    };
  } else if (interior === 'UNACCEPTABLE' && exterior === 'UNACCEPTABLE') {
    return {
      description: 'Bad',
      styling: 'danger',
    };
  } else {
    return {
      description: 'Normal',
      styling: 'info'
    };
  };
};

export function determineFuelLevel (fuel) {
  if (fuel > 90) {
    return {
      description: 'Full',
      styling: 'success',
    }; 
  } else if (fuel > 50) {
      return {
        description: 'High',
        styling: 'info',
      };
    } else if (fuel === 50) {
      return {
        description: 'Half',
        styling: 'warning',
      };
    } else {
      return {
        description: 'Low',
        styling: 'danger', 
      };
    };
};

export function filterTaxis (onlyActiveTaxis, taxis) {
  if(onlyActiveTaxis) {
    return taxis.filter((taxi) => taxi.state === 'ACTIVE');
  };

  return taxis;
};

export function filterCars (filterByFuelLevel, filterByState, cars) {
  if(filterByFuelLevel && filterByState) {
    return cars.filter((car) => {
      const { description: fuel } = determineFuelLevel(car.fuel);
      const { description: state } = determineState(car.interior, car.exterior);
      return fuel !== 'Low' && state === 'Excellent';
    });
  };

  if(filterByFuelLevel && !filterByState) {
    return cars.filter((car) => {
      const { description: fuel } = determineFuelLevel(car.fuel);
      return fuel !== 'Low';
    });
  };

  if(filterByState && !filterByFuelLevel) {
    return cars.filter((car) => {
      const { description: state } = determineState(car.interior, car.exterior);
      return state === 'Excellent';
    });
  };

  return cars;
};