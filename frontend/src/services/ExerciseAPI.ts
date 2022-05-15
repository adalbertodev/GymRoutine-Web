import Exercise from '../models/Exercise';
import EndpointExercise from '../models/EndpointExercise';
import { deleteById, deleteByObject, get, getById, post } from './RoutineAPI';
import {
  addaptedToEndpointExercise,
  createAddaptedExercise,
  createAddaptedExercises
} from '../adapters/exerciseAdapter';

export const getExercises = async (): Promise<Exercise[]> => {
  const exercises = await get<EndpointExercise>('exercises');
  return createAddaptedExercises(exercises);
  // try {
  // } catch (err) {
  //   console.error(err);
  //   return [];
  // }
};

export const getExerciseById = async (id: string): Promise<Exercise> => {
  const exercise = await getById<EndpointExercise>('exercises', id);
  return createAddaptedExercise(exercise);
};

export const postExercise = async (exercise: Exercise): Promise<number> => {
  const unAddaptedExercise = addaptedToEndpointExercise(exercise);
  return post<EndpointExercise>('exercises', unAddaptedExercise);
};

export const deleteExerciseById = async (id: string): Promise<number> => {
  return deleteById<EndpointExercise>('exercises', id);
};

export const deleteExercise = async (exercise: Exercise): Promise<number> => {
  const unAddaptedExercise = addaptedToEndpointExercise(exercise);
  return deleteByObject<EndpointExercise>('exercises', unAddaptedExercise);
};
