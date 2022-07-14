import React, {useContext, useState, useRef, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Alert } from 'react-bootstrap';
import { QuizContext } from '../Helpers/Contexts';


function MainMenu() {
    const {gameState, setGameState} = useContext(QuizContext);
    const [errorMessage, setErrorMessage] = useState(false)
    const inputRef = useRef();
    const [username, setUsername] = useState("");
    
    useEffect(() =>{
        inputRef.current.focus();
    })
    const startExam = () => {
        if(!username){
            setErrorMessage(true)
            inputRef.current.focus();
        }else{
            localStorage.setItem("username", JSON.stringify(username))
            console.log("Saved in localStorage")
            setUsername('');
            setGameState("quiz");
        }
       
    }
  return (
    <div className='Menu'>
        {errorMessage && <Alert variant='danger' style={{height: 35, border: "none", lineHeight: "50%"}}>Please enter your username to start exam</Alert>}
        <Form.Label style={{fontSize:25}}>Username</Form.Label>
        <Form.Control type="text" style={{width:"60%"}} onChange={(event) => {setUsername(event.target.value)}} ref={inputRef} placeholder="Username"/><br/>
        <Button style={{width: 300, height: 50, background: "#fff", color: "lightseagreen", border: "none", fontSize: 20}} onClick={() =>{startExam()}}>Start Quiz</Button>
   </div>
  )
}

export default MainMenu
