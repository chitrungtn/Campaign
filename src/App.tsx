import Campaign from './components/Campaign'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <Routes >
      <Route path='/Campaign/' element={<Campaign />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App  
