import React from 'react';

import './App.css';
import { PathInput } from './components/PathInput';

function App() {
  const title: string = '여기에 폴더를 드래그 앤 드롭 해주세요';
  return (
    <div className="App">
      <PathInput placeholder={title}></PathInput>
    </div>
  );
}

export default App;
