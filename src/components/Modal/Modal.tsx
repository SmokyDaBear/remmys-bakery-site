import React from "react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ open, onClose, children }: ModalProps) {
  if (!open) return null;
  return (
    <div className="modal active" role="dialog" aria-modal="true">
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-content">
        <button className="btn flat-i-btn close" onClick={onClose}>
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
