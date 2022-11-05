import React from 'react'

const Balance = (props) => {
  return (
    <div>
      <p>Account Balance:</p>
      <p className='balance'>${props.total}</p>
    </div>
  )
}

export default Balance
