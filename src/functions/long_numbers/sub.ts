export default function Sub (A:number[],B:number[],osn:number = 10000,sp:number = 0):number[] {
    //debugger
    let i;
    for (i = 1;i <= B[0];i++) {
        A[i + sp] -= B[i];
        // implementation principal
        // simple
        /*if (A[i + sp] < 0) {
            A[i + sp] += osn;
            A[i + sp + 1]--;
        }*/
        // hard
        let j= i;
        while (A[j + sp] < 0 && j <= A[0]) {
            A[j + sp] += osn;
            A[j + sp + 1]--;
            j++;
        }
    }
    i = A[0];
    while (i > 1 && A[i] == 0) {i--;A.pop();}
    A[0] = i;
    return A;
}