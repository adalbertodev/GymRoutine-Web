export default interface User {
  readonly id: string;
  readonly name: string;
  readonly password: string;
}

export interface UserDB {
  readonly id: string;
  readonly name: string;
  readonly password: string;
}
