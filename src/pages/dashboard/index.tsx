import React from 'react';
import Card from '../../components/Card';
import CardInfo from '../../components/infoCard';
import DoughnutChart from '../../components/Doughnut';
import BarChart from '@/components/BarChart';
import NavbarDashboard from '@/components/NavbarDashboard';

const Dashboard = () => {
  return (
    <div className="dashboardContainer">
      <NavbarDashboard />
      <div className='middleContainer'>
        <div className="cards">
          <Card />
          <CardInfo title='Your Income' type='income' />
          <CardInfo title='Total Expenses' type='expense' />
        </div>
        <div className='dashboardMiddle'>
          <BarChart />
          <DoughnutChart />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
