import Exercise from './Exercise';

export interface HeadCell {
  content: JSX.Element;
}

export interface Cell {
  exercise?: string;
  series?: string;
  repetitions?: string;
  weight?: string;
  exercises?: Exercise[];
}
