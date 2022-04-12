import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from './Controller';
import { PgExerciseRepository } from '../../../Contexts/Rutine/Exercises/infrastructure/persistence/PgExerciseRepository';

export class ExercisesGetController implements Controller {
  async run(req: Request, res: Response): Promise<void> {
    try {
      const data = await new PgExerciseRepository().searchAll();
      res.status(httpStatus.OK).json(data);
    } catch (e) {
      res.sendStatus(httpStatus.NOT_FOUND);
    }
  }
}
