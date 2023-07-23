import HandlerNtFoundAccounts from "App/Exceptions/HandleNotFoundAccount"
import Wallet from "App/Models/Wallet"

export async function deleteWallets(walletId:number) {
    try {
        const wallet = await Wallet.findOrFail(walletId)
        await wallet.delete()
        const sentence = wallet != null ? walletId : false
        return sentence
    } catch (error) {
        throw new HandlerNtFoundAccounts("não foi possível encontrar está conta")
    }
}