import Exercise from '../models/Exercise';
import EndpointExercise from '../models/EndpointExercise';
import {
  deleteById,
  deleteByObject,
  get,
  getByComposeId,
  getById,
  post
} from './RoutineAPI';
import {
  addaptedToEndpointExercise,
  createAddaptedExercise,
  createAddaptedExercises
} from '../adapters/exerciseAdapter';

export const getExercises = async (): Promise<Exercise[]> => {
  const exercises = await get<EndpointExercise>('exercises');
  return createAddaptedExercises(exercises);
};

export const getExerciseById = async (
  userId: string,
  exerciseId: string
): Promise<Exercise> => {
  const exercise = await getByComposeId<EndpointExercise>(
    'exercises',
    userId,
    exerciseId
  );
  return createAddaptedExercise(exercise);
};

export const getExerciseByExerciseId = async (
  exerciseId: string
): Promise<Exercise[]> => {
  const exercises = await getById<EndpointExercise>(
    'exercises',
    `e=${exerciseId}`
  );
  return createAddaptedExercises(exercises as EndpointExercise[]);
};

export const getExerciseByUserId = async (
  userId: string
): Promise<Exercise[]> => {
  const exercises = await getById<EndpointExercise>('exercises', `u=${userId}`);
  return createAddaptedExercises(exercises as EndpointExercise[]);
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
