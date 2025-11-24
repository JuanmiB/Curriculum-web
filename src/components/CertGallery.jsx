// src/components/CertGallery.jsx
import React, { useState } from "react";
import Modal from "./Modal.jsx";

const CertGallery = ({ items }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [modalText, setModalText] = useState("");

  const openModal = (imgSrc, text) => {
    setModalImage(imgSrc);
    setModalText(text);
    setModalOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-6 min-[250px]:grid-cols-[repeat(2,minmax(150px,1fr))] md:grid-cols-2 md:min-[150px]:grid-cols-[repeat(2,minmax(150px,1fr))]">
        {items.map(({ imgSrc, area }, i) => (
          <div 
            key={i} 
            className="flex flex-col items-center justify-center cursor-pointer transition-transform duration-300 lg:hover:scale-105"
            onClick={() => openModal(imgSrc.src, area)}
          >
            <img 
              src={imgSrc.src} 
              alt={`Certificación de ${area}`} 
              width={220}
              className="object-contain"
            />
            <p className="relative text-gray-800 after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-gradient-to-r after:from-[#ed41fc] after:via-[#ffa500] after:to-[#ffff00] after:bottom-[-5px] after:translate-x-[-100%] after:transition-all after:duration-200 after:ease-in-out md:after:w-0 md:after:left-1/2 md:after:translate-x-[-50%] hover:md:after:w-full hover:md:after:left-0 hover:md:after:translate-x-0">
              {area}
            </p>
          </div>
        ))}
      </div>
      
      <Modal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        imageSrc={modalImage} 
        description={modalText} 
      />
    </>
  );
}



export default CertGallery;
