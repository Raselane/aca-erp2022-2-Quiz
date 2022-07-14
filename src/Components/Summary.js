import React, {useState, useContext} from 'react'
import { Button, Alert } from 'react-bootstrap';
import { Questions } from '../Helpers/QuestionBank';
import { QuizContext } from '../Helpers/Contexts';


function Summary() {
    const [currQuestion, setCurrQuestion] = useState(0);
    const {score, setScore, setGameState} = useContext(QuizContext);


    const nextQuestion = () =>  {
       
      
        setCurrQuestion(currQuestion + 1);
    }
    const lastQuestion = () =>{
        setCurrQuestion(currQuestion - 1);
    }
    const restartQuiz = () => {
        if(localStorage.getItem("username") && window.confirm("Restarting the Quiz will reset your previous score")){
            setScore(0);
            setGameState("quiz");
        }
    };
    const viewScore = () => {
        if(localStorage.getItem("username")){
            setGameState("endscreen");
        }
    };
   
  return (
    <div className='Summary' style={{width: 600,height: "auto"}}>
           Question{currQuestion + 1}/{Questions.length}
        <h1 style={{fontSize: 25}}>{Questions[currQuestion].prompt}</h1>
        <div className='options'>
            A.<button style={{height: "auto"}}>{Questions[currQuestion].A}</button><br/><br/>
            B.<button style={{height: "auto"}}>{Questions[currQuestion].B}</button><br/><br/>
            C.<button style={{height: "auto"}}>{Questions[currQuestion].C}</button><br/><br/>
            D.<button style={{height: "auto"}}>{Questions[currQuestion].D}</button><br/><br/>

            <Button variant='success'>Correct Answer: {Questions[currQuestion].ans}</Button>
            <Button variant='light' style={{width: "auto", height: "auto", fontSize: 18}}>{Questions[currQuestion].summary}<br/><span style={{fontSize: 16}}>Usage: <i>{Questions[currQuestion].Usage}</i></span></Button>
        </div><br/>
        {currQuestion === 0 ? (
             <div style={{display: "flex", width: "100%", alignItems: "center"}}>
             <Button onClick={viewScore} style={{marginLeft: "15%",width: "30%",}}>Back</Button>       
             <Button onClick={nextQuestion} style={{marginLeft: "15%",width: "30%",}}>Next</Button>
             </div>
        ) : currQuestion === Questions.length - 1 ?(
            <div style={{display: "flex", width: "100%", alignItems: "center"}}>
             <Button onClick={lastQuestion} style={{marginLeft: "3%",width: "30%",}}>Previous</Button>
             <Button onClick={viewScore} style={{marginLeft: "3%",width: "30%",}}>View Score</Button>              
             <Button onClick={restartQuiz} style={{marginLeft: "3%",width: "30%",}}>Restart Quiz</Button>
             </div>
        ):( 
            <div style={{display: "flex", width: "100%", alignItems: "center"}}>
            <Button  onClick={lastQuestion} style={{marginLeft: "15%",width: "30%",}}>Previous</Button>       
            <Button onClick={nextQuestion} style={{marginLeft: "15%",width: "30%",}}>Next</Button>
            </div>
        )}
    </div>
    
  )
}

export default Summary