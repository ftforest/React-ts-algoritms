import ListLongNumber from "./ListLongNumber";

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
