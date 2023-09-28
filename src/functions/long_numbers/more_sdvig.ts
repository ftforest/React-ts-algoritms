export default function More_Sdvig(A:number[],B:number[],osn:number,sdvig:number):number {
    let more:number = 0;
    if (A[0] > (B[0] + sdvig)) {
        more = 0;

    } else if (A[0] < (B[0] + sdvig)) {
        more = 1;

    } else {
        let i = A[0];
        while (i > sdvig && A[i] == B[i - sdvig]) i--;

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