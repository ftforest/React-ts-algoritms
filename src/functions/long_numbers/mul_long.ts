import FillZero from "./fill_zero";

export default function MulLong(A:number[],B:number[],osn:number):number[] {
    let C:number[] = FillZero(A[0]+B[0]);
    let dv:number;
    for (let i = 1;i <= A[0]; i++) {
        for (let j = 1;j <= B[0]; j++) {
            dv = A[i] * B[j] + C[i + j - 1];

            C[i + j] += Math.floor(dv / osn);
            C[i + j - 1] = dv % osn;
        }
    }
    C[0] = A[0] + B[0];
    while (C[0] > 1 && C[C[0]] == 0){ C[0]--; C.pop();}
    return C;
}