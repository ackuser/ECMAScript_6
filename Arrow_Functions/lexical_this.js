class Fives {
    constructor() {
        this.nums = [1,2,3,4,5,6,7,8,9,10],
        this.fives = []
    }
    toString() {
      this.nums.forEach((v) => {
          if (v % 5 === 0)
              this.fives.push(v)
              console.log(this.fives)
      })
    }
}

let example = new Fives( )
example.toString()
