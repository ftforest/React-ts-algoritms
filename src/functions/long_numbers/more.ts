export default function More(A:number[],B:number[],osn:number):boolean {
    let more:boolean;
    let i:number;
    if (A[0] < B[0]) {
        more = false;
    } else if (A[0] > B[0]) {
        more = true;
    } else {
        i = A[0];
        console.log(i,'i')
        while ((i > 0) && (A[i] == B[i])) i--;
        console.log(i,'i == 0')
        if (i == 0){
            more = false;
        } else
            if (A[i] > B[i]) more = true;
            else more = false;
    }
    return more;
}