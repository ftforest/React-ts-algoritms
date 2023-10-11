import ReadLongF from "../long_numbers/read_long";
import MulLong from "../long_numbers/mul_long";
import Mul from "../long_numbers/mul";
import WriteLongF from "../long_numbers/write_long";

export default function FactorialInArray(N:number):number[] {
    let lastVar:number = 2
    let ResSm:number[]
    if(N < 1) return ResSm = [1]
    if(N < 2) return ResSm = [1,1]
    if(N < 3) return ResSm = [1,1,2]
    ResSm = [1,1,2]
    for (let i = 3;i <= N; i++) {
        lastVar *= i
        ResSm.push(lastVar);
    }
    return ResSm;
}
export function FactorialRecursia(N:number) {
    let res = 0
    if (N > 1) res = FactorialRecursia((N - 1)) * N
    else if (N == 0 || N == 1) res = 1
    return res
}

export function FactorialApproximate(N:number) {
    let res = 0
    let pi = Math.PI
    let e = Math.E
    let n = N
    res = Math.sqrt(2 * pi * n) * Math.pow(n,n) * Math.pow(e,-n)
    return res
}
export function FactorialApproximateLong(N:number) {
    let res = ''
    let pi = Math.PI
    let e = Math.E
    let n = N
    let osn = 10000
    let num:number[] = []
    num = ReadLongF(Math.sqrt(2 * pi * n).toString(),osn)[0]
    console.log(num,'num1')
    num = MulLong(num,ReadLongF(Math.pow(n,n).toString(),osn),osn)
    num = MulLong(num,ReadLongF(Math.pow(e,-n).toString(),osn),osn)
    //res = Math.sqrt(2 * pi * n) * Math.pow(n,n) * Math.pow(e,-n)
    res = WriteLongF(num,osn)
    return res
}