export function determineState (interior, exterior) {
  if (interior === 'GOOD' && exterior === 'GOOD') {
    return 'Excellent';
  } else if (interior === 'UNACCEPTABLE' && exterior === 'UNACCEPTABLE') {
    return 'Bad';
  } else {
    return 'Normal';
  };
};

export function determineFuelLevel (fuel) {
  switch (fuel) {
    case fuel > 90:
      return 'Full tank';
    case fuel > 50:
      return 'Tank level ok';
    case fuel === 50:
      return 'Tank halved';
    default:
      return 'Tank level low';
  };
};
