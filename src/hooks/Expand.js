import { useState } from 'react';

const useExpandable = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  return { isOpen, toggleOpen };
}


export default useExpandable;