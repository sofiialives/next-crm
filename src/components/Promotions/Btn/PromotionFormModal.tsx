"use client";

import Modal, { ModalProps } from "@/components/addCompany/Modal";
import React from "react";
import PromotionForm from "./PromotionForm";

interface PromotionFormModalProps extends ModalProps {
  companyId: string;
}

export default function PromotionFormModal({
  companyId,
  onClose,
  ...rest
}: PromotionFormModalProps) {
  return (
    <Modal {...rest} onClose={onClose}>
      <PromotionForm companyId={companyId} onSubmit={() => onClose()} />
    </Modal>
  );
}
