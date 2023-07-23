import Count from "App/Models/Count"
import Wallet from "App/Models/Wallet"

export async function createWallet(body: any, accountId: number) {
    try {
        await Count.findOrFail(accountId)
        body.accountId = accountId
        console.log(body)
        const wallet = await Wallet.create(body)
        
        const sentence = wallet.$isPersisted ? wallet : false
        return sentence
    } catch (error) {
        throw new Error(error)
    }
}