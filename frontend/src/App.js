import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState();
  const [op, setOp] = useState();
  
  async function handleAddNumbers() {
    try {
      console.log('add button clicked')
      const response = await axios.post('http://localhost:4000/api/add_numbers', {first, second});
      setError()
      setResult(response.data.result)
    } catch (error) {
      console.error('Something went wrong with addition. Error: ' + error)
      setResult(null)
      setError(error.response ? error.response.data.error : 'An error occurred')
    }
  }
  
  async function handleSubtractNumbers() {
    try {
      console.log('subtract button clicked')
      const response = await axios.post('http://localhost:4000/api/subtract_numbers', {first, second});
      setResult(response.data.result)
    } catch (error) {
      console.error('Something went wrong with subtraction. Error: ' + error)
    }
  }
  
  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', height: '80vh',}}>
      <h1 style={{margin:'0px',}}>Add or Subtract!</h1>
      <h4 style={{fontWeight:'normal',}}>Enter two numbers and click either add or subtract.</h4>
      <div>
        <input type='text' style={{width:'100px', height:'100px', margin:'3px', fontSize:'20px', textAlign:'center',}} placeholder='First' onInput={(first)=>{setFirst(first.target.value); setResult(null)}}/>
        <input type='text' style={{width:'100px', height:'100px', margin:'3px', fontSize:'20px', textAlign:'center',}} placeholder='Second' onChange={(second)=>{setSecond(second.target.value); setResult(null)}}/>
        <div style={{display:'flex', flexDirection:'column',}}>
          <button style={{margin:'3px', fontSize:'16px',}} onClick={() => {handleAddNumbers(); setOp('+')}}>+</button>
          <button style={{margin:'3px', fontSize:'16px',}} onClick={() => {handleSubtractNumbers(); setOp('-')}}>-</button>
        </div>
      </div>
      {error && (
        <div style={{ color: 'red', marginTop: '10px' }}>
          <strong>Error:</strong> {error}
        </div>
      )}
      {result !== null && op === '+' && (
        <h2 style={{borderWidth:'2px'}}>{first ? first : 0} + {second ? second : 0} = {result}</h2>
      )}
      {result !== null && op === '-' && (
        <h2 style={{borderWidth:'2px'}}>{first ? first : 0} - {second ? second : 0} = {result}</h2>
      )}
    </div>
  );
}

export default App;
