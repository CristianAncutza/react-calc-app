
/* eslint no-eval:0*/ //<-- esto remueve el warning que genera eval
import React,{useState} from 'react'
import Functions from './components/Functions'
import words from 'lodash.words'
import Numbers from './components/Numbers'
import MathOperations from './components/MathOperations'
import Result from './components/Result'
import './App.css'


// Función Flecha o Arrow Function
const App = () => {
    //Array destructuring
    const [stack, setStack] = useState("")
   const items = words(stack, /[^-^+^*^/]+/g)
   console.log("renderizacion de la app",items)
    // Lo que ejecuta la función
    console.log("Renderización de App")
    return (
    <main className='react-calculator'>
        <Result value={stack}/>
        <Numbers
        onClickNumber={number=>{console.log("Click en number",number)
        setStack(`${stack}${number}`)//template literals para anidar numeros
    }}
        ></Numbers>
        <Functions
            onContentClear={()=>{console.log("Content clear")
            setStack('')        
        } }
            onDelete={()=>{
            if(stack.length >0){                
                const newStack = stack.substring(0, stack.length - 1)
                setStack(newStack)
            }            
        }} 
        ></Functions>
        <MathOperations        
            onClickOperation={operation => {console.log("Operation:",operation)
            setStack(`${stack}${operation}`)
        }}
            onClickEqual={equal=> {console.log("Equal:",equal)
            setStack(eval(stack).toString()) // eval realiza las operaciones matematicas
        }} 
        />
        </main>
)}

export default App

