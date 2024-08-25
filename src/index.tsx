import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from 'styled-components' // 可以傳入 globals 參數的工具

import {Header, Footer } from './components/AdoptPage/index.ts'

// 宣告 theme 變數
const theme = {
  colors: {
    primary_300: '#ff7777',
    primary_400: '#e33e3e',
    primary_500: '#af0505'
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
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
  </StrictMode>
)
