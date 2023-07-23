import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { createAccount } from 'App/Services/CountsServices/createaccount'
import { deleteAccounts } from 'App/Services/CountsServices/deleteAccounts'
import { listAllAccounts } from 'App/Services/CountsServices/listAllAccounts'
import listOneAccount from 'App/Services/CountsServices/listOneAccounts'
import updateAccounts from 'App/Services/CountsServices/updateAccount'

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
      throw new Error(error)
    }
  }

  public async show({ request, response}: HttpContextContract) {
    try {
      const accountId = request.param("id")
      const count = await listOneAccount(accountId)
      if(count){
        response.status(200)
        return count
      }else{
        response.status(404)
        return "não existe esta conta"
      }
    } catch (error) {
      throw new Error(error)
    }


   }

  public async edit({ }: HttpContextContract) { }

  public async update({ request, response}: HttpContextContract) {

    try {
      const countId = request.param("id")
      const body = request.body()
      const account = await updateAccounts(countId, body)
      if(account){
        response.status(201).json({"message": `Conta ${countId}, foi atualizada`})
      }else{
        response.status(503).json({"message": "não foi possível atualizar"})
      }
    } catch (error) {
      throw new Error(error)
    }

   }

  public async destroy({request , response }: HttpContextContract) {
    try {
      const accountId = request.param("id")
      const id = await deleteAccounts(accountId)
      if(id){
        response.status(200).send(`conta deletada com sucesso`)
      }else{
        response.status(404).send('Não foi possível deletar')
      }
    } catch (error) {
      throw new Error(error)
    }


   }
}


