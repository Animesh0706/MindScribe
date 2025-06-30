import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function Intro() {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(() => navigate('/journal/home'), 400);
    }, 2000); 

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="fixed inset-0 bg-slate-900 text-white flex flex-col items-center justify-center z-50">
      <AnimatePresence>
        {show && (
          <> 
          <motion.img
          src="/logo.png"  
          alt="Logo"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 2 }}
          transition={{  duration: 1 }}
          className="w-24 h-24 md:w-40 md:h-40 object-contain"
        />

          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            exit={{ scale: 8, opacity: 0 }}
            transition={{  duration: 1 }}
            className="text-3xl sm:text-4xl md:text-4xl font-bold text-center"
          >
            Heyyy, Welcome to your MindScribe Journal App ✨
          </motion.h1>
          </> 
        )}
      </AnimatePresence>
    </div>
  );
}

export default Intro;
