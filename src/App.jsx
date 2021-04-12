import React from 'react'
import Functions from './components/Functions'
import Numbers from './components/Numbers'
import MathOperations from './components/MathOperations'
import Result from './components/Result'
import './App.css'

const App = () => {
    console.log("Renderización de App")
    return (<main className='react-calculator'>
        <Result value={"10"} />
        <Numbers onClickNumber={number => console.log("Number", number)} />
        <Functions 
            onContentClear={() => console.log('Content clear')}
            onDelete={() => console.log('OnDelete')}
        />
        <MathOperations 
            onClickOperations={operation => {
                console.log("Operation:", operation)
            }} 
            onClickEqual={equal => {
                console.log("Equal:", equal)
            }} 
        />
    </main>)
}

export default App;