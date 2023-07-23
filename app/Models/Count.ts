import { DateTime } from 'luxon'
import { BaseModel, HasMany, beforeSave, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Hash from '@ioc:Adonis/Core/Hash'
import Wallet from './Wallet'

export default class Count extends BaseModel {
  @hasMany(() => Wallet)
  public wallets: HasMany<typeof Wallet>



  @column({ isPrimary: true })
  public id: number
  
  @column()
  public name:string
  @column()
  public countNumber:string
  @column()
  public password:string
  @column()
  public countType:string
  @column()
  public investValue:number
  @column()
  public value:number
  @column()
  public cpfOuCnpj:number
  
  @column()
  public idHistorical:number
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword (count: Count) {
    if (count.$dirty.password) {
      count.password = await Hash.make(count.password)
    }
  }
}
