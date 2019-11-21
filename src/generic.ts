function getData(value : any) {
    return value
}

function myData<T>(value : T){
    return value
}

console.log(myData(123))
console.log(myData('haidar albaqir').length)