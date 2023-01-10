import { useState } from "react";

const useModal = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const onClick = () => {
      setIsModalOpen(!isModalOpen);
   };
   const onDismiss = () => {
      setIsModalOpen(false);
   };

   return { isModalOpen, onClick, onDismiss };
};

export default useModal;
