import React, {useContext, useState} from 'react';
import { Button, Alert } from 'react-bootstrap';
import { QuizContext } from '../Helpers/Contexts';
import { Questions } from '../Helpers/QuestionBank';


function EndScreen() {
    const {score, setScore, setGameState} = useContext(QuizContext);

    const restartQuiz = () => {
        if(localStorage.getItem("username") && window.confirm("Restarting the Quiz will reset your score")){
            setScore(0);
            setGameState("quiz");
        }
    };
    const viewSummary = () => {
           setGameState("summary");
    };
  return (
    <div className='endScreen'>
        {score > Questions.length/2 ?(
            <Alert variant='success'>Congratulations {localStorage.getItem("username").toString()}, You Made It!!!</Alert>
        ):(
            <Alert variant='danger'>Sorry {localStorage.getItem("username")}, You Missed, Try Again!!!</Alert>
        )}
        <h1>Quiz Finished</h1>
        <h3>Score: {score} / {Questions.length}</h3><br/>

        <Button onClick={viewSummary}>Summary</Button><br/>

        <Button onClick={restartQuiz}>Try Again</Button>
    </div>
  )
}

export default EndScreen