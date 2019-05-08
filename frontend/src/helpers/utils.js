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
        description: 'Full tank',
        styling: 'success',
      };
    case fuel > 50:
      return {
        description: 'Tank level ok',
        styling: 'info',
      };
    case fuel === 50:
      return {
        description: 'Tank halved',
        styling: 'warning',
      };
    default:
      return {
        description: 'Tank level low',
        styling: 'danger', 
      };
  };
};
