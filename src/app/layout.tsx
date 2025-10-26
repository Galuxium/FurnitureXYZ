import React from 'react';
import { ClerkProvider } from '@clerk/clerk-react';
import { Route, Switch } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import LandingPage from './components/LandingPage';
import PaymentIntegration from './components/PaymentIntegration';
import EmailNotifications from './components/EmailNotifications';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import AdminPanel from './components/AdminPanel';
import DatabaseCRUD from './components/DatabaseCRUD';
import FileUpload from './components/FileUpload';

interface Props {
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <ClerkProvider frontendApi="your-clerk-frontend-api">
      <div className="flex">
        <Sidebar />
        <main className="w-full">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/payment-integration" component={PaymentIntegration} />
            <Route path="/email-notifications" component={EmailNotifications} />
            <Route path="/analytics-dashboard" component={AnalyticsDashboard} />
            <Route path="/admin-panel" component={AdminPanel} />
            <Route path="/database-crud" component={DatabaseCRUD} />
            <Route path="/file-upload" component={FileUpload} />
          </Switch>
          {children}
        </main>
      </div>
    </ClerkProvider>
  );
};

export default Layout;