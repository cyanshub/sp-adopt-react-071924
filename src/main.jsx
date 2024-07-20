import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css' // 載入 bootstrap 框架樣式
import 'bootstrap/dist/js/bootstrap.bundle.min' // 載入 bootstrap 框架 javascript
import { ThemeProvider } from 'styled-components' // 可以傳入 globals 參數的工具

// Components
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'

// 宣告 theme 變數
const theme = {
  colors: {
    primary_300: '#ff7777',
    primary_400: '#e33e3e',
    primary_500: '#af0505',
  }
}

// 主要畫面
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* // 包住 App，並自訂 theme 屬性, 並傳入 global 痊域參數 */}
    <ThemeProvider theme={theme}>

      <div className="d-flex flex-column min-vh-100 bg-light">
        <Header />
        <main className="flex-shrink-0" role="main">
          <div className="container pt-5">
            <div className="pt-5">
              <App /> {/* 類似 hbs 的 {{{body}}} */}
            </div>
          </div>
        </main>
        <Footer />
      </div>

    </ThemeProvider>
  </React.StrictMode>,
)
