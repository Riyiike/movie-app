import React from 'react';
import Search from './components/search'
import './App.css';

function App() {
const [state , setState] = useState({
  s: "",
  results: [],
  selected: {}
});
const apiurl = "http://www.omdbapi.com/?apikey=dfe6d885";

  const handleInput = (e) => {
    let sNew = e.target.value;

    setState(prevState => {
      return { ...prevState, s: sNew}
    });

  }
  return (
    <div className="App">
      <header className>
        <h1>"Movie Database"</h1>
      </header>
      <main>
      <Search handleInput={ handleInput}/>
      </main>
    </div>
  );
}

export default App;
