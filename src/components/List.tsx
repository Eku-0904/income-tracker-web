import React from "react";
import { ListItem, Transaction } from "./ListItem";

interface Props {
    transactions: Transaction[];
    onDelete: (id: string) => void; 
    handleModalOpen: () => void;
}

export const List: React.FC<Props> = ({ transactions, onDelete, handleModalOpen }) => {
    return (
        <div style={{
            backgroundColor: "#fff",
            marginTop: "30px",
            borderRadius: "10px",
            width: "1190px",
            marginRight: "30px",
            height: "500px",
            overflowY: "auto",
            marginBottom: "50px"
        }}>
            <h3 style={{
                marginLeft: "20px",
                paddingTop: "10px",
                paddingBottom: "10px"
            }}>Last records</h3>
            {transactions?.map((transaction, index) => (
                <ListItem 
                    key={index} 
                    transaction={transaction}
                    onDelete={() => onDelete(transaction._id)}
                    handleModalOpen={handleModalOpen} 
                />
            ))}
        </div>
    );
};
