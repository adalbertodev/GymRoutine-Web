import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from './Controller';
import { PgExerciseRepository } from '../../../Contexts/Rutine/Exercises/infrastructure/persistence/PgExerciseRepository';
import { ExerciseId } from '../../../Contexts/Rutine/Exercises/domain/ExerciseId';

export class ExerciseGetController implements Controller {
  async run(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const data = await new PgExerciseRepository().search(new ExerciseId(id));
      res.status(httpStatus.OK).json(data);
    } catch (e) {
      res.sendStatus(httpStatus.NOT_FOUND);
    }
  }
}
