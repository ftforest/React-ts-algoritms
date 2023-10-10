import React from 'react';
import GetNext, {GetNextLexicoGraficeski, GetNextTest} from "../functions/combinatorics/get_next";
import Eq from "../functions/long_numbers/eg";
import RevertArray from "../functions/help/revert_array";

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
test('Combinatorics functions Solve Test', () => {
    //Solve.First
    //algoritmSolve();
    expect([]).toEqual([]);
});

