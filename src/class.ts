export class User {
    // public name : string
    // constructor(name : string) {
    //     this.name = name
    // }

    constructor(public name : string, public age : number) {
        this.name = name
    }
}

let user = new User('haidar albaqir',12)
console.log(user)