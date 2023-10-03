import Mul from "../mul";

export default function Fac(N:number,osn:number):number[] {
    let C:number[] = [1,1];
    for (let i = 1;i <= N;i++) {
        C = Mul(C,i,osn);
    }
    return C;
}