import {getInvestmentByName} from "../../../../app/Services/AlphaVantageServices/getInvestByName"
import { test, expect } from "@jest/globals";
test("A Função deve retornar uma relação de valores de acordo com o nome dado", async ()=> {
    const resposta = {
        "Global Quote": {
            "01. symbol": "AAPL",
            "02. open": "194.1000",
            "03. high": "194.9700",
            "04. low": "191.2300",
            "05. price": "191.9400",
            "06. volume": "71951683",
            "07. latest trading day": "2023-07-21",
            "08. previous close": "193.1300",
            "09. change": "-1.1900",
            "10. change percent": "-0.6162%"
        }
    }
    const esperado = await  getInvestmentByName("AAPL")
    
    expect(esperado).toEqual(resposta)
})