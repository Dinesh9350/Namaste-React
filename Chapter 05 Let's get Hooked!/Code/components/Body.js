import { useState } from 'react'
import { restaurantList } from '../config'
import RestaurantCard from './RestaurantCard'
const Body = () => {
  const [searchText, setSearchText] = useState('')
  const [restaurants, setRestaurants] = useState(restaurantList)
  return (
    <>
      <div className='search-container'>
        <input
          type='text'
          className='search-input'
          placeholder='Search...'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value.toLowerCase())}
        />
        <button
        className='search-btn'
          onClick={() => {
            const filterData = restaurants.filter((restaurant) => {
              return restaurant.info.name.toLowerCase().includes(searchText)
            })
            setRestaurants(filterData)
          }}
        >
          Search
        </button>
      </div>
      <div className='restraunt-list'>
        {restaurants.map((restraunt) => {
          return <RestaurantCard key={restraunt.info.id} {...restraunt.info} />
        })}
      </div>
    </>
  )
}

export default Body
