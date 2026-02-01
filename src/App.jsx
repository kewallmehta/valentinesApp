import { useState } from 'react'
import './App.css'
import YesNoButtons from './yesNoComponent';
import TypingText from './typingText';
import FinalScreen from './finalScreen';

function App() {
  
  const [yesClicked, setYesClicked] = useState(false);
return (
  <>
<div className="hearts-container">
  <div className="heart"></div>
  <div className="heart"></div>
  <div className="heart"></div>
  <div className="heart"></div>
</div>

      {!yesClicked &&
      <div>
        <a href="https://vite.dev" target="_blank">
        </a>
        <a href="https://react.dev" target="_blank">
        </a>
      </div>}
      <TypingText text="Will you be my Valentine? My Cutums :)" />
      <YesNoButtons setYesClicked={setYesClicked}/>
      {yesClicked && <FinalScreen />}
    </>
  );
}

export default App
