export function Swap (a:number,b:number):{a:number,b:number} {
    let t:number;
    t = a;a = b;b = t;
    return {
        a, b
    }
}