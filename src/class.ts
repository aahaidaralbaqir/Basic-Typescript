export class User {
    // public name : string
    // constructor(name : string) {
    //     this.name = name
    // }

    constructor(public name : string, public age : number) {
        this.name = name
    }

    setName (value : string) : void {
        this.name  = value
    }

    getName () : string {
        return this.name
    }
}


class Admin extends User {
    read : boolean = true
    write : boolean = true

    getRole() : { read : boolean, write : boolean } {
        return {
            read : this.read,
            write : this.write
        }
    }
}
/**
 * Public = Can be accessed in all classes
 * Protected = Only can be accessed in that class and its children
 * Private = bisa diakses  class tersebut
 */
let admin = new Admin('Toni',12);

console.log(admin.getRole())
console.log(admin.setName('haidar'))
console.log(admin.getName())