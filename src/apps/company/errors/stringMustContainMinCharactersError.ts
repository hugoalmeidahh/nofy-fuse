export class StringMustContainMinCharactersError extends Error {
  constructor() {
    super('String must contain at least 15 character(s)')
  }
}
