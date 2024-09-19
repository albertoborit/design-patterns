class Iterator {
    constructor(items){
        this.items = items
        this.index = 0 // or if backwards: <items.length -1>
    }
    hasNext(){
        return this.index < this.items.length // or if backwards: <this.index >= 0>
    }
    nextItem(){
        return this.items[this.index++] // or if backwards this.index--
    }
}

const items = ["1", false, 42]

const iterator = new Iterator(items)

console.log(iterator.nextItem())
console.log(iterator.hasNext())
console.log(iterator.nextItem())
console.log(iterator.nextItem())