import React, {useState} from 'react'

import Final from '../src/tutorial/12-memo-useMemo-useCallback/final/index'

function App() {

    const [num, setNum] = useState(0);

  return (
    <div className='container'>
        {/*<h2>{num}</h2>*/}
        {/*{num > 5 ? <Final /> : null}*/}
        {/*<button className="btn" onClick={() => setNum(num + 1)}>Increase</button>*/}
        {/*<button className="btn" onClick={() => setNum(num - 1)}>Decrease</button>*/}
        <Final />
    </div>
  )
}

export default App
