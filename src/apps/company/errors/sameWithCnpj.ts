export class SameWithCnpj extends Error {
  constructor() {
    super('CNPJ already registered.')
  }
}
