import React from "react";
import { CategoryListItem } from "./CategoryListItem";

interface CategoryListProps {
    handleCategorySelection: (category: string) => void;
}

export const CategoryList: React.FC<CategoryListProps> = ({ handleCategorySelection }) => {
    const categories = ["food", "shopping", "bills", "clothing"];
   
    return (
        <div className="justWord" style={{
            cursor: "pointer"
        }}>
            {categories.map((category, index) => (
                <CategoryListItem key={index} category={category} handleCategorySelection={handleCategorySelection} />
            ))}
        </div>
    );
};
