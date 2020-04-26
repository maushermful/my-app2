import React, {useState, useEffect, useContext} from 'react'

function HookCounter() {

  const [count, setCount] = useState(0)
  const msg = useContext(setCount);

    useEffect(() => {
      console.log('effect called')
      document.title = 'Welcome to My Page!'
})

  return(
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
      )
    }


export default HookCounter;
