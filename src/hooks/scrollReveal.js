import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const useScrollReveal = (selector, config = {}, deps = []) => {

  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal(selector, {
      distance: '150px',
      duration: 1100,
      easing: 'ease-in-out',
      origin: 'bottom',
      cleanup: true,
      reset: false,
      once:true,
      ...config,
    });
  }, [selector, config, ...deps,]);
};

export default useScrollReveal;
