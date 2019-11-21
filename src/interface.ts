interface Laptop {
    name : string
    on () : void
    of () : void
}

class Asus implements Laptop {
    name : string
    constructor(name:string){
        this.name = name
    }
    on(): void {
        console.log(this.name,'nyala')
    }
    of(): void {
        console.log(this.name,'mati')
    }


}

let asus = new Asus('kampret')
asus.on()