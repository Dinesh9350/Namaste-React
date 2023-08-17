import React from 'react'
import ReactDOM from 'react-dom/client'
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import Header from './components/Header.js'
import Body from './components/Body'
import Footer from './components/Footer'
import './App.css'

const AppLayout = () => {
  return (
    <Container>
      <Header />
      <Body />
      <Footer />
    </Container>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout />)
