import React, { useState, useEffect } from 'react'
import AddButton from './AddButton'
import Balance from './BalanceDisplay'
import Expenses from './Expenses'
import Remaining from './Remaining'
import BalanceInput from './BalanceInput'
import 'bootstrap/dist/css/bootstrap.min.css';
import wallet from './wallet.png'
import HowTo from './HowTo'
import Reset from './Reset'



const App = () => {
  const [expense, setExpense] = useState([])
  const [remaining, setRemaining] = useState(0)
  const [bal, setBal] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    fetch('http://localhost:9003/')
      .then(res => res.json())
      .then(
        (result) => {
          setExpense(result)
        }
      )
  }, []);

  const updateRemaining = (value) => {
    setRemaining(value)
  }

  return (
    <div className='container'>
      <h1><img src={wallet} alt='site logo' className='logo' />MyBill</h1>
      <BalanceInput setTotal={setTotal} setBal={setBal} />
      <Balance total={total} />
      <AddButton setExpense={setExpense} setBal={setBal} updateRemaining={updateRemaining} bal={bal} total={total} />
      {expense.map(bill => <Expenses key={bill.id} bill={bill} setExpense={setExpense} setBal={setBal} bal={bal} />)}
      <Remaining remaining={remaining} updateRemaining={updateRemaining} bal={bal} total={total} />
      <Reset setTotal={setTotal} setBal={setBal} setExpense={setExpense} />
      <HowTo />
    </div>
  )
}

export default App
