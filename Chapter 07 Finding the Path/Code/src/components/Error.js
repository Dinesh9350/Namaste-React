import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
  const err = useRouteError()
  console.log(err)
  return (
    <div className='text-center'>
      <h3>{err.status}</h3>
      <h4>{err.statusText}</h4>
    </div>
  )
}

export default Error
