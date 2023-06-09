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
    const timeDate = this.dateNatal.getTime() - this.DateActual.getTime();
    return timeDate;
  }

  get daysTime() {
    const days = Math.floor(this.dateTimeStamp / (24 * 60 * 60 * 1000));
    return days;
  }

  get hoursTime() {
    const hours = Math.floor(this.dateTimeStamp / (60 * 60 * 1000));
    return hours;
  }

  get minutesTime() {
    const minutes = Math.floor(this.dateTimeStamp / (60 * 1000));
    return minutes;
  }

  get secondsTime() {
    const seconds = Math.floor(this.dateTimeStamp / 1000);
    return seconds;
  }

  get faltamDias() {
    const days = this.daysTime;
    const hours = this.hoursTime % 24;
    const minutes = this.minutesTime % 60;
    const seconds = this.secondsTime % 60;

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }
}
