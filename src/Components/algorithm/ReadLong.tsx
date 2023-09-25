import ReadLongF from "../../functions/long_numbers/read_long";
import {useEffect, useState} from "react";
import './ReadLong.css';
import ListDebugLongNumbers from "../HelpComponents/ListDebugLongNumbers";

export default function ReadLong({ stringNumber,parentCallback }: { stringNumber: string,parentCallback:any }) {
    const [numberFinel, setNumberFinel] = useState<number[]>([]);

    //const addFive = () => dispatch({ type: "setCount", value: state.count + 5 });
    //const reset = () => dispatch({ type: "reset" });
    const readDataForm = (e: React.ChangeEvent<any>): void => {

        e.preventDefault();
        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
        // You can pass formData as a fetch body directly:
        //fetch('/some-api', { method: form.method, body: formData });

        // Or you can work with it as a plain object:
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson.numberLong);
        let arrayFinel = ReadLongF(formJson.numberLong.toString());
        //console.log(arrayFinel,'arrayFinel');
        setNumberFinel([...arrayFinel[1]]);
        parentCallback(arrayFinel[0]);
    }

    useEffect(()=>{
        let arrayFinel = ReadLongF(stringNumber);
        //console.log(arrayFinel,'arrayFinel');
        setNumberFinel([...arrayFinel[1]]);
    },[]);


    return (
        <div>
            <h1>Read Long {stringNumber}</h1>
            <form method="post" onSubmit={readDataForm}>
                <input type="text" defaultValue={stringNumber} name="numberLong"/>
                <button type="submit">Read long number</button>

                <ListDebugLongNumbers list={numberFinel}/>
                {/*<button onClick={addFive}>Add 5</button>*/}
            </form>
        </div>
    );
}
