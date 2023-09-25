import More from "./more";
import Eq from "./eg";

export default function More_Eq(A:number[],B:number[],osn:number):boolean {
    let More_Eq = More(A,B,osn) || Eq(A,B,osn);
    return More_Eq;
}