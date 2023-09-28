import {useEffect, useState} from "react";
import ReadLongF from "../../functions/long_numbers/read_long";
import WriteLongF from "../../functions/long_numbers/write_long";

export default function WriteLong({longNumber}:{longNumber:number[]}) {
    let [numToString,setNumToString] = useState<string>();

    function calculater() {
        //let longNumber = ReadLongF('120345678');
        //
        let numberInDisplay = WriteLongF(longNumber);
        setNumToString(numberInDisplay);
    }

    useEffect(()=>{
        calculater();
    },[longNumber]);

    return (
        <div>WriteLongF resalt: {numToString}</div>
    );
}