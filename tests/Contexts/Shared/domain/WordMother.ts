import randomWords from 'random-words';

export class WordMother {
  static random(): string {
    return randomWords(1)[0];
  }
}
