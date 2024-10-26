import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import View from './pages/View'
import PageNotFound from './pages/PageNotFound'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/view' element={<View/>} />
        <Route path='/*' element={<PageNotFound/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App