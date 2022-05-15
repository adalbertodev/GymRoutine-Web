import RmExercise from '../models/RmExercise';
import EndpointRmExercise from '../models/EndpointRmExercise';
import {
  addaptedToEndpointExercise,
  createAddaptedExercise
} from './exerciseAdapter';

export const createAddaptedRmExercise = (rmExercise: EndpointRmExercise) => {
  const formattedRmExercise: RmExercise = {
    user: rmExercise.user,
    exercise: createAddaptedExercise(rmExercise.exercise),
    rm: rmExercise.rm
  };

  return formattedRmExercise;
};

export const createAddaptedRmExercises = (
  rmExercises: EndpointRmExercise[]
) => {
  const formattedRmExercises = rmExercises.map((rmExercise) => {
    return createAddaptedRmExercise(rmExercise);
  });

  return formattedRmExercises;
};

export const addaptedToEndpointRmExercise = (rmExercise: RmExercise) => {
  const unformattedRmExercise: EndpointRmExercise = {
    user: rmExercise.user,
    exercise: addaptedToEndpointExercise(rmExercise.exercise),
    rm: rmExercise.rm
  };

  return unformattedRmExercise;
};

export const addaptedsToEndpointRmExercise = (rmExercises: RmExercise[]) => {
  const unformattedRmExercises = rmExercises.map((rmExercise) => {
    return addaptedToEndpointRmExercise(rmExercise);
  });

  return unformattedRmExercises;
};
