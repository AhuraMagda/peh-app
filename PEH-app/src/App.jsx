
import './scss/main.css';
import Main from './components/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"></Route>
      </Routes>
    <div className='page-wrapper'>
      <Main />
    </div>

    </BrowserRouter>

  )
}

export default App
