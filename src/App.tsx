import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Parent from './components/ContainerSample';
import Page from './components/ContextSample';
import Counter from './components/HooksUseState';
import { Parent } from './components/Parent';

function App() {
  return (
    <>
      {/* <Parent /> */}
      <Page />
      <hr />
      <Counter initialValue={0} />
      <hr />
      <Parent />
    </>
  );
}

export default App;
