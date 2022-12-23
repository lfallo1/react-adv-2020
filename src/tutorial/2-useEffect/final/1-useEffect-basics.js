import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    console.log('call useEffect');
    if (value > 0) {
      document.title = `New Messages(${value})`;
    }
  }, [value]);

  console.log('render component');
  return (
    <>
      <h1>{value}</h1>
        <h2>{date.getTime()}</h2>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
        <button className='btn' onClick={() => setDate(new Date())}>
            Update date
        </button>
    </>
  );
};

export default UseEffectBasics;
