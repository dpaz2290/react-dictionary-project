
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
        <div className= "container">
          <main>
            <Dictionary />
          </main>
          <footer className="text-center">  <small>Coded by Daniela Paz - Open Sourced on <a href="https://github.com/dpaz2290/react-dictionary-project" rel="noreferrer" target= "_blank">GitHub</a></small></footer>
        </div>
    </div>
  );
}

export default App;
