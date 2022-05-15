import RmExercise from '../models/RmExercise';
import EndpointRmExercise from '../models/EndpointRmExercise';
import { deleteById, deleteByObject, get, getById, post } from './RoutineAPI';
import {
  addaptedToEndpointRmExercise,
  createAddaptedRmExercise,
  createAddaptedRmExercises
} from '../adapters/rmExerciseAdapter';

export const getRmExercises = async (): Promise<RmExercise[]> => {
  const rmExercises = await get<EndpointRmExercise>('rmExercises');
  return createAddaptedRmExercises(rmExercises);
};

export const getRmExerciseById = async (id: string): Promise<RmExercise> => {
  const rmExercise = await getById<EndpointRmExercise>('rmExercises', id);
  return createAddaptedRmExercise(rmExercise);
};

export const postRmExercise = async (
  rmExercise: RmExercise
): Promise<number> => {
  const unAddaptedRmExercise = addaptedToEndpointRmExercise(rmExercise);
  return post<EndpointRmExercise>('rmExercises', unAddaptedRmExercise);
};

export const deleteRmExerciseById = async (id: string): Promise<number> => {
  return deleteById<EndpointRmExercise>('rmExercises', id);
};

export const deleteRmExercise = async (
  rmExercise: RmExercise
): Promise<number> => {
  const unAddaptedRmExercise = addaptedToEndpointRmExercise(rmExercise);
  return deleteByObject<EndpointRmExercise>(
    'rmExercises',
    unAddaptedRmExercise
  );
};
