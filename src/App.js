//https://www.youtube.com/watch?v=yu3dnHrnps4
import React, { useState, useEffect } from 'react';


function useLocalStorageState(key, defaultValue) {
  const [state, setState] = useState(() => {
    let value;
    try {
      value = JSON.parse(window.localStorage.getItem(key) || JSON.stringify(defaultValue));
      console.log(value);
    } catch (e) {
      //value = defaultValue;
    }
    return value;
  })

  useEffect (
    () => {
    window.localStorage.setItem(key, state)
  }, [state]
  )
  return [state, setState];
}

function App() {
  const [count, setCount] = useLocalStorageState('my-app:count', 0);

  return (
    <>
      <button onClick={() => setCount(0)}>
        clear
      </button>
      <button onClick={() => setCount(count + 1)}>
        {count}
      </button>
    </>
  )
}



export default App;
