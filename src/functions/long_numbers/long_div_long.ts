import More_Sdvig from "./more_sdvig";
import Mul from "./mul";
import Sub from "./sub";

export default function LongDivLong (A:number[],B:number[],osn:number = 10000):number[][] {
    let Res:number[] = [1];
    let Ost:number[] = [1];
    let ResOst:number[][];
    switch ( More_Sdvig(A,B,osn,0) ) {
        case 0:
            ResOst = MakeDel(A,B,Res,Ost,osn)
            break;
        case 1:
            Ost = A;
            break;
        case 2:
            Res[1] = 1;
            break;
        default:
            //
            break;
    }
    ResOst = [Res,Ost];
    return ResOst;
}

function MakeDel (A:number[],B:number[],Res:number[],Ost:number[],osn:number):number[][] {
    let sp:number = 0;
    Ost = A;
    sp = A[0] - B[0];
    if (More_Sdvig(A,B,osn,sp) == 1) sp--;
    Res[0] = sp + 1;
    while (sp >= 0) {
        Res[sp + 1] = FindBin(Ost,B,sp,osn);
        sp--;
    }
    return [Res,Ost];
}

function FindBin (Ost:number[],B:number[],sp:number,osn:number):number  {

    let C:number[] = [0];
    let Down = 0;
    let Up = osn;
    while ((Up-1) > Down) {
        C = Mul(B,Math.floor((Up + Down) / 2),osn);
        switch ( More_Sdvig(Ost,C,osn,sp) ) {
            case 0:
                Down = Math.floor((Down + Up) / 2);
                break;
            case 1:
                Up = Math.floor((Up + Down) / 2);
                break;
            case 2:
                Up = Math.floor((Up + Down) / 2); Down = Up;
                break;
            default:
                //
                break;
        }
    }
    C = Mul(B,Math.floor((Up + Down) / 2),osn);
    if (More_Sdvig(Ost,C,osn,0) == 0) {
        Ost = Sub(Ost,C,osn,sp);
    } else {
        Ost = Sub(C,Ost,osn,sp);
    }
    let findBin = Math.floor((Up + Down) / 2);
    return findBin;
}