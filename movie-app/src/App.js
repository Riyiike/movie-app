import React from 'react';
import Search from './components/search'
import './App.css';

function App() {
const [state , setState] = useState({

})

  const handleInput = (e) => {
    let s = e.target.value;

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
      </main>
    </div>
  );
}

export default App;
