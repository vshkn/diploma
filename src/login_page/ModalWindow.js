import React, { useState } from 'react';
import '../App.css';
import LoginModal from './LoginModal';
const ModalWindow = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
  return (
    <div>
 
<div>
      <button onClick={openModal}>Open Login</button>
      <LoginModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
    </div>
  );
};
export default ModalWindow;