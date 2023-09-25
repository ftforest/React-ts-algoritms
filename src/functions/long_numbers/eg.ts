export default function Eq (A:number[],B:number[],osn:number):boolean {
    let eq = false;
    if (A[0] == B[0]) {
        let i = 1
        while (i <= A[0] && A[i] == B[i]) i++;
        if (i == (A[0]+1)) eq = true;
    }
    return eq;
}