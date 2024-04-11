import { Eye } from "./icons/Eye"
import { Arrow } from "./icons/Arrow"
import React from "react";

export type Transaction = {
    _id: string;
    transactionType: string;
    category: string;
    amount: number;
    userId: string
}
interface CategoryListItemProps {
    category: string;
    handleCategorySelection: (category: string) => void;
}

export const CategoryListItem: React.FC<CategoryListItemProps> = ({ category, handleCategorySelection }) => {
    return (
        <div style={{ marginTop:"5px" }} onClick={() => handleCategorySelection(category)}>
            <div style={{ width:"230px", height:"30px", display:"flex", justifyContent:"space-between" }}>
                <div style={{ display:"flex" }}>
                    <Eye />
                    <div style={{ marginLeft:"10px" }}>{category}</div>
                </div>
                <div><Arrow /></div>
            </div>
        </div>
    );
};
