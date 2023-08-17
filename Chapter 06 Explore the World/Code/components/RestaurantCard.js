import { Card } from 'react-bootstrap'
import { IMG_CDN_URL } from '../config'

const RestaurantCard = ({ name, cloudinaryImageId, avgRating, cuisines }) => {
  return (
    <Card className='restrauntCard'>
      <Card.Img variant='top' src={IMG_CDN_URL + cloudinaryImageId} />
      <Card.Body>
        <>
          <b>
            <p className='one-line m-0'>{name}</p>
          </b>
          <p className='rating m-0'>⭐ {avgRating}</p>
          <p className='cuisines one-line m-0'>{cuisines.join(', ')}</p>
        </>
      </Card.Body>
    </Card>
  )
}

export default RestaurantCard
