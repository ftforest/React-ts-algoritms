import Sub from "../long_numbers/sub";
import IBaseLongNumberData from "../interfase/IBaseLongNumberData";
import ReadLongF from "../long_numbers/read_long";
import More_Sdvig from "../long_numbers/more_sdvig";
import MulLong from "../long_numbers/mul_long";
import WriteLongF from "../long_numbers/write_long";
import LongDivLong from "../long_numbers/long_div_long";
import {validateHeaderValue} from "http";



export function magicMethod(data: IBaseLongNumberData):any {
    let A:number[] = [];
    let B:number[] = [];
    let shortB:number = data.strNumShortB;
    let osn:number = data.osn;
    let sp:number = data.sp;

    data.params.forEach((val,ind,arr):void => {
        switch ( val ) {
            case 'numArrayA':
                A = ReadLongF(data.strNumLongA, osn)[0];

                break;
            case 'numArrayB':
                B = ReadLongF(data.strNumLongB, osn)[0];
                break;
            default:
                //
                break;
        }
    });
    let resultFunction:number[] = [];
    switch ( data.nameF ) {
        case 'MulLong':
            resultFunction = MulLong(A,B,osn);
            break;
        case 'Sub':
            resultFunction = Sub(A,B,osn,sp);
            break;
        case 'LongDivLong':
            resultFunction = LongDivLong(A,B,osn);

            break;

        default:
            //
            break;
    }
    if (data.resultStr == 0) { // string
        return WriteLongF(resultFunction,osn);
    }else if (data.resultStr == 1) { // LongArray
        return resultFunction;
    }else if (data.resultStr == 2) { // [string,LongArray]
        return [WriteLongF(resultFunction,osn),resultFunction];
    }
    return data;
}