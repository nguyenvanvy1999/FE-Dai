import { Modal } from "antd";
import React from "react";

interface IModalProps {
  open: boolean;
  onCancel: (e: boolean) => void;
  title?: string | React.ReactNode;
  children?: React.ReactNode
}
function ModalCustom({ open, onCancel, title, children } : IModalProps) {

  const handleCancel = () => {
    onCancel(false);
  };

  return (
    <Modal title={title} open={open} onCancel={handleCancel} footer={[]}>
      {children}
    </Modal>
  )
}

export default ModalCustom;