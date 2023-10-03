import Fac from "../long_numbers/additional_examples/002_n_factorial";
import LongDivLong from "../long_numbers/long_div_long";
import MulLong from "../long_numbers/mul_long";

export default function Combinations(M:number,N:number,osn:number):number[] {
    let C:number[] = [0];
    C = LongDivLong(Fac(N,osn),MulLong(Fac(M,osn),Fac(N-M,osn),osn));
    return C;
}
