'use client';
import React from 'react';
import Modal, { ModalProps } from './modal';
import CompanyForm, { CompanyFormProps } from './CompanyForm';

interface CompanyFormModalProps extends ModalProps {
  onSubmit: CompanyFormProps['onSubmit'];
}

export default function CompanyFormModal({
  onSubmit,
  ...rest
}: CompanyFormModalProps) {
  return (
    <Modal {...rest}>
      <CompanyForm onSubmit={onSubmit} />
    </Modal>
  );
}
