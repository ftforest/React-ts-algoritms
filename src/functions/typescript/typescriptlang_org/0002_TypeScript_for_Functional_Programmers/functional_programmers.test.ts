import React from "react"
import {start} from "./0002_001_example";

test('TS Functional Programmers start Fn', () => {
    expect(start('string')).toEqual('string');
    expect(start(['string1','string2'])).toEqual('string1,string2');
    expect(start(()=>'string3')).toEqual('string3');
    expect(start({s:'string4'})).toEqual('string4');
})