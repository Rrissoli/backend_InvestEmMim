export default class HandlerSetInfoCount extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'AtributosCountError';
    }
  }