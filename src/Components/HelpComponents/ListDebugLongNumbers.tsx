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
export default function ListDebugLongNumbers({ list } : { list: any[]}) {
    const listItems = list.map((value,index) => {
            return (
                <ListLongNumber key={index} list={value}/>
            );
        }
    );
    return (
        <div className="list-array-values">{listItems}</div>
    );
}
