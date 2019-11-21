export class User {
    // public name : string
    // constructor(name : string) {
    //     this.name = name
    // }

    // di javascript tidak ada class ada nya prototype
    constructor(public name : string, public age : number) {
        this.name = name
    }
}

/**
 * Public = bisa diakses disemua class / di luar class
 * Protected = bisa diakses  class tersebut atau kelas turunannya
 * Private = bisa diakses  class tersebut
 */

let user = new User('haidar albaqir',12)
console.log(user)