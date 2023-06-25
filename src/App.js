import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my personal website! I'm currently working on developing it. Please check back later for updates.
        </p>
        <p> 
        In the meantime, be sure to checkout my profile, and connect with me, on&nbsp;
        <a
          className="App-link"
          href="https://www.linkedin.com/in/zachary-stange/"
          target = "_blank"
        >
          LinkedIn
        </a>
        </p>
      </header>
    </div>
  );
}

export default App;
