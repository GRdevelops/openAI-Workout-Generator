import { useEffect } from 'react';

const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const handleClickOutside = event => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    const handleEscapePress = event => {
      if (event.key === 'Escape') {
        callback();
      }
    };

    const handlePopState = () => {
      callback();
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapePress);
    window.addEventListener('popstate', handlePopState);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapePress);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [ref, callback]);
};

export default useOutsideClick;

