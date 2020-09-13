import React from 'react';
import Search from './components/search'
import axios from 'axios'
import Results from './components/Results'

function App() {
  const [state , setState] = useState({
    s: "",
    results: [],
    selected: {}
  });
    const apiurl = "http://www.omdbapi.com/?apikey=dfe6d885";

    //adding the api url and concatenate string the axios to retrun results/data from the api call
    const search = (e) => {
      if (e.key === "Enter") {
        axios(apiurl + "&s=" + state.s).then(({ data }) => {
          let results = data.Search;
  //set previous state and update the result with results
          setState(prevState => {
            return { ...prevState, results: results }
          })
        });
      }
    }


// adding the handle Input function
  const handleInput = (e) => {
    let s = e.target.value;

    //previous stae is equal to the search query
    setState(prevState => {
      return { ...prevState, s: s}
    });

  }
  return (
    <div className="App">
      <header className>
        <h1>"Movie Database"</h1>
      </header>
      <main>
      <Search handleInput={ handleInput}/>
      <Results results ={state.results}/>
      </main>
    </div>
  );
}

export default App;
