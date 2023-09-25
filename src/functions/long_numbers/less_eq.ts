import Eq from "./eg";
import More from "./more";

export default function Less_Eq(A:number[],B:number[],osn:number):boolean {
    let Less_Eq = !More(A,B,osn) || Eq(A,B,osn);
    return Less_Eq;
}