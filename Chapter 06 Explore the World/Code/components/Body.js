import { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import Shimmer from './shimmer/Shimmer'

const Body = () => {
  const [searchText, setSearchText] = useState('')
  const [allRestaurants, setAllRestaurants] = useState([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([])

  useEffect(() => {
    getRestaurants()
  }, [])

  async function getRestaurants() {
    try {
      const response = await fetch(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6696613&lng=77.0568756&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
      )
      const data = await response.json()
      setAllRestaurants(
        data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      )
      setFilteredRestaurants(
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
            setFilteredRestaurants(filterData)
          }}
        >
          Search
        </button>
      </div>
      <div className='restraunt-list'>
        {filteredRestaurants?.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
          )
        })}
      </div>
    </>
  )
}

export default Body
