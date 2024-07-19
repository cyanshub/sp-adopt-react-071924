import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css' // 載入 bootstrap 框架樣式
import { ThemeProvider } from 'styled-components' // 可以傳入 globals 參數的工具

// 宣告 theme 變數
const theme = {
  colors: {
    primary_300: '#ff7777',
    primary_400: '#e33e3e',
    primary_500: '#af0505',
  }
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* // 包住 App，並自訂 theme 屬性, 並傳入 global 痊域參數 */}
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
