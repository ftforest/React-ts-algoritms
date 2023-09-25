export default function More_Sdvig(A:number[],B:number[],osn:number,sdvig:number):number {
    let more:number = 0;
    if (A[0] > (B[0] + sdvig)) {
        more = 0;
        console.log (more,'more:A[0] > (B[0] + sdvig)');
    } else if (A[0] < (B[0] + sdvig)) {
        more = 1;
        console.log (more,'more:A[0] < (B[0] + sdvig)');
    } else {
        let i = A[0];
        while (i > sdvig && A[i] == B[i - sdvig]) i--;
        console.log (i,sdvig,'more:i == sdvig');
        if (i == sdvig) {
            more = 0;
            for (i = 1; i < sdvig; i++) {
                if (A[i] > 0) break;
                more = 2;
            }
        } else {
            if (A[i] < B[i-sdvig]) more = 1;
            else more = 0;
        }
    }
    return more;
}