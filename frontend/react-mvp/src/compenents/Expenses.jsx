import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai'

const Expenses = (props) => {

  return (
    <>
      <div>{props.bill.expense_name} ${props.bill.expense_price} <AiOutlineCloseCircle className='deleteButton' onClick={() => {
        fetch(`http://localhost:9003/${props.bill.id}`, { method: 'DELETE' })
          .then(console.log(`Deleted ${props.bill.expense_name}`))
      }} /></div>
    </>
  )
}

export default Expenses
