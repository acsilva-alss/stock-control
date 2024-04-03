export interface Connection {
  query(sqlQuery: string, params: Array<any>): Promise<any>
  disconnect(): Promise<void>
}