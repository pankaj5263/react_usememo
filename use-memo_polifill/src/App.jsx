import { useState } from 'react'
import useCustomMemo from './hooks/use-custom-memo';

import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [count1, set1Count] = useState(0);

  function sqr(){
    console.log("sqr");
    return count1*count1;
  }

  const sqrmemoizedValue = useCustomMemo(sqr, [count1]);

  const counterHandler1 = () => {
    setCount(count+1);
  }

  const counterHandler2 = () => {
    set1Count(count1+1);
  }

  return (
    <>
     <button onClick={counterHandler1}>Counter1:  {count}</button>
     <button onClick={counterHandler2}>Counter2:  {count1}</button>
     <h1>square: {sqrmemoizedValue}</h1>
    </>
  )
}

export default App
