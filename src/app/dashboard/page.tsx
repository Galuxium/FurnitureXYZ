// types/index.d.ts

declare interface Revenue {
  total: number;
  monthly: number[];
  yearly: number[];
}

declare interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

declare interface Log {
  id: number;
  userId: number;
  action: string;
  timestamp: Date;
}

declare interface AdminDashboardProps {
  revenue: Revenue;
  users: User[];
  logs: Log[];
}

// components/AdminDashboard.tsx

import React from 'react';
import { Bar, Line, Scatter } from 'react-chartjs-2';
import { Revenue, User, Log, AdminDashboardProps } from '../../types';

const AdminDashboard: React.FC<AdminDashboardProps> = ({ revenue, users, logs }) => {
  const barChartData = {
    labels: ['Total', 'Monthly', 'Yearly'],
    datasets: [
      {
        label: 'Revenue',
        backgroundColor: '#f87979',
        data: [revenue.total, ...revenue.monthly, ...revenue.yearly],
      },
    ],
  };

  const barChartOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  const userData = {
    labels: users.map((user) => user.name),
    datasets: [
      {
        label: 'Users',
        backgroundColor: '#79f8a6',
        data: users.map((user) => user.id),
      },
    ],
  };

  const logData = {
    datasets: [
      {
        label: 'Logs',
        backgroundColor: '#a679f8',
        data: logs.map((log) => log.id),
      },
    ],
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Bar data={barChartData} options={barChartOptions} />
      <Line data={userData} />
      <Scatter data={logData} />
    </div>
  );
};

export default AdminDashboard;