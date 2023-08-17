import { useState } from 'react'

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
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div className='header px-xl-5'>
      {title}
      <div className='nav-items'>
        <ul>
          <a href='/'>
            <li>Home</li>
          </a>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
      <div>
        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )}
      </div>
    </div>
  )
}

export default Header
