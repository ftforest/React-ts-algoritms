export default function RevertArray(A:number[]):number[] {
    let array:any[] = []
    for (let i = A.length - 1;i >= 0;i--) {
        array.push(A[i]);
    }
    return array;
}