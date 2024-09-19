class Person {
    constructor(name, age, weight, height){
        this.name = name
        this.age = age
        this.weight = weight
        this.height = height
    }
}

class PersonBuilder {
    constructor(name, age){
        this.name = name
        this.age = age
        this.height = null
        this.weight = null
        this.setWeight = (weight) => {
            this.weight = weight
            return this
        }
        this.setHeight = (height) => {
            this.height = height
            return this
        }
        this.build = () => {
            return new Person(this.name, this.age, this.weight, this.height)
        }
    }
}

const person = new PersonBuilder("Alberto", 100).setHeight(1000).setWeight(1000).build()
console.log(person)