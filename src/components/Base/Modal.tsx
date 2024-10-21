/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import ReactModal from 'react-modal';
import { useModal } from '../../Context/ModalProvider';
import CloseIcon from '../../Icons/CloseIcon';
import Speaker1 from '../../assets/speaker1.png';
import Speaker2 from '../../assets/speaker2.png';
import Speaker3 from '../../assets/speaker3.png';
import Button from './Button';
import { useTheme } from '../../Context/ThemeProvider';

const speakerImages = [Speaker1, Speaker2, Speaker3];

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 10000
  },
};
ReactModal.setAppElement('#root');

const Modal = ({ showModal, setShowModal, item }: { showModal: boolean, setShowModal: React.Dispatch<React.SetStateAction<boolean>>, item: any }) => {
  const { toggleModal } = useModal();
  const { darkMode } = useTheme();

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
      <div className="relative min-w-[300px] md:w-[335px] min-h-[300px] rounded-[2px] bg-main-light dark:bg-main-dark">
        <span className="absolute top-6 right-6 cursor-pointer" onClick={closeModal}>
          {darkMode ? <CloseIcon color="#ADA9BB" /> : <CloseIcon />}
        </span>
        <div>
          <div className="p-6 pb-0">
            <h2 className="text-lg text-text-alt-light leading-7 font-[600] dark:text-secondary">{item?.name || 'Event name'}</h2>
            <p className="text-sm text-table-header leading-5 dark:text-secondary">{item?.date || 'Event date'}</p>
          </div>
          <div className="p-6">
            <p className="text-sm text-text-alt-light leading-5 dark:text-secondary">Event Description</p>
          </div>
          <div className="p-6">
            <div className="flex justiy-start items-center ml-3">
              {speakerImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="speaker"
                  className={`!z-[1000${Math.floor(4/index + 1)}] w-8 h-8 -ml-3 object-cover rounded-full `}
                />
              ))}
            </div>
            <p className="mt-4 text-sm text-text-alt-light dark:text-secondary leading-5">
              3 Guest Speakers: {item?.speaker || 'name 0'}, Speaker name B, Speaker name C. 300 Attendees
            </p>
          </div>
          {/* Footer */}
          <div className="bg-[#F8FAFC] dark:bg-icon-stroke-light p-6 flex flex-col gap-[10px]">
            <Button outlined className="w-full !bg-#fff">Edit</Button>
            <Button type="danger" className="w-full !text-text-dark">Delete</Button>
            <Button type="primary" className="w-full !text-text-dark">Mark as completed</Button>
          </div>
        </div>
      </div>
    </ReactModal>
  )
}

export default Modal