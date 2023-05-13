export class CustomError extends Error {

  constructor(message?: string) {
    super(message || "There was some unknown error.");
  }

}
