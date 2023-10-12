import React from 'react';
import GetNext, {GetNextLexicoGraficeski, GetNextTest} from "../functions/combinatorics/get_next";
import Eq from "../functions/long_numbers/eg";
import RevertArray from "../functions/help/revert_array";
import FactorialInArray, {
    FactorialApproximate,
    FactorialApproximateLong,
    FactorialRecursia
} from "../functions/help/factorial_in_array";
import GetPByNum, {GetPByNumTest} from "../functions/combinatorics/get_p_by_num";

test('Combinatorics functions GetNextTest', () => {
    //GetNextTest();
    expect(Math.max(1, 5, 10)).toBe(10);
});
test('Combinatorics functions GetNext', () => {
    let P:number[] = [3,3,2,1];
    let Last:number[] = [];
    let LastRes:number[] = [3,1,3,2];
    let osn:number = 10;
    let N:number = 3;
    Last = GetNext(P,N);
    expect(Last).toEqual(LastRes);
});
test('Combinatorics functions GetNext All Steps', () => {
    let P:number[] = [3,3,2,1];
    let Last:number[] = [];
    let items:number[][] = [];
    let osn:number = 10;
    let N:number = 3;
    let i:number = 0;
    while (!Eq(P,Last,osn)) {
        if (Last[0] == undefined) Last = [...P];
        let item = GetNext(Last,N);
        Last = item;
        items[i] = item;
        i++;
    }
    
    expect(items).toEqual([
        [ 3, 1, 3, 2 ], // 231
        [ 3, 2, 1, 3 ], // 312
        [ 3, 2, 3, 1 ], // 132
        [ 3, 3, 1, 2 ], // 213
        [ 3, 3, 2, 1 ]  // 123
    ]);
});
test('Combinatorics functions GetNext Anti Lexicograficheski', () => {
    let P:number[] = [4,3,2,1];
    let Last:number[] = [];
    let items:number[][] = [];
    let osn:number = 10;
    let N:number = 3;
    let i:number = 0;
    while (!Eq(P,Last,osn)) {
        if (Last[0] == undefined) Last = [...P];
        let item = GetNext(Last,N);
        Last = item;
        item = RevertArray(item);
        items[i] = [...item];
        i++;
    }
    console.log(items,'items')

    expect([]).toEqual([]);
});
test('Combinatorics functions GetNext Lexicograficheski', () => {
    let P:number[] = [4,3,2,1];
    let Last:number[] = [];
    let items:number[][] = [];
    let osn:number = 10;
    let N:number = 3;
    let i:number = 0;
    while (!Eq(P,Last,osn)) {
        if (Last[0] == undefined) Last = [...P];
        let item = GetNextLexicoGraficeski(Last,N);
        Last = item;
        item = RevertArray(item);
        items[i] = [...item];
        i++;
        break
    }
    console.log(items,'items')

    expect([]).toEqual([]);
});
test('Combinatorics functions FactorialInArray', () => {

    expect(FactorialInArray(0)).toEqual([1]);
    expect(FactorialInArray(1)).toEqual([1,1]);
    expect(FactorialInArray(2)).toEqual([1,1,2]);
    expect(FactorialInArray(3)).toEqual([1,1,2,6]);
    expect(FactorialInArray(4)).toEqual([1,1,2,6,24]);
    expect(FactorialInArray(5)).toEqual([1,1,2,6,24,120]);
    expect(FactorialInArray(12)).toEqual([1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600]);
});

test('Combinatorics functions FactorialRecursia', () => {

    expect(FactorialRecursia(0)).toBe(1);
    expect(FactorialRecursia(1)).toBe(1);
    expect(FactorialRecursia(2)).toBe(2);
    expect(FactorialRecursia(3)).toBe(6);
    expect(FactorialRecursia(4)).toBe(24);
    expect(FactorialRecursia(5)).toBe(120);
    expect(FactorialRecursia(12)).toBe(479001600);
});
test('Combinatorics functions FactorialApproximate', () => {

    /*console.log(FactorialApproximate(2))
    console.log(FactorialApproximate(3))
    console.log(FactorialApproximate(4))
    console.log(FactorialApproximate(5))
    console.log(FactorialApproximate(6))
    console.log(FactorialApproximateLong(10024))*/

    /*expect(FactorialRecursia(0)).toBe(1);
    expect(FactorialRecursia(1)).toBe(1);
    expect(FactorialRecursia(2)).toBe(2);
    expect(FactorialRecursia(3)).toBe(6);
    expect(FactorialRecursia(4)).toBe(24);
    expect(FactorialRecursia(5)).toBe(120);
    expect(FactorialRecursia(12)).toBe(479001600);*/
});
test('Combinatorics functions GetPByNum', () => {
    //GetPByNumTest();
    let L:number = 37021
    let P:number[] = GetPByNum(L)
    expect(P).toEqual([8, 3, 4, 5, 6, 1, 7, 2])
})
