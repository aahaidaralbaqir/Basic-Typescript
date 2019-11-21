// function getName() : string {
//     return "hello, my name is ahmad haidar"
// }


// function printName() : void{
//     console.log('print name')
// }
// console.log(getName())


// argument types
function multiply (a : number,b : number) : number {
    return a * b
}

// let result = multiply(5,3)
type age = number
// console.log(result)


// function as type

type Tambah = (val1 : number, val2 : number) => number

const Add : Tambah  = (val1 : number,val2:number) => {
    return val1 * val2
}

console.log(Add(2,3))

// printName()git

