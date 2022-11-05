import React from 'react'

const Remaining = (props) => {
  return (
    <div>
      <p>Remaining in Account:</p>
      <p className='remaining'>${props.bal}</p>
    </div>
  )
}

export default Remaining
