
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4 backdrop-blur-sm" 
      onClick={onClose}
    >
      <div 
        className="bg-gray-900/80 border border-gold/30 rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b border-gold/30">
          <h2 className="text-2xl font-bold text-gold">{title}</h2>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-white transition-colors text-3xl"
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>
        <div className="p-6 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
