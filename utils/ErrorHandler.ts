export class ErrorHandler extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public data?: object
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = data;
  }
}
