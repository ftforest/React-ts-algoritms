interface User {
    name: string;
    id: number;
}
export function TSInterface() {

    const user1: User = {
        name: "Hayes",
        //username: "Hayes",
        id: 0,
    };

    const user2: User = new UserAccount("Murphy", 1);
}

type MyBool = true | false;

type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
    deleteUser(user: User) {

    }
    getAdminUser(): User {
        const user1: User = {
            name: "Hayes",
            //username: "Hayes",
            id: 0,
        };
        return user1;
    }
    getLength(obj: string | string[]) {
        return obj.length;
    }
    wrapInArray(obj: string | string[]) {
        if (typeof obj === "string") {
            return [obj];
        }
        return obj;
    }
}

/*
Type	Predicate
string	typeof s === "string"
number	typeof n === "number"
boolean	typeof b === "boolean"
undefined	typeof undefined === "undefined"
function	typeof f === "function"
array	Array.isArray(a)
 */