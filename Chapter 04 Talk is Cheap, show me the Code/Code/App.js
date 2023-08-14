import React from 'react'
import ReactDOM from 'react-dom/client'
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Container } from 'react-bootstrap'
import restrauntList from './data.js'

import './App.css'
//React Expression
const title = (
  <a href='/'>
    <img
      className='img'
      src='https://scontent.fdel11-3.fna.fbcdn.net/v/t39.30808-6/223698849_338687987975290_1364913913908617456_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=be3454&_nc_ohc=QZ9Mw5xpFYIAX9hRqGC&_nc_ht=scontent.fdel11-3.fna&oh=00_AfAVO5QWLYrD-FKuDqEWhwWA0_UpIm-azyh700WJXbX9Lw&oe=64DEBB26'
      alt='logo'
    />
  </a>
)

const Header = () => {
  return (
    <div className='header'>
      {title}
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Support</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const imgUrl =
  'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'

const RestrauntCard = ({ name, cloudinaryImageId, avgRating, cuisines }) => {
  return (
    <Card className='restrauntCard'>
      <Card.Img
        variant='top'
        src={
          'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' +
          cloudinaryImageId
        }
      />
      <Card.Body>
        <h5>{name}</h5>
        <b>
          <p>⭐ {avgRating}</p>
        </b>
        <p className='cuisines'>{cuisines.join(', ')}</p>
      </Card.Body>
    </Card>
  )
}

const Body = () => {
  return (
    <div className='restraunt-list'>
      {restrauntList.map((restraunt) => {
        return <RestrauntCard key={restraunt.info.id} {...restraunt.info} />
      })}
    </div>
  )
}
const Footer = () => {
  return <h3>Footer</h3>
}

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
