import IBaseLongNumberData from "../interfase/IBaseLongNumberData";

export default function copyDataLongParamsObj(baseDefault:IBaseLongNumberData,dataHalf:object):IBaseLongNumberData {
    let data = {...baseDefault}
    Object.entries(data).map(([key, value]) => {

        Object.entries(dataHalf).map(([key2, value2]) => {
            if (key == key2 && value2 != undefined) data[key] = value2;
        })
    })
    return data;
}