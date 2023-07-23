export default class HandlerNtFoundAccounts extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'Erro na busca';
    }
  }