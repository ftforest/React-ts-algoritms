import WriteLongF from "../long_numbers/write_long";

export function Print( C:number[],text:string = '',osn:number = 10):string {
    let strC = WriteLongF(C,osn);
    console.log('Print('+text+'): ',strC)
    return strC;
}