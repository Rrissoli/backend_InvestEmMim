import Count from "App/Models/Count"


export default async function createAccount(body: any) {
    try {
        
        const account = await Count.create(body)
        
        const sentence = account.$isPersisted ? account : false
        return sentence
    } catch (error) {
        throw new Error(error)
    }
}