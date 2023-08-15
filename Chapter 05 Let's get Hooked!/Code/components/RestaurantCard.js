import { Card } from 'react-bootstrap'
import { IMG_CDN_URL } from '../config'

const RestaurantCard = ({ name, cloudinaryImageId, avgRating, cuisines }) => {
  return (
    <Card className='restrauntCard'>
      <Card.Img variant='top' src={IMG_CDN_URL + cloudinaryImageId} />
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

export default RestaurantCard
