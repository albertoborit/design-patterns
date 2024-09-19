class API {
    constructor(){
        this.call = (method) => {
            console.log("Calling API")
            switch(method){
                case 'GET':
                    return "GET Call"
                case 'POST':
                    return "POST Call"
                case 'PATCH':
                    return "PATCH Call"
            }
        }
    }
}

class APIMemo {
    constructor(){
        this.api = new API()
        this.cache = {}
        this.call = (method) => {
            if(this.cache[method]===undefined){
                this.cache[method] = {method: this.api.call(method)}
            }
            return this.cache[method]
        }
    }
}

const proxy = new APIMemo()
console.log(proxy.call("GET"))
console.log(proxy.call("GET"))
console.log(proxy.call("POST"))
console.log(proxy.call("POST"))