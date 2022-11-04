import React, { useEffect, useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const Expenses = (props) => {

  return (
    <ul>
      <li>{props.bill.expense_name} ${props.bill.expense_price} <AiOutlineCloseCircle className='deleteButton' onClick={() => {
        fetch(`http://localhost:9003/${props.bill.id}`, { method: 'DELETE' })
          .then(console.log(`Deleted ${props.bill.expense_name}`))
      }} /></li>
    </ul>
  )
}

export default Expenses
