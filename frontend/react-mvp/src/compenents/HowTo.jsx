import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const HowTo = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <div>
      <a className='howTo' onClick={() => setShow(!show)}>How To Use</a>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>How To Steps</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>1. Input your starting account balance.</p>
          <p>2. Click the [+] button to add a bill/expense.</p>
          <p>3. Check your remaining balance to see if you can afford this budget plan</p>
          <p>4. If you need to delete something, click the (x) button. Balance will reflect.</p>
          <p>Happy budgeting!</p>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default HowTo