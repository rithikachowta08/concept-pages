import { useState } from "react";

const useModals = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [modalIdx, setModalIdx] = useState(null);
   const onClick = (modalIdxToOpen) => {
      setIsModalOpen(true);
      setModalIdx(modalIdxToOpen);
   };
   const onDismiss = () => {
      setIsModalOpen(false);
      setModalIdx(null);
   };

   return { isModalOpen, modalIdx, onClick, onDismiss };
};

export default useModals;
