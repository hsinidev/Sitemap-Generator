import React, { useEffect } from 'react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error';
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`fixed bottom-8 right-4 sm:right-8 z-50 px-6 py-4 rounded-lg shadow-2xl backdrop-blur-md border flex items-center gap-3 transform transition-all duration-300 animate-bounce-in ${
      type === 'success' ? 'bg-green-900/90 border-green-500/50 text-green-100' : 'bg-red-900/90 border-red-500/50 text-red-100'
    }`}>
      <div className={`p-1 rounded-full ${type === 'success' ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
        {type === 'success' ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
        )}
      </div>
      <span className="font-medium tracking-wide">{message}</span>
    </div>
  );
};

export default Toast;