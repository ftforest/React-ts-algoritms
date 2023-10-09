import { BsFillArrowDownSquareFill,BsFillArrowUpSquareFill } from "react-icons/bs";
export default function LadderPermutation({ permutetion,checkers,directions } : { permutetion: number[],checkers: number[],directions: number[]}) {
    //const numbers = props.list;
    let lengthNumber = 0;
    let numberChecker:number[] = [];
    let numberLadder:number[] = [];
    let numberLadderDirection:number[] = [];

    const listItems = checkers.map((value,index) => {
            if (index != 0) {
                numberChecker.push(value)
                numberLadder.push(permutetion[index])
                numberLadderDirection.push(directions[index])
                return (
                    <div className="ladder-row">
                        <LadderRow key={index} index={index} value={value} direction={directions[index]} />
                    </div>
                );
            }
        }
    );
    const numberCheckerDom = numberChecker.map((value)=>{
        return (
            <div className="ladder-section">
                {value}
            </div>
        )
    })
    const numberLadderDom = numberLadder.map((value)=>{
        return (
            <div className="ladder-section">
                {value}
            </div>
        )
    })
    const numberLadderDirectionDom = numberLadderDirection.map((value)=>{
        return (
            <div className="ladder-section">
                {value}
            </div>
        )
    })
    return (
        <div className="ladder-container">
            <div className="ladder-container_view bg">
                {listItems}
            </div>
            <div className="ladder-container_number bg">
                {numberCheckerDom}
            </div>
            <div className="ladder-container_placements bg">
                {numberLadderDom}
            </div>
            <div className="ladder-container_direction bg">
                {numberLadderDirectionDom}
            </div>
        </div>
    );
}

function LadderRow({ index,value,direction } : { index:number,value: number,direction: number}) {
    let row = [];
    
    for (let i = 0;i < index;i++) {
        if (i == value && direction == 1) {
            row.push(
                <div className="ladder-section">
                    <BsFillArrowUpSquareFill />
                </div>
            )
        } else if (i == value && direction == -1) {
            row.push(
                <div className="ladder-section">
                    <BsFillArrowDownSquareFill />
                </div>
            )
        } else {
            row.push(
                <div className="ladder-section">

                </div>
            )
        }
    }
    
    return (
        <>
            {row.map((section, index) => {
                return (
                    <>
                        {section}
                    </>
                );
            })}
        </>
    )

}
export function ListLadderPermutation({ permutations } : { permutations: any[][]}) {
    console.log(permutations[1][0],'permutations[1][index]')
    let P:number[][] = permutations[0]
    let Y:number[][] = permutations[1]
    let D:number[][] = permutations[2]
    const list = Y.map((value, index, array) => {
        return (
            <LadderPermutation key={index} permutetion={P[index]} checkers={Y[index]} directions={D[index]}/>
        )
    })
    return (
        <div className="ladder-grid">
            {list}
        </div>
    )
}