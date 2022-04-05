import { Client, Pool } from 'pg';

export abstract class PgRepository {
  constructor(private _client: Promise<Client>) {}

  protected abstract moduleName(): string;

  protected client(): Promise<Client> {
    return this._client;
  }
}
