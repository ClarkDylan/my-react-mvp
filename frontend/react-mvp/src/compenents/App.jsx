import React, { useState, useEffect } from 'react'
import AddButton from './AddButton'
import Balance from './Balance'
import Container from './Container'
import Expenses from './Expenses'
import Remaining from './Remaining'
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
  const [expense, setExpense] = useState([])

  useEffect(() => {
    fetch('http://localhost:9003/')
      .then(res => res.json())
      .then(
        (result) => {
          setExpense(result)
        }
      )
  }, []);

  return (
    <>
      <Container />
      <Balance />
      <AddButton />
      {expense.map(bill => <Expenses key={bill.id} bill={bill} />)}
      <Remaining />
    </>
  )
}

export default App
