import React from 'react';
import Card from '../../components/Card';
import CardInfo from '../../components/infoCard';
import DoughnutChart from '../../components/Doughnut';
import BarChart from '@/components/BarChart';
import { List } from '@/components/List';
import NavbarDashboard from '@/components/NavbarDashboard';

const Dashboard = () => {
  // Empty function since handleModalOpen is not used in Dashboard
  const handleModalOpen = () => {};

  return (
    <div className="dashboardContainer">
      <NavbarDashboard handleModalOpen={handleModalOpen} />
      <div className='middleContainer'>
        <div className="cards">
          <Card />
          <CardInfo title='Your Income' amount={1200000} type='income' />
          <CardInfo title='Your Expense' amount={-1200000} type='expense' />
        </div>
        <div className='dashboardMiddle'>
          <BarChart />
          <DoughnutChart />
        </div>
        {/* <div>
          <List/>
        </div> */}
      </div>
    </div>
  );
}

export default Dashboard;
