import React from 'react'

function Error({error}) {
  return (
    <>
      <h2>{error.message}</h2>
    </>
  )
}

export default Error
