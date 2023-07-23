import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'counts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string("name").notNullable()
      table.text("password").notNullable()
      table.string("count_number").notNullable()
      table.bigInteger("cpf_ou_cnpj").notNullable()
      table.bigInteger("value").notNullable()
      table.bigInteger("invest_value").notNullable()
      table.bigInteger("id_wallet_fii").notNullable()
      table.bigInteger("id_historical").notNullable()
      table.string("count_type").notNullable()
    
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
