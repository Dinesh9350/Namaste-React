import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IMG_CDN_URL } from '../config'
import Shimmer from './shimmer/Shimmer'
import { Container, Button, Card } from 'react-bootstrap'

const RestaurantMenu = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState(null)
  const [addons, setAddons] = useState(null)

  useEffect(() => {
    getRestaurant()
  }, [])

  const getRestaurant = async () => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6696613&lng=77.0568756&restaurantId=${id}`
      )

      const json = await response.json()
      setRestaurant(json?.data?.cards[0]?.card?.card?.info)
      setAddons(
        json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card?.itemCards
      )
    } catch (error) {
      console.error('Error fetching restaurant data:', error)
    }
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <>
      <div className='restaurantDetails d-lg-flex justify-content-center text-center align-items-center'>
        <img
          className='resDetailImg img-fluid'
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          alt={restaurant?.name}
        />
        <div className='m-5'>
          <h3>{restaurant?.name}</h3>
          <p>
            {restaurant?.areaName}, {restaurant?.city}
          </p>
          <p>{restaurant?.avgRating}</p>
          <p>{restaurant?.totalRatingsString}</p>
          <p>{restaurant?.sla?.slaString}</p>
          <p>{restaurant?.cuisines?.join(', ')}</p>
          <p>{restaurant?.costForTwoMessage}</p>
        </div>
      </div>
      <div className='text-center mt-5'>
        <h3 className='my-5 mb-3'>Recommened</h3>
        {addons &&
          addons.map((addon) => (
            <div
              key={addon.id}
              className='container d-flex justify-content-between align-items-center border-bottom p-4'
            >
              <div className='restrauntdiv mx-md-5 px-md-5 d-flex'>
                <Card.Img
                  className='resDetailRecImg img-fluid'
                  variant='top'
                  src={IMG_CDN_URL + addon?.card?.info?.imageId}
                />

                <div className='w-75 mx-md-5'>
                  <h5 className=''>{addon?.card?.info?.name}</h5>
                  <p className=' d-none d-md-block'>
                    {addon?.card?.info?.description}
                  </p>
                  <Button className=''>Add</Button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  )
}

export default RestaurantMenu

//   <div>
//     <img
//       className='ResImg'
//       src={IMG_CDN_URL + addon?.card?.info?.imageId}
//       alt={restaurant?.name}
//     />
//     <p>{addon?.card?.info?.name}</p>
//   </div>
//   <Button>Add</Button>
//   <div></div>
// </div>
