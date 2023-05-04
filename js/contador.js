export default class Contador {
  constructor(data) {
    this.data = data;
  }

  get dateNatal() {
    const natalDate = new Date(this.data);
    return natalDate;
  }

  get DateActual() {
    const dataActual = new Date();
    return dataActual;
  }

  get dateTimeStamp() {
    const timeDate = this.DateActual.getTime() - this.dateNatal.getTime();
    return timeDate;
  }

  init() {
    console.log(this.dateTimeStamp);
  }
}
