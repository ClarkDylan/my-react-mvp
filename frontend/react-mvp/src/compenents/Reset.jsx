import React from 'react'
import { BiRefresh } from 'react-icons/bi'

const Reset = (props) => {
  return (
    <div>
      <BiRefresh className='reset' onClick={() => {
        fetch('http://localhost:9003/removeAll', { method: 'DELETE' })
          .then(props.setBal(0))
          .then(props.setTotal(0))
          .then(props.setExpense([]))
      }} />
    </div>
  )
}

export default Reset
