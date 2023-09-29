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
        resultStr: 0, // 0 - string, 1 - LongArray, 2 - [string,LongArray]
        data: allUnionDataAttr//objectsMerge(divOstFullDefault,obj)
    }

    let dataDefault: IDataLongMetods = {
        mul: baseDefault,
        mulLong: baseDefault,
        sub: baseDefault,
        longDivLong: baseDefault,
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
        console.log(dataView,'dataView')
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
            </ul>
        </div>
    );
}