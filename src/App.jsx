import './App.css'
import Number from './components/Number'

export default function App() {
  return (
    <main>
      <h1><i>CALCULATOR</i></h1>
      <div className="calculator-container">
        <div className="display">
          <input type="text" id="display" disabled/>
        </div>
        <div className="input">
          <Number name="1"/>
          <Number name="2"/>
          <Number name="3"/>
          <Number name="AC"/>
          <Number name="4"/>
          <Number name="5"/>
          <Number name="6"/>
          <Number name="+"/>
          <Number name="7"/>
          <Number name="8"/>
          <Number name="9"/>
          <Number name="-"/>
          <Number name="0"/>
          <Number name="/"/>
          <Number name="*"/>
          <Number name="="/>
        </div>
      </div>
    </main>
  )
}
