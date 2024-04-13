import React, { useState } from 'react';
import { Delete } from './icons/Delete';
import dayjs from 'dayjs';
import { EditIcon } from './icons/EditIcon';
import EditRecordModal from './EditRecordModal';

export interface Transaction {
  _id: string;
  category: string;
  note: string;
  createdAt: string;
  amount: number;
  transactionType: 'expense' | 'income';
}

type Props = {
  transaction: Transaction;
  onDelete: (id: string) => void;
  handleModalOpen: () => void;
};

export const ListItem: React.FC<Props> = ({ transaction, onDelete }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const handleEditModalClose = () => setIsEditOpen(false);
  const date1 = new Date(transaction.createdAt);
  const date2 = new Date();
  const differenceMs = Number(date2) - Number(date1);
  const differenceHours = Math.round(differenceMs / (1000 * 60 * 60));

  const color = transaction.transactionType === 'expense' ? '#ff474c' : '#2dfe54';

  const handleDeleteClick = (id: string) => {
    const confirmDelete = window.confirm('Are you sure?');
    if (confirmDelete) {
      onDelete(id);
    }
  };

  return (
    <div style={{ marginLeft: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <h4>{transaction.category}</h4>
          <p>{transaction.note}</p>
          <div style={{ color: '#64748B' }}>{dayjs(transaction.createdAt).format('YYYY/MM/DD      hh:mm')}</div>
        </div>
        <div style={{ minWidth: '150px' }}>
          <div style={{ marginLeft: '4px' }}>
            <b style={{ color }}>{transaction.amount}</b>
          </div>
          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <div style={{ cursor: 'pointer' }} onClick={() => handleDeleteClick(transaction._id)}>
              <Delete />
            </div>
            <div style={{ width: '30px', cursor: 'pointer' }} onClick={() => setIsEditOpen(true)}>
              <EditIcon />
            </div>
            <EditRecordModal
              transactionId={transaction._id}
              isEditOpen={isEditOpen}
              handleEditModalClose={handleEditModalClose}
            />
          </div>
        </div>
      </div>
      <div style={{ borderBottom: '1px solid #E5E7EB', marginTop: '10px', marginBottom: '10px' }}></div>
    </div>
  );
};

