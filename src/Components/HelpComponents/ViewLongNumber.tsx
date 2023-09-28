import ReadLongF from "../../functions/long_numbers/read_long";
import {useEffect} from "react";
import ListLongNumber from "./ListLongNumber";

export default function ViewLongNumber({ stringNumber , osn, title} : { stringNumber: string, osn: number,title: string}) {
    const list = ReadLongF(stringNumber,osn)[0];
    const listItems = [list].map((value,index) => {
            return (
                <ListLongNumber key={index} list={value}/>
            );
        }
    );
    return (
        <div className="list-array-values">
            <hr/>
            <span>{title}: {stringNumber}</span><br/>
            {listItems}
            <hr/>
        </div>
    );
}
