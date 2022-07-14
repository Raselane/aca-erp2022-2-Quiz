import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import EndScreen from './Components/EndScreen';
import MainMenu from './Components/MainMenu';
import Summary from './Components/Summary';
import Quiz from './Components/Quiz';
import { QuizContext } from './Helpers/Contexts';

function App() {
  const [gameState, setGameState] = useState("menu");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);
  //const {users, setUsers} = useState(users);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Quiz App</h1>
        <QuizContext.Provider value={{gameState,setGameState,score, setScore}}>
        {gameState === "menu" && <MainMenu/>}
        {gameState === "quiz" && <Quiz/>}
        {gameState === "endscreen" && <EndScreen/>}
        {gameState === "summary" && <Summary/>}
        </QuizContext.Provider>
      </header>
    </div>
  );
}

export default App;
