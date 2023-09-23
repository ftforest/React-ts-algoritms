export default function ReadLongF( numberString: string, numberOsn:number = 1000/*,callback = (val:any) => console.log(val)*/) : any{
    //numberString = '2030851670';
    //console.log(numberString,'numberString');
    const numberLength = numberString.length;
    //console.log(numberLength,'numberLength');
    let A: number[] = [0];
    let DebugA: any[] = [];
    let i:number;
    let j:number;
    let osn:number = numberOsn;
    let countZeros = osn.toString().split('').reduce((x, y) => {
        let val = 0;
        if (y === '0') val = 1;
        return x + val;
    }, 0);
    //console.log('countZeros',countZeros);
    //debugger

    for (j = 0;j < numberLength;j++) {
        let item = [];
        let char: string = numberString.charAt(j);
        if (A[0] == 0 || A[A[0]] >= osn/10  ) {A.push(0);A[0]++;}
        for(i = A[0];i>=1;i--) {
            if (typeof A[A[0]] != 'undefined' && typeof A[i+1] != 'undefined')
                A[i+1] = A[i+1] + Math.floor(A[i]*10 / osn);
            A[i] = A[i]*10 % osn;
        }
        A[1] = A[1] + parseInt(char);
        for(let k = 0; k <= A[0]; k++){
            item.push(A[k])
        }
        DebugA.push(item);
        //console.log(A,'A');
        //callback(A);
    }
    if (A[A[0]] == 0) A.pop();
    console.log(A,'A Final:');
    //console.log(DebugA,'DebugA:');
    return [A,DebugA];
}