import Wallet from "App/Models/Wallet"


export default async function updateBalanceByIdWallet(id:number, balance: any) {
    try {
        const account = await Wallet.findOrFail(id)
        await account.merge({balance: balance}).save()

        return account
    } catch (error) {
        throw new Error(error)
    }
    
}