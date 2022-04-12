import { Client } from 'pg';
import { Nullable } from '../../../../Shared/domain/Nullable';
import { PgRepository } from '../../../../Shared/infrastructure/persistence/pg/PgRepository';
import { Exercise } from '../../domain/Exercise';
import { ExerciseId } from '../../domain/ExerciseId';
import { ExerciseRepository } from '../../domain/ExerciseRepository';

export class PgExerciseRepository extends PgRepository<Exercise> implements ExerciseRepository {
  constructor() {
    super(
      new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false
        }
      })
    );
    this.client().connect(err => {
      if (err) throw err;
      console.log('Connected!');
    });
  }

  async searchAll(): Promise<Nullable<Exercise[]>> {
    const query = `
      SELECT 
        id, name,
        (SELECT name FROM muscles WHERE id = E.muscle) as muscle,
        bar 
      FROM exercises as E
    `;
    const exercises = await this.client().query(query);
    return exercises.rows;
  }

  async search(id: ExerciseId): Promise<Nullable<Exercise>> {
    const query = `
    SELECT 
    id, name,
    (SELECT name FROM muscles WHERE id = E.muscle) as muscle,
    bar 
    FROM exercises as E
    WHERE E.id = '${id.value}'
    `;
    const exercises = await this.client().query(query);
    return exercises.rows[0];
  }

  async create(exercise: Exercise): Promise<void> {
    const query = `
      INSERT INTO exercises(id, name, muscle, bar) VALUES(
        '${exercise.id.value}',
        '${exercise.name.value}',
        (SELECT id from muscles WHERE name = '${exercise.muscle.value}'),
        ${exercise.bar.value}
        )
      `;
    await this.client().query(query);
  }

  async update(id: ExerciseId, exercise: Exercise): Promise<void> {
    const query = `
      UPDATE exercises SET
        id = '${exercise.id.value}',
        name = '${exercise.name.value}',
        muscle = (SELECT id from muscles WHERE name = '${exercise.muscle.value}'),
        bar = ${exercise.bar.value}
      WHERE id = '${id.value}'
      `;
    await this.client().query(query);
  }

  async delete(id: ExerciseId): Promise<void> {
    const query = `
      DELETE FROM exercises
      WHERE id = '${id.value}'
      `;
    await this.client().query(query);
  }

  protected tableName(): string {
    return 'exercises';
  }
}
