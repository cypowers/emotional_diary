import './App.css';
import { getEmotionImgById } from './util';


function App() {
  return (
    <div className="App">
      <h1>감정 일기장</h1>
      <img src={getEmotionImgById(1)} alt="Emotion 1" />
      <img src={getEmotionImgById(2)} alt="Emotion 2" />
      <img src={getEmotionImgById(3)} alt="Emotion 3" />
      <img src={getEmotionImgById(4)} alt="Emotion 4" />
      <img src={getEmotionImgById(5)} alt="Emotion 5" />
    </div>
  );
}

export default App;
