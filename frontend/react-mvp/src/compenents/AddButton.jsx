import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { GoDiffAdded } from 'react-icons/go';

const AddButton = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [bill, setBill] = useState('');
  const [price, setPrice] = useState(0);

  const addNewBill = (event) => {
    let text = event.target.value;
    setBill(text);
  };

  const addNewPrice = (event) => {
    let price = event.target.value;
    setPrice(price);
  };

  return (
    <>
      <button className='addButton' onClick={() => setShow(!show)}><GoDiffAdded /></button>

      <Modal className='addExpenseWindow' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type='text' className='newInput' id='inputName' placeholder='Expense name' onKeyUp={addNewBill}></input>
          <input type='number' className='newInput' id='inputPrice' placeholder='Expense price' onKeyUp={addNewPrice}></input>
          <button className='addButton' onClick={() => {
            fetch('http://localhost:9003/add_bill', {
              method: "POST",
              mode: "cors",
              headers: {
                'Content-type': 'application/json'
              },
              body: JSON.stringify({
                expense_name: bill,
                expense_price: price
              })
            })
              .then(console.log('Added'))
              .then(handleClose)
          }}>
            <GoDiffAdded />
          </button>
        </Modal.Body>
      </Modal>

    </>
  )
}
export default AddButton
