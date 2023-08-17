import axios from 'axios'
import { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import Shimmer from './shimmer/Shimmer'

const Body = () => {
  const [searchText, setSearchText] = useState('')
  const [allRestaurants, setAllRestaurants] = useState([])
  const [filteredRestaurants, setFilterRestaurants] = useState([])

  useEffect(() => {
    getRestaurants()
  }, [])

  async function getRestaurants() {
    try {
      const response = await axios.get(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6696613&lng=77.0568756&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
      )
      const data = response.data
      console.log(data)
      setAllRestaurants(
        data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      )
      setFilterRestaurants(
        data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      )
    } catch (error) {
      console.error('Error fetching restaurant data:', error)
    }
  }

  //early return
  if (filteredRestaurants?.length === 0) {
    return <Shimmer />
  }
  return (
    <>
      <div className='search-container'>
        <input
          type='text'
          className='search-input'
          placeholder='Search...'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className='search-btn'
          onClick={() => {
            const filterData = allRestaurants.filter((restaurant) => {
              return restaurant.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            })
            setFilterRestaurants(filterData)
          }}
        >
          Search
        </button>
      </div>
      <div className='restraunt-list'>
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
          )
        })}
      </div>
    </>
  )
}

export default Body
