import ReadLongF from "../../functions/long_numbers/read_long";
import {useEffect} from "react";

function Section({ number } : { number: number}) {
    return (
        <div className="section-array">
            {number}
        </div>
    )
}
function ListLongNumber({ list } : { list: number[]}) {
    //const numbers = props.list;
    let lengthNumber = 0;
    const listItems = list.map((value,index) => {
            if (index == 0) {
                lengthNumber = value;
                return (
                    <span key={index} className="length-array">
                    <Section  number={value}/>
                </span>
                );
            } else {
                if (index <= lengthNumber)
                    return (
                        <Section key={index} number={value}/>
                    );
            }
        }
    );
    return (
        <div className="array-values">{listItems}</div>
    );
}
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
