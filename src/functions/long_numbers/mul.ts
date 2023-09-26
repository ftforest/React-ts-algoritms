import FillZero from "./fill_zero";

export default function Mul(A:number[],K:number,osn:number):number[] {
    let C:number[] = [];
    C = FillZero(A[0]);
    console.log(C,'C')
    if (K == 0) C[0]++;
    else {
        for (let i= 1;i <= A[0];i++) {
            if(i != A[0] && Math.floor((A[i] * K + C[i]) / osn) > 0)
                C[i+1] = Math.floor((A[i] * K + C[i]) / osn);
            C[i] = (A[i] * K + C[i]) % osn;
        }
        if ((C[A[0]+1]) > 0) {
            C[0] = A[0] + 1;
        } else {
            C[0] = A[0];
        }
    }
    return C;
}