import React, {useState, useContext} from 'react'
import { Button } from 'react-bootstrap';
import { Questions } from '../Helpers/QuestionBank';
import { QuizContext } from '../Helpers/Contexts';

function Quiz() {
    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");
    const {score, setScore, setGameState} = useContext(QuizContext);

    const nextQuestion = () =>  {
        if(optionChosen === Questions[currQuestion].ans){
            setScore(score + 1);
        }
      
        setCurrQuestion(currQuestion + 1);
    }

    const finishQuiz = () => {
        if(optionChosen === Questions[currQuestion].ans){
            setScore(score + 1);
        }
        setGameState("endscreen");
    }
  return (
    <div className='Quiz'>
           Question{currQuestion + 1}/{Questions.length}
        <h1 style={{fontSize: 25}}>{Questions[currQuestion].prompt}</h1>
        <div className='options'>
            A.<button style={{height: "auto"}} onClick={() => {setOptionChosen("A")}}>{Questions[currQuestion].A}</button><br/><br/>
            B.<button style={{height: "auto"}} onClick={() => {setOptionChosen("B")}}>{Questions[currQuestion].B}</button><br/><br/>
            C.<button style={{height: "auto"}} onClick={() => {setOptionChosen("C")}}>{Questions[currQuestion].C}</button><br/><br/>
            D.<button style={{height: "auto"}} onClick={() => {setOptionChosen("D")}}>{Questions[currQuestion].D}</button><br/><br/>
        </div><br/>
        {currQuestion == Questions.length - 1 ? (
            <Button onClick={finishQuiz}>Finish</Button>  
        ) : (        
            <Button onClick={nextQuestion}>Next</Button>
        )}
    </div>
    
  )
}

export default Quiz