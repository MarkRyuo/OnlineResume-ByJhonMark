import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from './pages/Homepage';

function App() {

  return (
    <>
      <Homepage />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>

        


      </BrowserRouter>
    </>
  )
}

export default App ;
