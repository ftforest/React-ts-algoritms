import SumLongTwoF from "../../functions/long_numbers/sum_long_two";
import ReadLongF from "../../functions/long_numbers/read_long";
import WriteLongF from "../../functions/long_numbers/write_long";
import {useEffect, useState} from "react";
import ListDebugLongNumbers from "./ListDebugLongNumbers";

export default function JustView() {
    let [stringC,setStringC] = useState<string>();
    let [arrayC,setArrayC] = useState<number[]>([]);
    const osn = 10000;
    let strA = '870613029451';
    let strB = '3475912100517461';
    let strC = '3476782713546912';
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

    useEffect(()=>{
        let strC = summFunction();
        setStringC(strC);
    },[]);

    return (
        <div>
            <ul>
                <li>strA: {strA}</li>
                <li>strB: {strB}</li>
                <li>strC: {strC}</li>
                <li>strR: {stringC}</li>
                <li>strC == resultStrC: {strC == stringC}</li>
                <ListDebugLongNumbers list={arrayC}/>
            </ul>
        </div>
    );
}