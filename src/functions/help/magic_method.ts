import Sub from "../long_numbers/sub";
import IBaseLongNumberData from "../interfase/IBaseLongNumberData";
import ReadLongF from "../long_numbers/read_long";
import More_Sdvig from "../long_numbers/more_sdvig";
import MulLong from "../long_numbers/mul_long";
import WriteLongF from "../long_numbers/write_long";



export function magicMethod(data: IBaseLongNumberData) {
    let A:number[] = [];
    let B:number[] = [];
    let shortB:number = data.strNumShortB;
    let osn:number = data.osn;
    let sp:number = data.sp;

    data.params.forEach((val,ind,arr) => {
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
    let resultFunction:any;
    switch ( data.nameF ) {
        case 'MulLong':
            resultFunction = MulLong(A,B,osn);
            break;
        case 'Sub':
            resultFunction = Sub(A,B,osn,sp);
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
    console.log(resultFunction,'resultFunction');
}

/*
magicMethod('Foo')
// { foo: 0, bar: '', baz: true }
magicMethod('Bar')
// { foo: 0, bar: '' }
magicMethod('xxx')
// { xxx: 0 }
magicMethod('yyy')
// { xxx: 0 }
magicMethod('zzz')
// Error: Method 'zzz' is not implemented.*/
