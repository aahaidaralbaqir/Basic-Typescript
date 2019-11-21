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
    phone : string
    private _email : string = ""

    constructor(phone : string,name : string, age : number) {
        super(name,age)
        this.phone = phone
    }

    static getRoleName : string = "Haidar albaqir"

    static getNameRole()  {
        return this.getRoleName
    }

    getRole() : { read : boolean, write : boolean } {
        return {
            read : this.read,
            write : this.write
        }
    }

    set email(value : string) {
        this._email = value
    }

    get email () : string {
       return this._email
    }

}
/**
 * Public = Can be accessed in all classes
 * Protected = Only can be accessed in that class and its children
 * Private = bisa diakses  class tersebut
 */
// let admin = new Admin('081290315248','ahmad haidar albaqir',12);

// console.log(admin.getRole())
// console.log(admin.setName('haidar'))
// console.log(admin.getName())

// admin.email = "ahmadhrasdasd.22@gmail.com"
// console.log(admin.email)
let admin = Admin.getNameRole()

console.log(admin)