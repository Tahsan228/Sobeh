import './App.css'
import Number from './components/Number'
import { useState } from 'react'

export default function App() {
  const [inputText, setInputText] = useState('');
  return (
    <main>
      <h1><i>CALCULATOR</i></h1>
      <div className="calculator-container">
        <div className="display">
          <input type="text" id="display" value={inputText} disabled/>
        </div>
        <div className="input">
          <Number name="1" onClick={() => {
      setInputText(prev => prev + '1');
          }}/>
          <Number name="2" onClick={() => {}}/>
          <Number name="3" onClick={() => {}}/>
          <Number name="AC" onClick={() => {}}/>
          <Number name="4" onClick={() => {}}/>
          <Number name="5" onClick={() => {}}/>
          <Number name="6" onClick={() => {}}/>
          <Number name="+" onClick={() => {}}/>
          <Number name="7" onClick={() => {}}/>
          <Number name="8" onClick={() => {}}/>
          <Number name="9" onClick={() => {}}/>
          <Number name="-" onClick={() => {}}/>
          <Number name="0" onClick={() => {}}/>
          <Number name="/" onClick={() => {}}/>
          <Number name="*" onClick={() => {}}/>
          <Number name="=" onClick={() => {}}/>
        </div>
      </div>
    </main>
  )
}
