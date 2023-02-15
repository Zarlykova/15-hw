

import styled from 'styled-components';
import './App.css';
import { Inputs } from './components/input/Input';
import { useCounter } from './hooks/useCounter';
import { useTimer } from './hooks/useTimer';


function App() {

 const {count , incrementHandler , decrementHandler} = useCounter()

 const { minutes, seconds , setMinutes , setSeconds , timer} = useTimer()

const restart =()=>{
setSeconds(0);
setMinutes(0);
}
const stop=()=>{
setSeconds(clearInterval(timer))
}


  return (

    <> 
    <div >
      <Card>
      
      <Button onClick={incrementHandler}> IncrementLevel   </Button>
        <Text> {count} </Text>
      <Button onClick={decrementHandler}> DecrementLevel   </Button>
      </Card>
      
      <Card>
      <Inputs/>
      </Card>
      <Card>

        <div>
           <h1>{minutes <10? "0"+minutes:minutes}:{seconds<10?"0"+seconds:seconds}</h1>
        </div>
        <div>
          <Button onClick={stop}> Stop </Button>
          <Button onClick={restart}> Restart </Button>
        </div>
       
      </Card>
      
    </div>
    </>
    
  );
}

export default App;

const Card = styled.div`
margin-top: 2rem;
background-color: yellow;
width: 40rem;
display: flex;
-webkit-box-shadow: 0px 0px 33px 3px rgba(34, 60, 80, 0.4);
-moz-box-shadow: 0px 0px 33px 3px rgba(34, 60, 80, 0.4);
box-shadow: 0px 0px 33px 3px rgba(34, 60, 80, 0.4);
border-radius: 10px;
padding: 2rem;


`


const Text = styled.h3`
text-align: center;
font-size: 2rem;

`
const Button = styled.button`
padding: 1rem;
border-radius: 10px;
border:none ;
background-color: gray;
color: white ;
margin-right: 1rem;



`