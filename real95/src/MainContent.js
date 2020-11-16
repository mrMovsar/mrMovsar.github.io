import { useState } from "react";
function MainContent(){
    const [counter, setCounter]=useState(0);
    return (
        <>
        <div className="Number">
            {counter}
        </div>
    
        <div className="Buttons">
            <button onClick={Plus} className="btn btn-blue">Увеличить</button>
            <button onClick={Minus} className="btn btn-orange">Уменьшить</button>
            <button onClick={Reset} className="btn btn-grey">Сбросить</button>
        </div>
        </>
    )
function Plus(){
    setCounter(counter+3);
}
function Minus(){
    setCounter(counter-2);
}
function Reset(){
    setCounter(0);
}
}
export default MainContent;
