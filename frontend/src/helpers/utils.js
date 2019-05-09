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
