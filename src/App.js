import { useState } from 'react';
import axios from 'axios';
import './App.css';
import Quote from './component/Quote';

function App() {

const sampleQuote = 
  {
  "quote": "Last night's \"Itchy & Scratchy\" was, without a doubt, the worst episode ever. Rest assured that I was on the Internet within minutes, registering my disgust throughout the world.",
  "character": "Comic Book Guy",
  "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FComicBookGuy.png?1497567511970",
  "characterDirection": "Right"
  }

const [quote, setQuote] = useState(sampleQuote);



const getQuote = () => {
  axios
    .get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then((response) => response.data)
    .then((data) => {
      setQuote(data[0]);
  })
}

  return (
    <div className="App">
        <h1>Simpson random quotes</h1>
          <Quote quote = {quote}/>
          <button onClick={getQuote}>GET QUOTE</button>
    </div>
  );
}

export default App;
