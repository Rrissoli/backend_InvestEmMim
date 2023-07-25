
import { test } from "@japa/runner";
import { getInvestmentByName } from "App/Services/AlphaVantageServices/getInvestByName";

    test("A Função deve retornar uma relação de valores de acordo com o nome dado", async () => {
        const resposta = {
            "Global Quote": {
                "01. symbol": "AAPL",
                "02. open": "193.4100",
                "03. high": "194.9100",
                "04. low": "192.2500",
                "05. price": "192.7500",
                "06. volume": "45505097",
                "07. latest trading day": "2023-07-24",
                "08. previous close": "191.9400",
                "09. change": "0.8100",
                "10. change percent": "0.4220%",
            }
        }
        const esperado = await getInvestmentByName("AAPL")

        
    })
