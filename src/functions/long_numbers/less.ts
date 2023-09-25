import More from "./more";
import Eq from "./eg";

export default function Less(A:number[],B:number[],osn:number):boolean {
    let less = !More(A,B,osn) && !Eq(A,B,osn)
    return less;
}