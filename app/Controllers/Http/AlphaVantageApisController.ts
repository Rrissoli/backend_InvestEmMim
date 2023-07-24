import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { getInvestmentByName } from 'App/Services/AlphaVantageServices/getInvestByName';



export default class AlphaVantageApisController {
    public async getByName({ request, response }: HttpContextContract) {
        try {
            const body = request.body()
            
            const name = body.name
            const investment = await getInvestmentByName(name)
            if(investment){
                return response.status(200).json({"data": investment})
            }else{
                return response.status(404)
            }
        } catch (error) {
            throw new Error(error);

        }
    }
}
