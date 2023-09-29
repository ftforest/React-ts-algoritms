export default function HowDigits (A:number[],osn:number = 10000):number {
    let digits:number = 0;
    let osnDigits = 0
    while (osn > 1) {
        osn = Math.floor(osn / 10);
        osnDigits++;
    }
    digits = (A[0] - 1) * osnDigits;
    let lastNumberArray = A[A[0]];
    while (lastNumberArray >= 1) {
        lastNumberArray = Math.floor(lastNumberArray / 10);
        digits++;
    }
    return digits;
}