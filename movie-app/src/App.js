import React from 'react';
import Search from './components/search'
import axios from 'axios'
import Results from './components/Results'
import Popup from './components/popup'

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

  const openPopup = id => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;

      console.log(result);

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }

  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />

        <Results results={state.results} openPopup={openPopup} />

        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
      </main>
    </div>
  );
}

export default App;
