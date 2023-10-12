import Div from "../help/div";

export default function GetPByNum(L:number) {
    let debug:boolean = false
    let Nsmall = 12
    let ResSm:number[] = [1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600]

    let N = 8
    let ws:number[] = []
    let j:number,sc:number
    //let L = 37021
    let P:number[] = [0]

    for (let i = 1;i <= N;i++) {
        sc = Div(L, ResSm[N-i])
        L = L % ResSm[N-i]
        j = 1
        while (sc != 0 || ws.includes(j)) {
            if (!ws.includes(j)) sc--
            j++
        }
        ws.push(j)
        P[i-1] = j
        if (debug) {
            console.log('for-end')
            console.log(i,sc,L,j,ws,P,'i,sc,L,j,ws,P')
        }
    }
    if (debug) {
        //console.log()
    }
    return P;
}

export function GetPByNumTest() {
    let P:number[] = GetPByNum(37021)
    //console.log(P,'P')
}