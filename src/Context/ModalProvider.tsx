import { useState, createContext, useContext } from "react";

const ModalContext = createContext({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  toggleModal: (_val: boolean) => {},
  show: false,
});

// eslint-disable-next-line react-refresh/only-export-components
export const useModal = () => {
  return useContext(ModalContext);
};

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [show, setShow] = useState(false);

  const toggleModal = (val: boolean) => {
    setShow((mode) => val? val :!mode);
  };

  return (
    <ModalContext.Provider value={{ toggleModal, show }}>
      {children}
    </ModalContext.Provider>
  );
};