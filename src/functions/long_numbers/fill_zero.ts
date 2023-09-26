export default function FillZero (length:number = 1,numFill:number = 0) : number[] {
    let A:number[] = [];
    let i = 0;
    while (length >= i) { A.push(numFill); i++}
    return A;
}