import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from './Controller';
import { PgExerciseRepository } from '../../../Contexts/Rutine/Exercises/infrastructure/persistence/PgExerciseRepository';
import { Exercise } from '../../../Contexts/Rutine/Exercises/domain/Exercise';

export class ExercisePostController implements Controller {
  async run(req: Request, res: Response): Promise<void> {
    try {
      const { id, name, muscle, bar } = req.body;
      const exercise = Exercise.fromPrimitives({ id, name, muscle, bar });
      await new PgExerciseRepository().create(exercise);
      res.sendStatus(httpStatus.OK);
    } catch (e) {
      res.sendStatus(httpStatus.NOT_FOUND);
    }
  }
}
