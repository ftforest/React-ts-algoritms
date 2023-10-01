import SumLongTwoF from "../../functions/long_numbers/sum_long_two";
import ReadLongF from "../../functions/long_numbers/read_long";
import WriteLongF from "../../functions/long_numbers/write_long";
import {useEffect, useState} from "react";
import ListDebugLongNumbers from "./ListDebugLongNumbers";
import Eq from "../../functions/long_numbers/eg";
import More from "../../functions/long_numbers/more";
import ViewLongNumber from "./ViewLongNumber";
import Less from "../../functions/long_numbers/less";
import More_Eq from "../../functions/long_numbers/more_eq";
import Less_Eq from "../../functions/long_numbers/less_eq";
import More_Sdvig from "../../functions/long_numbers/more_sdvig";
import Mul from "../../functions/long_numbers/mul";
import MulLong from "../../functions/long_numbers/mul_long";
import IBaseLongNumberData from "../../functions/interfase/IBaseLongNumberData";
import IDataLongMetods from "../../functions/interfase/IDataLongMetods";
import {magicMethod} from "../../functions/help/magic_method";
import copyDataLongParamsObj from "../../functions/help/copy_data_long_params_obj";
import Sub from "../../functions/long_numbers/sub";
import {DivOstFull, DivOstFull2} from "../../functions/type/DivOstFull";
import LongTurnShort from "../../functions/long_numbers/long_turn_short";
import LongModShort from "../../functions/long_numbers/long_mod_short";
import HowDigits from "../../functions/long_numbers/how_digits";
import ShortTurnLong from "../../functions/long_numbers/short_turn_long";
import LongDivShort from "../../functions/long_numbers/long_div_short";
import FactorialN from "../../functions/long_numbers/additional_examples/002_n_factorial";
import GradeN from "../../functions/long_numbers/additional_examples/003_grade_n";

export default function JustView() {
    const osn = 10000;
    let [stringC,setStringC] = useState<string>();
    let [arrayC,setArrayC] = useState<number[]>([]);
    let [varEq,setVarEq] = useState<boolean>(false);
    let [varMore,setVarMore] = useState<boolean>(false);
    let [varMoreEq,setVarMoreEq] = useState<boolean>(false);
    let [varLess,setVarLess] = useState<boolean>(false);
    let [varLessEq,setVarLessEq] = useState<boolean>(false);
    let [varMoreSdvig,setVarMoreSdvig] = useState<number>();

    let divOstFullDefault: DivOstFull = {
        ost:'',
        full:'',
    }
    let obj:DivOstFull2 = {
        ost2:'',
        full2:'',
    }
    let allUnionDataAttr:any = {...divOstFullDefault,...obj}
    let baseDefault: IBaseLongNumberData = {
        strNumLongA: '',
        strNumLongB: '',
        strNumLongC: '',
        strNumShortB: 0,
        numArrayA: [],
        numArrayB: [],
        numArrayC: [],
        osn: 0,
        nameF: '',
        sp: 0,
        params: [],
        resultStr: 2, // 0 - string, 1 - LongArray, 2 - [string,LongArray]
        data: allUnionDataAttr//objectsMerge(divOstFullDefault,obj)
    }

    let dataDefault: IDataLongMetods = {
        mul: baseDefault,
        mulLong: baseDefault,
        sub: baseDefault,
        longDivLong: baseDefault,
        longTurnShort: baseDefault,
        longModShort: baseDefault,
        howDigits: baseDefault,
    };
    const [dataView, setDataView] = useState<IDataLongMetods>(dataDefault);


    const strA = '870613029451';
    const strB = '3475912100517461';
    const strC = '3476782713546912';

    const strEqA = '3476782713546912';
    const strEqB = '3476782713546912';

    const strMoreA = '3476782713546912';
    const strMoreB = '3476082713546912';


    function summFunction() {
        let arrA = ReadLongF(strA,osn)[0];
        ;
        let arrB = ReadLongF(strB,osn)[0];
        ;
        let arrC = SumLongTwoF(arrA,arrB,osn);
        ;
        let arr:any[] = [arrA,arrB,arrC];
        setArrayC(arr);
        const resultStrC = WriteLongF(arrC,osn);
        return resultStrC;
    }

    function eq() {
        let arrA = ReadLongF(strEqA,osn)[0];
        let arrB = ReadLongF(strEqB,osn)[0];
        let eq = Eq(arrA,arrB,osn);
        setVarEq(eq);
    }

    function more() {
        let arrA = ReadLongF(strMoreA,osn)[0];
        let arrB = ReadLongF(strMoreB,osn)[0];
        let more = More(arrA,arrB,osn);
        setVarMore(more);
    }
    function less() {
        let arrA = ReadLongF(strMoreA,osn)[0];
        let arrB = ReadLongF(strMoreB,osn)[0];
        let less = Less(arrA,arrB,osn);
        setVarLess(less);
    }
    function more_eq() {
        let arrA = ReadLongF(strMoreA,osn)[0];
        let arrB = ReadLongF(strMoreB,osn)[0];
        let moreEq = More_Eq(arrA,arrB,osn);
        setVarMoreEq(moreEq);
    }
    function less_eq() {
        let arrA = ReadLongF(strMoreA,osn)[0];
        let arrB = ReadLongF(strMoreB,osn)[0];
        let lessEq = Less_Eq(arrA,arrB,osn);
        setVarLessEq(lessEq);
    }

    const strMoreSdvigA = /*'567000';*//*'56784';*/'634000';
    const strMoreSdvigB = /*'567';*/'634';/*'567';*/
    function more_sdvig() {
        let arrA = ReadLongF(strMoreSdvigA,10)[0];
        let arrB = ReadLongF(strMoreSdvigB,10)[0];
        let moreSdvig = More_Sdvig(arrA,arrB,1,3);
        setVarMoreSdvig(moreSdvig);
    }
    function mul(){

        let mulData = {...baseDefault};
        mulData.strNumLongA = '111100005000';
        mulData.strNumShortB = 6;
        mulData.osn = osn;

        mulData.numArrayA = ReadLongF(mulData.strNumLongA,mulData.osn)[0];
        mulData.numArrayC = Mul(mulData.numArrayA,mulData.strNumShortB,mulData.osn);

        mulData.strNumLongC = WriteLongF(mulData.numArrayC,mulData.osn)
        /*const dataViewCopy:IDataLongMetods = {...dataView};
        dataViewCopy.mul = mulData;*/
        dataView.mul = mulData;
        setDataView(dataView)
        // debug
    }

    function mule_long () {
        let mulLong = {...baseDefault};
        mulLong.strNumLongA = '11110';
        mulLong.strNumLongB = '11110';
        mulLong.osn = osn;
        mulLong.numArrayC = [0];


        let numArrA = ReadLongF(mulLong.strNumLongA,mulLong.osn)[0];
        let numArrB = ReadLongF(mulLong.strNumLongA,mulLong.osn)[0];
        let numArrC = MulLong(numArrA,numArrB,mulLong.osn);
        mulLong.numArrayA = numArrA;
        mulLong.numArrayB = numArrB;
        mulLong.numArrayC = numArrC;
        mulLong.strNumLongC = WriteLongF(numArrC,mulLong.osn);
        dataView.mulLong = mulLong;
        setDataView(dataView)

    }
    function mule_long_2 () {
        let data:IBaseLongNumberData = {
            strNumLongA: '11110',
            strNumLongB: '10000',
            strNumLongC: '',
            strNumShortB: 0,
            numArrayA: [],
            numArrayB: [],
            numArrayC: [0],
            osn: osn,
            nameF: 'MulLong',
            sp: 0,
            params: ['numArrayA','numArrayB'],
            resultStr: 2,
            data:{},
        }
        data.strNumLongC = magicMethod(data)[0];
        data.numArrayC = magicMethod(data)[1];
        dataView.mulLong = data;
        setDataView(dataView)


    }
    function sub () {

        let data:IBaseLongNumberData = {
            strNumLongA: '10000000',
            strNumLongB: '90000',
            strNumLongC: '',
            strNumShortB: 0,
            numArrayA: [],
            numArrayB: [],
            numArrayC: [],
            osn: osn,
            nameF: 'Sub',
            sp: 0,
            params: ['numArrayA','numArrayB'],
            resultStr: 2,
            data:{},
        }
        let res = magicMethod(data);

        data.strNumLongC = res[0];
        dataView.sub = data;
        setDataView(dataView)
    }
    function long_div_long () {
        let dataDesc: DivOstFull = {
            ost:'',
            full:'',
        }
        let dataHalf = {
            strNumLongA: '564',
            strNumLongB: '63',
            osn: 10,
            nameF: 'LongDivLong',
            sp: 0,
            params: ['numArrayA','numArrayB'],
            resultStr: 2,
            data:dataDesc//{...allUnionDataAttr}
        }


        let data = copyDataLongParamsObj(baseDefault,dataHalf);
        let res = magicMethod(data);
        data.strNumLongC = res[0];

        let ResOut = MulLong(ReadLongF(data.strNumLongB)[0],res[1],osn);
        let OstOut = Sub(ReadLongF(data.strNumLongA)[0],ResOut,osn);

        dataHalf.data.ost = WriteLongF(OstOut,osn);
        dataHalf.data.full = WriteLongF(ResOut,osn);


        dataView.longDivLong = data;
        setDataView(dataView)
    }
    function long_turn_short() {
        let dataHalf = {
            strNumLongA: '123456789',
            osn: osn,
            nameF: 'LongTurnShort',
            params: ['numArrayA'],
        }

        let data = copyDataLongParamsObj(baseDefault,dataHalf);
        let res = magicMethod(data);
        data.strNumLongC = res[0];

        dataView.longTurnShort = data;
        setDataView(dataView)
    }
    function long_mod_short() {
        let dataHalf = {
            strNumLongA: '8',
            strNumShortB: '9',
            osn: osn,
            nameF: 'LongModShort',
            params: ['numArrayA'],
        }

        let data = copyDataLongParamsObj(baseDefault,dataHalf);
        let res = magicMethod(data);
        data.strNumLongC = res[0];

        dataView.longModShort = data;
        setDataView(dataView)
    }
    function how_digits() {
        let dataHalf = {
            strNumLongA: '12345678900',
            osn: osn,
            nameF: 'HowDigits',
            params: ['numArrayA'],
        }

        let data = copyDataLongParamsObj(baseDefault,dataHalf);
        let res = magicMethod(data);
        data.strNumLongC = res[0];
        console.log(res[0],res[1],'res[0],res[1]')

        dataView.howDigits = data;
        setDataView(dataView)
        console.log(dataView,'dataView')
    }
    function short_turn_long() {
        console.log('ShortTurnLong');
        let K = 12304567;
        let A = ShortTurnLong(K,osn);
        console.log(K,A,':K,A');
    }
    function long_div_short() {
        let strA = '120034005600';
        console.log('LongDivShort');
        let A:number[] = ReadLongF(strA,osn)[0];
        let K = 100000;
        let C = LongDivShort(A,K,osn);
        console.log(A,K,C,':A,K,C');
        console.log(strA,'strA')
        console.log(WriteLongF(C,osn))
    }
    //additional examples
    function factorial_n() {
        let C = FactorialN(100,osn);
        console.log(C,'FactorialN')
    }
    function grade_n() {
        let C = GradeN(3,100,osn);
        console.log(C,'GradeN')
    }

    useEffect(()=>{
        let strC = summFunction();
        setStringC(strC);
        eq();
        more();
        less();
        more_eq();
        less_eq();
        more_sdvig();
        mul();
        //mule_long();
        mule_long_2();
        sub();
        long_div_long();
        long_turn_short();
        long_mod_short();
        how_digits();
        short_turn_long();
        long_div_short();
        factorial_n();
        grade_n();

    },[]);

    return (
        <div>
            <ul className="ul-view-result">
                <li>strA: {strA}</li>
                <li>strB: {strB}</li>
                <li>strC: {strC}</li>
                <li>strR: {stringC}</li>
                <li>strC == resultStrC: {strC == stringC}</li>
                <li><ListDebugLongNumbers list={arrayC}/></li>
                <li>strEqA: {strEqA}</li>
                <li>strEqB: {strEqB}</li>
                <li>strEqA = strEqB: {varEq ? 'true' : 'false' }</li>
                <ViewLongNumber title="" stringNumber={strEqA} osn={osn}/>
                <ViewLongNumber title="strMoreA" stringNumber={strMoreA} osn={osn}/>
                <ViewLongNumber title="strMoreB" stringNumber={strMoreB} osn={osn}/>
                <li>strMoreA: {strMoreA}</li>
                <li>strMoreB: {strMoreB}</li>
                <li>strMoreA `{'>'}` strMoreB: {varMore ? 'true' : 'false' }</li>
                <li>strMoreA `{'>='}` strMoreB: {varMoreEq ? 'true' : 'false' }</li>
                <li>strMoreA `{'<'}` strMoreB: {varLess ? 'true' : 'false' }</li>
                <li>strMoreA `{'<='}` strMoreB: {varLessEq ? 'true' : 'false' }</li>
                <li><hr/></li>
                <li>strMoreSdvigA:{strMoreSdvigA} `{'<'}` strMoreSdvigB:{strMoreSdvigB} = {varMoreSdvig}</li>
                {dataView && dataView.mul && (
                <li>
                    <span>Mul:|:</span>strNumLongA:{dataView.mul.strNumLongA} * strNumShortB:{dataView.mul.strNumShortB} = <b>{dataView.mul.strNumLongC}</b>
                    <ViewLongNumber title="dataView.mul.strNumLongC" stringNumber={dataView.mul.strNumLongC} osn={osn}/>
                </li>
                )}
                <li><span>MulLong:|:</span>strNumLongA:{dataView.mulLong.strNumLongA} * strNumShortB:{dataView.mulLong.strNumLongB} = <b>{dataView.mulLong.strNumLongC}</b></li>
                <ViewLongNumber title="dataView.mulLong.strNumLongC" stringNumber={dataView.mulLong.strNumLongC} osn={dataView.mulLong.osn}/>
                <li><span>Sub:|:</span>strNumLongA:{dataView.sub.strNumLongA} - strNumLongB:{dataView.sub.strNumLongB} = <b>{dataView.sub.strNumLongC}</b></li>
                <li><ViewLongNumber title="dataView.sub.strNumLongC" stringNumber={dataView.sub.strNumLongC} osn={dataView.sub.osn}/></li>
                <li><span>LongDivLong:|:</span>strNumLongA:{dataView.longDivLong.strNumLongA} - strNumLongB:{dataView.longDivLong.strNumLongB} = <b>{dataView.longDivLong.strNumLongC} (Ost:{dataView.longDivLong.data.ost},Full:{dataView.longDivLong.data.full})</b></li>
                <li><span>LongTurnShort:|:</span>strNumLongA:{dataView.longTurnShort.strNumLongA} - strNumLongB:{dataView.longTurnShort.strNumLongB} = <b>{dataView.longTurnShort.strNumLongC}</b></li>
                <li><ViewLongNumber title="LongTurnShort.strNumLongC" stringNumber={dataView.longTurnShort.strNumLongC} osn={dataView.longTurnShort.osn}/></li>
            </ul>
        </div>
    );
}