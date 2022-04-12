import { Router, Request, Response } from 'express';
import { ExerciseGetController } from '../controllers/ExeciseGetController';
import { ExercisesGetController } from '../controllers/ExercisesGetController';
import { ExercisePostController } from '../controllers/ExercisePostController';
import { ExercisePutController } from '../controllers/ExercisePutController';
import { ExerciseDeleteController } from '../controllers/ExerciseDeleteController';

export const register = (router: Router) => {
  router.get('/api/exercises', (req: Request, res: Response) => {
    new ExercisesGetController().run(req, res);
  });

  router.get('/api/exercises/:id', (req: Request, res: Response) => {
    new ExerciseGetController().run(req, res);
  });

  router.post('/api/exercises/add', (req: Request, res: Response) => {
    new ExercisePostController().run(req, res);
  });

  router.put('/api/exercises/:id', (req: Request, res: Response) => {
    new ExercisePutController().run(req, res);
  });

  router.delete('/api/exercises/:id', (req: Request, res: Response) => {
    new ExerciseDeleteController().run(req, res);
  });
};
