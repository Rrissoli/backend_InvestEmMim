import { DateTime } from 'luxon'
import { BaseModel, beforeSave, column } from '@ioc:Adonis/Lucid/Orm'
import Hash from '@ioc:Adonis/Core/Hash'

export default class Count extends BaseModel {
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
  public idWalletFii:number
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
