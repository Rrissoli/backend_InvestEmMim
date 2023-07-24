import { alphaVantageApi } from "../../api/configAlphaVantage/alphaVantageAxios";

export async function getInvestmentByName(name : string) {
    try {
      
        const response = await alphaVantageApi.get('', {
          params: {
            function: 'GLOBAL_QUOTE',
            symbol: name,
            apikey:"MARAEQTHHUDW2NMJ"
          },
        });
        
        return response.data;
      } catch (error) {
        
        throw error;
      }
}