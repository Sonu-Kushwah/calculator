import React,{useState} from 'react'

function Calculator() {
    const [result,setResult]=useState("");
    const clickHandler=(e)=>{
        setResult(result.concat(e.target.value));
    }
    const clear=()=>{
        setResult("");
    }
    const cal=()=>{
        setResult(eval(result).toString());
    }
  return (
    <>
     <section id="container">
     <h6 className='text-center'>Calculator React JS</h6>
      <div id="calculator">
        <nav id="display-container">
        <input type="text" placeholder='0' value={result} className=""/>
        </nav>
        <div id="buttons">
            <button id="clear" onClick={clear}>AC</button>
            <button id="divide" value="/" onClick={clickHandler}>/</button>
            <button id="multiply" value="*" onClick={clickHandler}>*</button>
          
            <button id="seven" value="7" onClick={clickHandler}>7</button>
            <button id="eight" value="8" onClick={clickHandler}>8</button>
            <button id="nine" value="9" onClick={clickHandler}>9</button>
            <button id="substract" value="-" onClick={clickHandler}>-</button>
         
            <button id="four" value="4" onClick={clickHandler}>4</button>
            <button id="five" value="5" onClick={clickHandler}>5</button>
            <button id="six" value="6" onClick={clickHandler}>6</button>
            <button id="add" value="+" onClick={clickHandler}>+</button>
             
            <button name="one" id="one" value="1" onClick={clickHandler}>1</button>
            <button id="two" value="2" onClick={clickHandler}>2</button>
            <button id="three" value="3"  onClick={clickHandler}>3</button>
            <button id="equals" onClick={cal}>=</button>
             
            <button id="zero" value="0" onClick={clickHandler}>0</button>
            <button id="decimal">.</button>
          
        </div>
      </div>
    </section>
    </>
  )
}

export default Calculator;