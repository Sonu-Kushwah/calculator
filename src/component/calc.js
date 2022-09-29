import React, {useState} from 'react';


function Calc() {
   const [input, inputSet] = useState([0])
   
   const handleClear = () => {
     inputSet([0])
   }
   
   const btnHandle = (e) => {
     inputSet(e.target.innerText)
   }
  
  return (
    <section id="container">
      <div id="calculator">
        <nav id="display-container">
          <div id="result">{input}</div>
          <div id="display">{input}</div>
        </nav>
        <div id="buttons">
            <button id="clear" onClick={handleClear}>AC</button>
            <button id="divide">/</button>
            <button id="multiply">x</button>
          
            <button id="seven" onClick={btnHandle}>7</button>
            <button id="eight" onClick={btnHandle}>8</button>
            <button id="nine" onClick={btnHandle}>9</button>
            <button id="substract">-</button>
         
            <button id="four" onClick={btnHandle}>4</button>
            <button id="five" onClick={btnHandle}>5</button>
            <button id="six" onClick={btnHandle}>6</button>
            <button id="add">+</button>
             
            <button name="one" id="one" onClick={btnHandle}>1</button>
            <button id="two" onClick={btnHandle}>2</button>
            <button id="three" onClick={btnHandle}>3</button>
            <button id="equals">=</button>
             
            <button id="zero" onClick={btnHandle}>0</button>
            <button id="decimal">.</button>
          
        </div>
      </div>
    </section>
  )
}


export default Calc;