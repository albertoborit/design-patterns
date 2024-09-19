class Computer {
    constructor(){
        this.total = 0
    }

    compute(number){
        this.total += number
        console.log(this.total)
        return this
    }
}

const computer = new Computer(42)
computer.compute(24)
.compute(10)
.compute(1)
console.log(computer)