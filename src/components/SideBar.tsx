import React from "react";
import { Button } from "@mui/material";
import TransactionTypeSelector from "./Radio";
import { CategoryList } from "./CategoryList";

interface SideBarProps {
    handleModalOpen: () => void;
    setTransactionType: (transactionType: string) => void;
    handleCategorySelection: (category: string) => void;
    handleSearch: (searchQuery: string) => void; 
}

const SideBar: React.FC<SideBarProps> = ({ handleModalOpen, setTransactionType, handleCategorySelection, handleSearch }) => {
    return (
        <div className="categoryContainer">
            <div className="headContainer">
                <h3 className="justWord">Records</h3>
                <div className="addButtonNSearch">
                    <Button className="addButton" onClick={handleModalOpen}>add</Button>
                    <input className="searchInput" placeholder="Search.." onChange={(e) => handleSearch(e.target.value)} /> 
                </div>
                <TransactionTypeSelector setTransactionType={setTransactionType} />
                <h3 className="justWord">Category</h3>
                <CategoryList handleCategorySelection={handleCategorySelection} />
            </div>
        </div>
    );
};

export default SideBar;
