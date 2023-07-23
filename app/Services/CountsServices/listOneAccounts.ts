import Count from "App/Models/Count"

export default async function listOneAccount(id:number) {
    try {
        const account = Count.find(id)
        return account
    } catch (error) {
        throw new Error(error)
    }
    
}