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
  switch (fuel) {
    case fuel > 90:
      return {
        description: 'Full',
        styling: 'success',
      };
    case fuel > 50:
      return {
        description: 'High',
        styling: 'info',
      };
    case fuel === 50:
      return {
        description: 'Half',
        styling: 'warning',
      };
    default:
      return {
        description: 'Low',
        styling: 'danger', 
      };
  };
};
