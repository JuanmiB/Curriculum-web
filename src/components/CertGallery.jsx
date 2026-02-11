// src/components/CertGallery.jsx
import React, { useState } from "react";
import Modal from "./Modal.jsx";

const CertGallery = ({ items }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [modalData, setModalData] = useState(null);

  const openModal = (imgSrc, data) => {
    setModalImage(imgSrc);
    setModalData(data);
    setModalOpen(true);
  };

  return (
    <>
      <div className="cert-grid">
        {items.map((cert, i) => (
          <div
            key={i}
            className="cert-card group"
            onClick={() => openModal(cert.imgSrc, cert)}
          >
            {/* Contenedor de imagen con efecto */}
            <div className="cert-image-wrapper">
              <div className="cert-shine"></div>
              <img
                src={cert.imgSrc}
                alt={`Certificación de ${cert.area}`}
                className="cert-image"
                loading="lazy"
              />
              <div className="cert-overlay">
                <div className="cert-overlay-content">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                    <path d="M11 8v6"/>
                    <path d="M8 11h6"/>
                  </svg>
                  <span>Ver certificado</span>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="cert-info">
              <h4 className="cert-title">{cert.area}</h4>
              <p className="cert-institution">{cert.institution}</p>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        imageSrc={modalImage}
        description={modalData?.area || ""}
      />

      <style>{`
        .cert-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-top: 2rem;
        }

        @media (min-width: 640px) {
          .cert-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .cert-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Certificate Card - Premium Design */
        .cert-card {
          position: relative;
          background: var(--color-bg);
          border-radius: var(--radius-2xl);
          overflow: hidden;
          border: 2px solid var(--color-border);
          box-shadow: var(--shadow-lg);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          transform-style: preserve-3d;
          perspective: 1000px;
        }

        .cert-card:hover {
          transform: translateY(-12px) rotateX(2deg);
          box-shadow: 0 24px 48px rgba(139, 92, 246, 0.2);
          border-color: var(--color-primary-400);
        }

        .dark .cert-card {
          background: var(--color-neutral-900);
          border-color: var(--color-neutral-800);
        }

        .dark .cert-card:hover {
          border-color: var(--color-primary-600);
          box-shadow: 0 24px 48px rgba(139, 92, 246, 0.3);
        }

        /* Image Wrapper */
        .cert-image-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 11;
          background: linear-gradient(135deg, var(--color-primary-50), var(--color-accent-50));
          overflow: hidden;
        }

        .dark .cert-image-wrapper {
          background: linear-gradient(135deg, var(--color-primary-950), var(--color-accent-950));
        }

        .cert-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .cert-card:hover .cert-image {
          transform: scale(1.1);
        }

        /* Shine Effect */
        .cert-shine {
          position: absolute;
          top: -100%;
          left: -100%;
          width: 50%;
          height: 300%;
          background: linear-gradient(
            45deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transform: rotate(45deg);
          transition: all 0.6s;
          pointer-events: none;
        }

        .cert-card:hover .cert-shine {
          left: 150%;
        }

        /* Overlay */
        .cert-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.9) 0%,
            rgba(0, 0, 0, 0.6) 50%,
            transparent 100%
          );
          opacity: 0;
          transition: opacity 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cert-card:hover .cert-overlay {
          opacity: 1;
        }

        .cert-overlay-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: white;
          transform: translateY(20px);
          transition: transform 0.3s;
        }

        .cert-card:hover .cert-overlay-content {
          transform: translateY(0);
        }

        .cert-overlay-content span {
          font-size: 0.875rem;
          font-weight: 600;
        }

        /* Info */
        .cert-info {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.375rem;
        }

        .cert-title {
          font-size: 1.125rem;
          font-weight: 700;
          color: var(--color-text);
          margin: 0;
          line-height: 1.3;
        }

        .cert-institution {
          font-size: 0.875rem;
          color: var(--color-text-secondary);
          margin: 0;
          display: flex;
          align-items: center;
          gap: 0.375rem;
        }

        .cert-institution::before {
          content: '';
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--color-primary-500);
        }

        /* Animación de entrada */
        .cert-card {
          animation: fadeInUp 0.5s ease-out backwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .cert-card:nth-child(1) { animation-delay: 0.1s; }
        .cert-card:nth-child(2) { animation-delay: 0.2s; }
        .cert-card:nth-child(3) { animation-delay: 0.3s; }
        .cert-card:nth-child(4) { animation-delay: 0.4s; }
      `}</style>
    </>
  );
}

export default CertGallery;
