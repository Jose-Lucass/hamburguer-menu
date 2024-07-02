import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './pages/header'
import Main from './pages/main'
import History from './pages/section-history'

import Busca from './pages/location'
import PapoFooter from './pages/footer'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Main/>
    <History/>
    <Busca/>
    <PapoFooter/>
  </React.StrictMode>,
)
