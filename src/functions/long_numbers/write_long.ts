export default function WriteLongF(A: number[] = [], osn: number = 1000) {

    let stringNumber = '';
    let ls = (osn / 10).toString();
    stringNumber += A[A[0]]
    for (let i = A[0] - 1; i >= 1; i--) {
        let s = A[i].toString();
        while(s.length < ls.length) s = '0' + s;
        stringNumber += s;
    }
    return stringNumber;
}