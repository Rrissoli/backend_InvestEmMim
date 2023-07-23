import HandlerNtFoundAccounts from "App/Exceptions/HandleNotFoundAccount";
import Count from "App/Models/Count";

export async function deleteAccounts(id:number) {
    try {
        const accounts = await Count.findOrFail(id)
        await accounts.delete()
        const sentence = accounts != null ? id : false
        return sentence
    } catch (error) {
        throw new HandlerNtFoundAccounts("não foi possível encontrar está conta")
    }
}