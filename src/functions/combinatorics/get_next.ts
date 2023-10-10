import WriteLongF from "../long_numbers/write_long";
import Eq from "../long_numbers/eg";
import {Print} from "../help/print";
import {Swap} from "./swap";

export default function GetNext(A:number[],N:number):number[] {
    let P:number[] = [...A];
    let i:number = 0,j:number = 0;
    i = N;
    while(i > 1 && P[i] < P[i - 1]) i--;
    j = N;
    while(P[j] < P[i - 1]) j--;
    let abObjVar = Swap(P[i-1],P[j]);
    P[i-1] = abObjVar.a;
    P[j] = abObjVar.b;
    for(j = 0;j <= (Math.floor((N-i+1)/2)-1);i++) {
        let abObjVar = Swap(P[i+j],P[N-j]);
        P[i+j] = abObjVar.a;
        P[N-j] = abObjVar.b;
    }
    return P;
}

export function GetNextLexicoGraficeski(A:number[],N:number):number[] {
    let P:number[] = [...A];
    let i:number = 0,j:number = 0;
    i = N;
    while(i > 1 && P[i] < P[i - 1]) i--;
    j = N;
    while(P[j] < P[i - 1]) j--;
    let abObjVar = Swap(P[i-1],P[j]);
    P[i-1] = abObjVar.a;
    P[j] = abObjVar.b;
    for(j = 0;j <= (Math.floor((N-i+1)/2)-1);i++) {
        let abObjVar = Swap(P[i+j],P[N-j]);
        P[i+j] = abObjVar.a;
        P[N-j] = abObjVar.b;
    }
    return P;
}

export function GetNextTest() {
    let P:number[] = [3,3,2,1];
    let Last:number[] = [];
    let osn:number = 10;
    let N:number = 3;
    //Print(P);
    while (!Eq(P,Last,osn)) {

        if (Last[0] == undefined) Last = [...P];
        Last = GetNext(Last,N);
        Print(Last,'Last');
        
        
    }
}