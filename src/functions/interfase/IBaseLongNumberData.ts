export default interface IBaseLongNumberData {
    [index: string]: number | number[] | string | string[] | object ; // for object fields while
    strNumLongA: string,
    strNumLongB: string,
    strNumLongC: string,
    strNumShortB: number,
    numArrayA: number[],
    numArrayB: number[],
    numArrayC: number[],
    osn: number,
    nameF: string,
    sp: number,
    params: string[],
    resultStr: number,
    data: any,
}