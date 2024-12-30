import { useContext } from 'react';
import CreateContext from './Store/CreateContext.js';
import './Home.css';

const Home = () => {
  const {start,setStart} = useContext(CreateContext);
  const handleStart = ()=>{
    setStart(true)
  }
  return(
    
    <div className="container">
      
      <h2>
        Quizz app
      </h2>
      
      <div className="info">
       <h2>
        Game Details:-
       </h2>
       <ol>
        <li>Click on start to play</li>
        <li>-10score on wrong answer</li>
        <li>+10score on correct answer</li>
       </ol>
      </div>
      
      <button onClick={handleStart}>Start</button>
      
      
    </div>
    
    
    )
  
  
};

export default Home;
