import Count from "App/Models/Count";

export async function listAllAccounts() {
    try {
        const accounts = await Count.all()
        return accounts
    } catch (error) {
        throw new Error(error)
    }
}