export default function LongTurnShort (A:number[],osn:number = 10000):number {
    let K:number = 0;
    for (let i = A[0];i >= 1;i--) {
        K += A[i] * (osn ** (i-1));
    }
    return K;
}