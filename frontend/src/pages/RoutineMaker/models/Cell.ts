export interface Cell {
  exercise: string;
  series: string;
  repetitions: string;
  weight: string;
  cell?: {
    row: number;
    column: number;
  };
}
