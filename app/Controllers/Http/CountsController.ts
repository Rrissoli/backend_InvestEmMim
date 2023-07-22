import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { createAccount } from 'App/Services/CountsServices/createaccount'
import { listAllAccounts } from 'App/Services/CountsServices/listAllAccounts'

export default class CountsController {
  public async index({ request, response }: HttpContextContract) {
    try {
      const counts = await listAllAccounts()
      if (!counts) {
        response.status(200)
        return "haven't accounts"
      }
      response.status(200)
      return counts
    } catch (error) {
      throw new Error(error)
    }
  }

  public async create({ }: HttpContextContract) { }

  public async store({ request, response }: HttpContextContract) {
    try {
        const body = request.body()
        
        const account = await createAccount(body)
        
        if(account){
          response.status(200)
          return account
        }
        else{
          response.status(404)
          return "não conseguiu criar conta"
        }
    } catch (error) {

    }
  }

  public async show({ }: HttpContextContract) { }

  public async edit({ }: HttpContextContract) { }

  public async update({ }: HttpContextContract) { }

  public async destroy({ }: HttpContextContract) { }
}
