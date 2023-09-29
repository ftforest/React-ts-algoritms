import LongDivLong from "./long_div_long";
import ReadLongF from "./read_long";
import MulLong from "./mul_long";
import Sub from "./sub";
import Less from "./less";
import Eq from "./eg";

export default function LongModShort (A:number[],K:number,osn:number = 10000):number[] {
    let C:number[] = [1,0];
    let arrK:number[] = [];
    arrK = ReadLongF(K.toString(),osn)[0];
    if (Less(A,arrK,osn)) return A;
    else if (Eq(A,arrK,osn)) return C;
    C = LongDivLong(A,arrK,osn);
    let Full = MulLong(C,arrK,osn);
    let Res = Sub(A,Full,osn);
    return Res
}