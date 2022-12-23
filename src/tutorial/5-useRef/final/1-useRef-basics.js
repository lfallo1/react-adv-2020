import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);

  const handleSubmit = (e) => {
    debugger
    e.preventDefault();
    console.log(refContainer.current.value);
  };
  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  });

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input type='text' name="firstName" ref={refContainer} />
        </div>
        <div>
          <input type='text' name="lastName" ref={refContainer} />
        </div>
        <button type='submit'>submit</button>
      </form>
    </>
  );
};

export default UseRefBasics;
