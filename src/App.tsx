import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AdoptPage from './pages/AdoptPage'

// 引入bootstrap框架樣式  
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

// 定義專案基礎路徑
const basename = import.meta.env.VITE_PUBLIC_URL

const App = () => {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/adopts" element={<AdoptPage />}></Route>
        <Route path="*" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
