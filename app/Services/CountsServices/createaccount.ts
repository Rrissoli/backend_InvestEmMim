import Count from "App/Models/Count";

export async function createAccount(body: any) {
    try {
        
        const account = await Count.create({...body})
        console.log(account)
        
        
        
        const sentence = account.$isPersisted ? account : false
        return sentence
    } catch (error) {
        throw new Error(error)
    }
}