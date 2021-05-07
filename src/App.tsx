import React, { useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { BsChevronDoubleDown } from "react-icons/bs";
import Routes from "./routes/Routes";

import logo from './logo.svg';
import styles from "./Style.module.css";
import './App.css';

function App() {

  const moviesRef = useRef<HTMLDivElement>(null);

  function handleScrollDown() {
    moviesRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome
          </p>
          <p>
            <span>React </span>
            <a
              className="App-link"
              href="https://redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux
            </a>
            <span> movie </span>
            <a
              className="App-link"
              href="https://www.themoviedb.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TMDB
            </a>
            <span> finder </span>
          </p>

          <button
            className={styles.button}
            aria-label="Decrement value"
            onClick={() => handleScrollDown()}
          >
            <span>Movies</span>
            <BsChevronDoubleDown />
          </button>

        </header>

        <Routes ref={moviesRef} />

      </div>
    </Router>
  );
} // onClick={() => dispatch(decrement())}

export default App;
