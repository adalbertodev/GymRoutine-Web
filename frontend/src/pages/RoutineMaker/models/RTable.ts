import Exercise from '../../../models/Exercise';
import { Row } from './Row';

export interface RTable {
  rows: Row[];
  exercises?: Exercise[];
}
