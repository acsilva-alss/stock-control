import { Dimension, Item, ItemRepository } from "../../../domain";
import { Connection } from "../../connection/Connection";

export class ItemRepositoryDatabase implements ItemRepository {
  constructor(readonly connection: Connection){}
  
  async getById(id: number): Promise<Item | undefined> {
    const [dbItem] = await this.connection.query('select * from ecommerce.item where id_item = $1', [id])
    if(!dbItem) return undefined
    const dimension = new Dimension(dbItem.height, dbItem.width, dbItem.length, dbItem.weight)
    return Item.restore(dbItem.id, dbItem.name, dbItem.description, dbItem.price, dimension)
  }

  async save(item: Item): Promise<void> {
    await this.connection.query('insert into ecommerce.item (category, description, price, width, height, length, weight) values ($1, $2, $3, $4, $5, $6, $7)', 
      [item.category, item.description, item.price, item.dimension.width, item.dimension.height, item.dimension.length, item.dimension.weight]
    )
  }

  async clear(): Promise<void> {
    await this.connection.query('delete from ecommerce.item', [])
  }
}