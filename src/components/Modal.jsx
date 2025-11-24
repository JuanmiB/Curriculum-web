// src/components/Modal.jsx
import React from 'react';

const Modal = ({ isOpen, onClose, imageSrc, description }) => {
  if (!isOpen) return null;

return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-fadein">
      {/* Fondo negro con opacidad */}
      <div
        className="absolute inset-0 bg-black opacity-[0.8] "
        onClick={onClose}
      />
      {/* Contenido del modal */}
      <div
        className="relative bg-white p-8 rounded-lg max-w-4xl w-[90%] max-h-[90vh] overflow-y-auto flex flex-col items-center animate-modal-fadein-up"
        onClick={e => e.stopPropagation()}
        style={{ zIndex: 1 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
          style={{ zIndex: 2 }}
        >
          &times;
        </button>
        <img
          src={imageSrc}
          alt={description}
          className="max-w-full max-h-[500px] object-contain mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold mb-2 text-center">{description}</h3>
      </div>
    </div>
  );
};
export default Modal;