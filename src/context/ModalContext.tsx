import { createContext, useState, type ReactNode } from "react";


interface ModalContextType {
    isModalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
};

//Creating the context
export const ModalContext = createContext<ModalContextType | undefined>(undefined);


// Create a provider component
export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [isModalOpen, setModalOpen] = useState<boolean>(false);
  
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
  
    return (
      <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
        {children}
      </ModalContext.Provider>
    );
};
