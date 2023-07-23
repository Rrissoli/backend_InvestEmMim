import Count from "App/Models/Count"

export default async function updateAccounts(id:number, body: any) {
    try {
        const account = await Count.findOrFail(id)
        await account.merge(body).save()



        return account
    } catch (error) {
        throw new Error(error)
    }
    
}