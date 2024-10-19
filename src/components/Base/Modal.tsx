import React from 'react';
import ReactModal from 'react-modal';
import { useModal } from '../../Context/ModalProvider';
import CloseIcon from '../../Icons/CloseIcon';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
  },
   zIndex: '99'
};
ReactModal.setAppElement('#root');

const Modal = ({ children, showModal, setShowModal }: { children: React.ReactNode, showModal: boolean, setShowModal: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const { toggleModal } = useModal();

  const afterOpenModal = () => {
    console.log('modal is opened')
  }

  const closeModal = () => {
    toggleModal(false);
    setShowModal(false);
  }

  return (
    <ReactModal
      isOpen={showModal}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="relative min-w-[300px] min-h-[300px] rounded-[2px] bg-white">
        <span className="absolute top-6 right-6 cursor-pointer" onClick={closeModal}>
          <CloseIcon />
        </span>
       {children}
      </div>
    </ReactModal>
  )
}

export default Modal