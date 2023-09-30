import More_Sdvig from "./more_sdvig";
import ShortTurnLong from "./short_turn_long";
import LongDivLong from "./long_div_long";

export default function LongDivShort (A:number[],K:number,osn:number = 10000):number[] {
    let arrK:number[] = ShortTurnLong(K,osn);
    let C:number[] = LongDivLong(A,arrK,osn);
    return C;
}