import {useState } from 'react';
import CreateContext from './CreateContext.js'

const ContextProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [start,setStart] = useState(false);
  
  return (
    <CreateContext.Provider value={{ score, setScore,start,setStart }}>
      {children}
    </CreateContext.Provider>
  );
};

export default ContextProvider;
