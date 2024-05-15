import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './pages/ItemListContainer/ItemListContainer'
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <div className="container my-5">
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/genre/:idGenre' element={<ItemListContainer/>}/>
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
