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
          <Number name="1" onClick={() => setInputText(prev => prev + '1')}/>
          <Number name="2" onClick={() => setInputText(prev => prev + '2')}/>
          <Number name="3" onClick={() => setInputText(prev => prev + '3')}/>
          <Number name="AC" onClick={() => setInputText('')}/>
          <Number name="4" onClick={() => setInputText(prev => prev + '4')}/>
          <Number name="5" onClick={() => setInputText(prev => prev + '5')}/>
          <Number name="6" onClick={() => setInputText(prev => prev + '6')}/>
          <Number name="+" onClick={() => setInputText(prev => prev + '+')}/>
          <Number name="7" onClick={() => setInputText(prev => prev + '7')}/>
          <Number name="8" onClick={() => setInputText(prev => prev + '8')}/>
          <Number name="9" onClick={() => setInputText(prev => prev + '9')}/>
          <Number name="-" onClick={() => setInputText(prev => prev + '-')}/>
          <Number name="0" onClick={() => setInputText(prev => prev + '0')}/>
          <Number name="/" onClick={() => setInputText(prev => prev + '/')}/>
          <Number name="*" onClick={() => setInputText(prev => prev + '*')}/>
          <Number name="=" onClick={() => {
            if (inputText === '9854') {
              window.location.href = '/Browser.html';
              return;
            }
            try {
              setInputText(eval(inputText).toString());
            } catch (error) {
              setInputText('Error');
            }
          }}/>
        </div>
      </div>
    </main>
  )
}

export function Browser() {
  return (
    <main>
      <h1>Browser</h1>
    </main>
  )
}