import Sub from "../long_numbers/sub";

export default function getFunctionLongMethods(nameF:string) {
    const magicWand: { [K: string]: Function } = {
        Sub: Sub,
        /*Bar: newItemBar,
        xxx: newItemXXX,   // this allows you to use a different value for the argument
        yyy: newItemXXX,   // ... to use multiple names for the same function
                           // ... and to handle gracefully the calls of non-existing functions*/
    };
    if (magicWand[nameF]) {
        return magicWand[nameF]();
    }

    throw new Error(`Method '${nameF}' is not implemented.`);
}