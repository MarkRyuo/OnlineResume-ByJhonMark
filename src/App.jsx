import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from './pages/Homepage';
import About from './pages/About';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>

        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App ;
