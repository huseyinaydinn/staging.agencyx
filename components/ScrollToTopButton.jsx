import React, { useEffect, useState } from 'react';
import { FaAngleDoubleUp } from 'react-icons/fa';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const el = document.querySelector('#home');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-[#23252C] border-2 border-[#5af5f0] text-[#5af5f0] flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-[#5af5f0] hover:text-black hover:border-white ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      aria-label="Scroll to top"
    >
      <FaAngleDoubleUp size={20} />
    </button>
  );
}
