import { Client, QueryResult } from 'pg';
import { DataItem } from '../../../domain/DataItem';

export abstract class PgRepository<T extends DataItem> {
  constructor(private _client: Client) {}

  protected abstract tableName(): string;

  client(): Client {
    return this._client;
  }

  protected async findOne(id: string): Promise<QueryResult<any>> {
    await (await this._client).connect();
    const result = (await this._client).query(`SELECT * FROM ${this.tableName} WHERE id = ${id}`);

    await (await this._client).end();
    return result;
  }

  protected async persist(id: string, dataItem: T): Promise<void> {
    await (await this._client).connect();
    (await this._client).query(`UPDATE ${this.tableName} SET ${dataItem.toPrimitives()} WHERE id = ${id}`);

    await (await this._client).end();
  }
}
