import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from './Controller';
import { PgExerciseRepository } from '../../../Contexts/Rutine/Exercises/infrastructure/persistence/PgExerciseRepository';
import { Exercise } from '../../../Contexts/Rutine/Exercises/domain/Exercise';
import { ExerciseId } from '../../../Contexts/Rutine/Exercises/domain/ExerciseId';

export class ExercisePutController implements Controller {
  async run(req: Request, res: Response): Promise<void> {
    try {
      const idParam = new ExerciseId(req.params.id);
      const { id, name, muscle, bar } = req.body;
      const exercise = Exercise.fromPrimitives({ id, name, muscle, bar });

      await new PgExerciseRepository().update(idParam, exercise);
      res.sendStatus(httpStatus.OK);
    } catch (e) {
      res.sendStatus(httpStatus.NOT_FOUND);
    }
  }
}
