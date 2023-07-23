import HandlerNtFoundAccounts from "App/Exceptions/HandleNotFoundAccount"
import Wallet from "App/Models/Wallet"


export async function listAllWalletsByAccountId(accountId:number) {
    try {
        const wallet = await Wallet.query().where('account_id', accountId);  
        return wallet
    } catch (error) {

        throw new HandlerNtFoundAccounts("Erro ao escontrar wallet")
    }
}