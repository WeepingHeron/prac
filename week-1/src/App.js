import React from 'react'

function  Son() {
  return <div>나는 아들이에요!</div>;
}

function Mother() {
  const name = '흥부인';
  return <Son />;
}

function Grandfather() {
  return <Mother />;
}

function App() {
  return <Grandfather />;
}

export default App;