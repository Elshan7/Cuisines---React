import React from 'react'
import "./App.css"
import Home from './components/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalProvider from './components/context/GlobalProvider';

const App = () => {
  return (
    <div>
      <GlobalProvider>
        <Home />
      </GlobalProvider>

    </div>
  )
}

export default App
