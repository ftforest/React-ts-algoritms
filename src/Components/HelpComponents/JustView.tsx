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
    interface IData {
        mul: {
            strNumLongA: string,
            numArrayA: number[],
            numNumB: number,
            osn: number,
            numArrayC: number[]
            strNumLongС: string,
        };
    }
    const [dataView, setDataView] = useState<IData>({
        mul: {
            strNumLongA: '11110000',
            numArrayA: [],
            numNumB: 3,
            osn:osn,
            numArrayC: [],
            strNumLongС: '',
        }
    });


    const strA = '870613029451';
    const strB = '3475912100517461';
    const strC = '3476782713546912';

    const strEqA = '3476782713546912';
    const strEqB = '3476782713546912';

    const strMoreA = '3476782713546912';
    const strMoreB = '3476082713546912';


    function summFunction() {
        let arrA = ReadLongF(strA,osn)[0];
        console.log(arrA,'arrA');
        let arrB = ReadLongF(strB,osn)[0];
        console.log(arrA,arrB,'arrA arrB');
        let arrC = SumLongTwoF(arrA,arrB,osn);
        console.log(arrC,'arrC');
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
        let multData = {
            strNumLongA: '111100005000',
            numArrayA: [],
            numNumB: 6,
            osn:osn,
            numArrayC: [0],
            strNumLongС: '',
        };
        multData.numArrayA = ReadLongF(multData.strNumLongA,multData.osn)[0];
        multData.numArrayC = Mul(multData.numArrayA,multData.numNumB,multData.osn);

        multData.strNumLongС = WriteLongF(multData.numArrayC,multData.osn)
        let dataViewCopy = dataView;
        dataViewCopy.mul = multData;
        setDataView(dataViewCopy)
        // debug
        console.log(dataView.mul.numArrayA,'numArrayA')
        console.log(dataView.mul.numArrayC,'numArrayC')
        console.log(dataView.mul.strNumLongС,'strNumLongС')
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
                <ViewLongNumber title="dataView.mult.strNumLongС" stringNumber={dataView.mul.strNumLongС} osn={osn}/>
                <li><span>Mult:|:</span>strNumLongA:{dataView.mul.strNumLongA} * numNumB:{dataView.mul.numNumB} = <b>{dataView.mul.strNumLongС}</b></li>
            </ul>
        </div>
    );
}