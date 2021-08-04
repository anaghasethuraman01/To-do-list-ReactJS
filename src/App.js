
import './App.css';
import React from 'react';
import Header from './components/Header';
import ShowTask from './components/ShowTask';
import { GlobalStore } from './components/GlobalStore';



function App() {
  return (
    <div className="App">
       {/* by wrapping inside GlobalStore means that the data context that is available in 
       GlobalStore and is being exposed to the components wrapped inside it */}
      <GlobalStore>
        <Header/>
        <ShowTask/>
      </GlobalStore>
      
      
    </div>
  );
}

export default App;
