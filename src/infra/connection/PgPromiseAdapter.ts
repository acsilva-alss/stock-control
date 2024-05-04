
import pgPromise from 'pg-promise'
import { Connection } from './Connection'
import config from '@/config'

export class PgPromiseAdapter implements Connection {
  pgp
  constructor(){
    const pgpInstance = pgPromise()
    this.pgp = pgPromise()(config.databaseUrl)
  }

  async query(sqlQuery: string, params: Array<any>): Promise<any> {
    return await this.pgp.query(sqlQuery, params)
  }

  async disconnect(): Promise<void> {
    return await this.pgp.$pool.end()
  }
}