class RealSubject {
    constructor(name) {
        this.name = name;
    }
    request() {
        console.log(`Request made by ${this.name}`);
    }
}

class Proxy {
    constructor(realSubject) {
        this.realSubject = realSubject;
    }

    request() {
        console.log("Proxy: Checking access before forwarding request...");
        if (this.checkAccess()) {
            this.realSubject.request(); // Forward request to the real subject
            this.logAccess();
        } else {
            console.log("Proxy: Access denied!");
        }
    }
    checkAccess() {
        return true; // or false based on some condition
    }
    logAccess() {
        console.log("Proxy: Logging the access request...");
    }
}
const realSubject = new RealSubject("Alberto");
const proxy = new Proxy(realSubject);

proxy.request();
