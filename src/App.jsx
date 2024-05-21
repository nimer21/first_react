import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(){

  let [count,setCount] = useState(5);

  const changeCounter=()=>setCount(count+1);

  return (
  <>
  <button onClick={changeCounter}> clicks {count}</button>
  </>
  );
}
export default App
