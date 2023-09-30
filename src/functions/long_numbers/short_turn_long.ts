import Mul from "./mul";

export default function ShortTurnLong (K:number,osn:number = 10000):number[] {
    //debugger
    let A:number[] = [0];
    while(K > 0) {
        let ost = K % osn;
        K -= ost;
        K = K / osn
        A[0]++;
        A[A[0]] = ost;
    }
    return A;
}