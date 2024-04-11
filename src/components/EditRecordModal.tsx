import * as React from 'react';
import Modal from '@mui/material/Modal';
import ColorToggleButton from './toggleButton';
import Category from './CategorySelect';
import { useState } from 'react';
import Date from './Date';
import axios from 'axios';

type Props = {
  isEditOpen: boolean;
  handleEditModalClose: () => void;
  transactionId: string; 
};

export default function EditRecordModal({ isEditOpen, handleEditModalClose, transactionId }: Props) {
  const [transactionType, setTransactionType] = useState('expense');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");

  const handleAmountValue = (value: string) => {
    setAmount(Number(value));
  };

  const handleNoteValue = (value: string) => {
    setNote(String(value));
  };

  const editRecord = async () => {
    try {
      const response = await axios.put(`http://localhost:999/edit-transaction/${transactionId}`, {
        transactionType,
        amount,
        category,
        date,
        note
      });
      if(response){
        handleEditModalClose()
      }
    } catch (error) {
      console.error('Error', error);
    }
  };

  return (
    <Modal
      open={isEditOpen}
      onClose={handleEditModalClose}
    >
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "700px",
        height: "500px",
        backgroundColor: '#fff',
        borderRadius: "10px",
        boxShadow: "24px",
      }}>
        <h3 style={{
          margin: "20px 0 20px 30px",
        }}>
          Edit Record
        </h3>
        <div style={{ borderBottom: "1px solid #E2E8F0" }}></div>
        <div style={{
          display: "flex"
        }}>
          <div>
            <ColorToggleButton transactionType={transactionType} setTransactionType={setTransactionType} />
            <div style={{
              marginLeft: "30px",
              marginTop: "30px"
            }}>
              Amount
            </div>
            <input placeholder="₮ 000.00"
              onChange={(e) => handleAmountValue(e.target.value)}
              style={{
                width: "240px",
                height: "40px",
                margin: "0 0 20px 30px",
                borderRadius: "7px",
                border: "1px solid #D1D5DB",
                backgroundColor: "#F3F4F6",
                paddingLeft: "10px"
              }} />
            <div style={{
              margin: "0 0 0 30px",
            }}>Category</div>
            <Category setCategory={setCategory} category={category} />
            <div style={{
              marginLeft: "30px",
              marginTop: "30px"
            }}>
              Date
            </div>
            <div style={{
              display: "flex"
            }}>
              <Date setDate={setDate} date={date} />
            </div>

            <div
              onClick={editRecord}
              style={{
                backgroundColor: "#0166FF",
                height: "35px",
                width: "240px",
                borderRadius: "50px",
                margin: "35px 0 0 30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                color: "#fff"
              }}>
              Edit Record
            </div>
          </div>

          <div style={{
            marginLeft: "30px"
          }}>
            <div style={{
              marginTop: "20px"
            }}>Note</div>
            <input placeholder='Write here'
              onChange={(e) => handleNoteValue(e.target.value)}
              style={{
                width: "350px",
                height: "275px",
                marginTop: "10px",
                borderRadius: "7px",
                border: "1px solid #D1D5DB",
                backgroundColor: "#F3F4F6",
                paddingLeft: "10px"
              }} />
          </div>

        </div>
      </div>
    </Modal>
  )
}
