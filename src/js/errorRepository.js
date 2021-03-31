class ErrorRepository {
  constructor(array) {
    this.map = new Map(array);
  }

  // eslint-disable-next-line consistent-return
  translate(code) {
    let result = false;
    for (const i of this.map) {
      if (i[0] === code) {
        result = i[1];
      }
    }
    if (result) {
      return result;
    }
    throw new Error('Unknown error');
  }
}

export default ErrorRepository;

