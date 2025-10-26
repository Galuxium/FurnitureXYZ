// Dashboard.tsx

import React from 'react';
import { Bar, Doughnut, Pie } from 'react-chartjs-2';
import 'chart.js/auto';

interface DashboardProps {
  salesData: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string[];
    }[];
  };
  revenueData: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string[];
    }[];
  };
  customerData: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string[];
    }[];
  };
}

const Dashboard: React.FC<DashboardProps> = ({ salesData, revenueData, customerData }) => {
  return (
    <div className="flex gap-4">
      <div style={{ width: '40%' }}>
        <Bar data={salesData} />
      </div>
      <div style={{ width: '40%' }}>
        <Doughnut data={revenueData} />
      </div>
      <div style={{ width: '20%' }}>
        <Pie data={customerData} />
      </div>
    </div>
  );
};

export default Dashboard;