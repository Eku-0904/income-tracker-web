import React, { useEffect, useState } from 'react';
import SideBar from '@/components/SideBar';
import Navbar from '@/components/Navbar';
import { List } from '@/components/List';
import { CreateRecordModal } from '@/components/CreateRecordModal';
import axios from 'axios';

interface Transaction {
    _id: string;
    category: string;
    note: string;
    createdAt: string;
    amount: number;
    transactionType: 'expense' | 'income';
}

const Records1: React.FC = () => {
    const [selectedTransactionType, setTransactionType] = useState<string>('all');
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [open, setOpen] = useState<boolean>(false);
    const [shouldFetch, setFetch] = useState<boolean>(true);
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleModalOpen = () => setOpen(prev => !prev);

    useEffect(() => {
        if (!shouldFetch) {
            return;
        }

        const fetchData = async () => {
            try {
                const response = await axios.get<Transaction[]>('https://income-tracker-service-2z57.onrender.com/get-transaction');
                setTransactions(response.data);
            } catch (error) {
                console.error('Error fetching transactions:', error);
            }
        };

        fetchData();
        setFetch(false);
    }, [shouldFetch]);

    const handleCategorySelection = (category: string) => {
        setSelectedCategory(category);
    };

    const handleTransactionTypeSelection = (transactionType: string) => {
        setTransactionType(transactionType);
    };

    const handleDelete = async (id: string) => {
        try {
            await axios.delete(`https://income-tracker-service-2z57.onrender.com/delete-transaction/${id}`);
            setFetch(true);
        } catch (error) {
            console.error('Error deleting transaction:', error);
        }
    };

    const filteredTransactions = transactions.filter(transaction => {
        if (selectedCategory === '' || selectedCategory === 'all') {
            return true;
        }
        return transaction.category === selectedCategory;
    }).filter(transaction => {
        if (selectedTransactionType === 'all') {
            return true;
        }
        return transaction.transactionType === selectedTransactionType;
    }).filter(transaction => {
        const searchRegex = new RegExp(searchQuery, 'i');
        return searchRegex.test(transaction.category) || searchRegex.test(transaction.note);
    });

    return (
        <div className="dashboardContainer" style={{}}>
            <CreateRecordModal open={open} handleModalOpen={handleModalOpen} setFetch={setFetch} />
            <Navbar handleModalOpen={handleModalOpen} />

            {/* main body n shuu */}
            <div style={{ display: 'flex' }}>
                <SideBar
                    handleModalOpen={handleModalOpen}
                    setTransactionType={handleTransactionTypeSelection}
                    handleCategorySelection={handleCategorySelection}
                    handleSearch={setSearchQuery}
                />
                <List transactions={filteredTransactions} onDelete={handleDelete} handleModalOpen={handleModalOpen} />
            </div>
        </div>
    );
};

export default Records1;
