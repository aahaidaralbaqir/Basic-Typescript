import iLaptop from './iLaptop'

class BaseLaptop<T> implements iLaptop<T>{
    name: string;
    type: T;
    withNumeric: boolean;
    withTouchButton: boolean;

    constructor(nam:string, type:T, numeric:boolean, touchButton:boolean) {
        this.name = name
        this.type = type
        this.withNumeric = touchButton
        this.withTouchButton = touchButton
    }
}