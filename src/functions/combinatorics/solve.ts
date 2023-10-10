import {Print} from "../help/print";
import {Swap} from "./swap";

export function First(N:number,P:number[],Y:number[],D:number[]) {
    let i:number
    for (i = 1;i <= N;i++) {
        P[i] = N-i+1
        Y[i] = 0
        D[i] = 1
    }
    
}

export function Ok(N:number,Y:number[],D:number[]):number {
    let i:number
    i = N
    while(i > 1 && ((D[i] == 1 &&  Y[i] == (i - 1)) || (D[i] == -1 && Y[i] == 0))) i--
    return i;
}

/*export function algoritmSolve():void {
    const Nmax:number = 4;
    let P:number[] = [0,0,0,0,0]
    let Y:number[] = [0,0,0,0,0]
    let D:number[] = [0,0,0,0,0] // 1,1,1,1,1
    let historyP:any = []
    let historyY:any = []
    let historyD:any = []
    First(Nmax,P,Y,D)
    
    let pp:boolean = true
    //Solve(pp,Nmax,P,Y,D)
    let i = 0;
    while (i < 5) {
        
        Solve(pp,Nmax,P,Y,D)

        historyP.push([...P])
        historyY.push([...Y])
        historyD.push([...D])
        i++;
        //break;
        //if (pp) Print(P)
    }
    
}*/

export function Solve(q:boolean,N:number,P:number[],Y:number[],D:number[]) {
    let i:number,j:number,dj:number;
    i = Ok(N,Y,D)
    
    q = Boolean(i > 1)
    if (i > 1) {
        Y[i] = Y[i] + D[i]
        for(j = i+1;j <= N;j++) D[j] *= -1
        j = Who_i(N,P,i);
        dj = j + D[i];
        let abObjVar = Swap(P[j],P[dj])
        P[j] = abObjVar.a
        P[dj] = abObjVar.b
    }
    
    return q;
}

function Who_i(N:number,P:number[],i:number):number {
    let j:number = N
    while(j > 0 && P[j] != i) j--;
    return j;
}