class SimpleDate {
    #year;
    #month;
    #day;
  constructor(year, month, day) {
    // Check that (year, month, day) is a valid date
    // ...

    // If it is, use it to initialize "this" date
    this.#year = year;
    this.#month = month;
    this.#day = day;
  }

  set addDays(nDays) {
   this.#day+=nDays;
  }

  get addedDay() {
      console.log(this.#getDate());
      
    return this.#day;
  }
  #getDate(){
      return `${this.#year}:${this.#month}:${this.#day}`
  }
}

// "today" is guaranteed to be valid and fully initialized
const today = new SimpleDate(2000, 2, 28);

// Manipulating data only through a fixed set of functions ensures we maintain valid state
today.addDays=2;
console.log(today.addedDay);