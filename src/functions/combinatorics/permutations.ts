import Fac from "../long_numbers/additional_examples/002_n_factorial";

export default function Permutations(N:number,osn:number):number[] {
    let C:number[] = [0];
    C = Fac(N,osn);
    return C;
}
