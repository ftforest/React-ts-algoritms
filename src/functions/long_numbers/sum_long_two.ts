export default function SumLongTwoF(A:number[],B:number[],osn:number):number[] {
    let C:number[] = [];
    let k:number = 0;
    if (A[0] > B[0]) k=A[0]; else k=B[0];
    while(C.length <= k) {C.push(0);}

    //if (A[0] == 0 || A[A[0]] >= osn/10  ) {A.push(0);A[0]++;}
    for (let i= 1;i <= k;i++){
        if(i == k && Math.floor((C[i] + A[i] + B[i]) / osn) > 0)C.push(0);

        if (A[i] == undefined) A[i] = 0;
        if (B[i] == undefined) B[i] = 0;
        if (C[i+1] == 0) C[i + 1] = Math.floor((C[i] + A[i] + B[i]) / osn);
        C[i] = (C[i] + A[i] + B[i]) % osn;
    }
    if(C[k+1] == undefined) C[0] = k; else C[0] = k+1;
    return C;
}