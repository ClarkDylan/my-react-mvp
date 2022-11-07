import React from 'react';

const BalanceInput = (props) => {

  const updateBalance = (event) => {
    let amount = event.target.value;
    props.setTotal(amount)
    props.setBal(amount)
  }

  return (
    <div className='balance-input'>
      <h4>Input Account Balance To Start</h4>
      <input type='number' className='inputBal' placeholder='Account balance' onKeyUp={updateBalance}></input>
    </div>
  )
}

export default BalanceInput
