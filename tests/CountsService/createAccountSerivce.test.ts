import { describe, it, expect } from "@jest/globals";
import createAccount from "App/Services/CountsServices/createaccount";


describe("Teste de serviços de criação de contas ", () => {
    it("criar uma conta e deve retornar a conta criada", async () => {
        const resposta = await createAccount({
                "name":  "Raqweqw",
                "password": "123",
                "countNumber": "1",
                "cpfOuCnpj": 32198978865,
                "value": 1231234,
                "investValue": 123123,
                "countType": "personal",
                "idHistorical": 675
        })
        const esperado = {
            "name":  "Raqweqw",
            "password": "123",
            "countNumber": "1",
            "cpfOuCnpj": 32198978865,
            "value": 1231234,
            "investValue": 123123,
            "countType": "personal",
            "idHistorical": 675
        }
        expect(esperado).toEqual(resposta)
    })
})