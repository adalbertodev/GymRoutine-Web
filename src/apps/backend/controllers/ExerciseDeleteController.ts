import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from './Controller';
import { PgExerciseRepository } from '../../../Contexts/Rutine/Exercises/infrastructure/persistence/PgExerciseRepository';
import { ExerciseId } from '../../../Contexts/Rutine/Exercises/domain/ExerciseId';

export class ExerciseDeleteController implements Controller {
  async run(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await new PgExerciseRepository().delete(new ExerciseId(id));
      res.sendStatus(httpStatus.OK);
    } catch (e) {
      res.sendStatus(httpStatus.NOT_FOUND);
    }
  }
}
