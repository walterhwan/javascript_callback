
class Clock {
  constructor() {
    let date = new Date();
    this.hours = date.getHours();
    this.mins = date.getMinutes();
    this.seconds = date.getSeconds();
    this.printTime();

    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    let time = `${this.hours}:${this.mins}:${this.seconds}`;

    console.log(time);
  }

  _tick() {
    this.seconds += 1;
    if (this.seconds === 60) {
      this.mins += 1;
      this.seconds = 0;
    }
    if (this.mins === 60) {
      this.hours += 1;
      this.mins = 0;
    }

    this.printTime();
  }
}


let clock = new Clock();
