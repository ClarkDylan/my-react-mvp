import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai'

const Expenses = (props) => {

  return (
    <>
      <div className='bill'>{props.bill.expense_name} ${props.bill.expense_price} <AiOutlineCloseCircle className='deleteButton' onClick={() => {
        fetch(`http://localhost:9003/${props.bill.id}`, { method: 'DELETE' })
          .then(() => {
            props.setExpense((bills) => {
              return bills.filter((bill) => props.bill.expense_name !== bill.expense_name)
            })
          })
          .then(props.setBal(props.bal + props.bill.expense_price))
      }} /></div>
    </>
  )
}

export default Expenses
