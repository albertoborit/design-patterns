class Subject {
    constructor(){
        this.observers = []
    }
    subscribe(fn){
        this.observers.push(fn)
    }
    unsubscribe(fnToRemove){
        this.observers = this.observers.filter(fn => {
            if(fn!=fnToRemove)
                return fn
        })
    }
    start(){
        this.observers.forEach(fn => {
            fn.call()
        })
    }
}

const subject = new Subject()

const firstObserver = ()=>console.log("First Observer")
const secondObserver = ()=>console.log("Second Observer")

subject.subscribe(firstObserver)
subject.subscribe(secondObserver)
subject.start()
subject.unsubscribe(secondObserver)
subject.start()