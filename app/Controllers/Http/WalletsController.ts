import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Wallet from 'App/Models/Wallet'
import { createWallet } from 'App/Services/WalletServices/createWallet'
import { deleteWallets } from 'App/Services/WalletServices/deleteWallet'
import { listAllWalletsByAccountId } from 'App/Services/WalletServices/listAllAccountsByAccountId'
import updateBalanceByIdWallet from 'App/Services/WalletServices/updateBalanceByIdWallet'

export default class WalletsController {
    public async index({ request, response }: HttpContextContract) {
        try {
            const accountId = request.param("accountId")
            const wallet = await listAllWalletsByAccountId(accountId)
            if (wallet) {
                response.status(200)
                return wallet
            } else {
                response.status(404)
                return "não existe esta conta"
            }
        } catch (error) {
            throw new Error(error)
        }
    }
    public async store({ request, response }: HttpContextContract) {
        try {
            const body = request.body()
            const accountId = request.param("accountId")

            const wallet = await createWallet(body, accountId)

            if (wallet) {
                response.status(201).send({ "message": "carteira criada" })
                return wallet
            }
            else {
                response.status(404)
                return "não conseguiu criar conta"
            }
        } catch (error) {
            throw new Error(error)
        }
    }
    public async updateBalance({ request, response }: HttpContextContract) {

        try {
            const walletId = request.param("id")
            const body = request.body()
            const balance = body.balance
            const wallet = await updateBalanceByIdWallet(walletId, balance)
            if (wallet) {
                response.status(203).json({ "message": `Wallet ${wallet.id}, foi atualizada` })
            } else {
                response.status(503).json({ "message": "não foi possível atualizar" })
            }
        } catch (error) {
            throw new Error(error)
        }

    }
    public async destroyWallet({ request, response }: HttpContextContract) {
        try {
            const walletId = request.param("id")
            const id = await deleteWallets(walletId)
            if (id) {
                response.status(200).send(`Wallet deletada com sucesso`)
            } else {
                response.status(404).send('Não foi possível deletar')
            }
        } catch (error) {
            throw new Error(error)
        }


    }

}
