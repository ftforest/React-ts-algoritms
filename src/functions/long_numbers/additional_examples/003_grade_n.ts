import Mul from "../mul";

export default function GradeN(num:number,N:number,osn:number):number[] {
    let C:number[] = [1,num];
    for (let i = 1;i < N;i++) {
        C = Mul(C,num,osn);
    }
    return C;
}