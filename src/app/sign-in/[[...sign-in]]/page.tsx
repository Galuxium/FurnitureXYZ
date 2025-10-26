// Import required modules and interfaces
import React from 'react';
import { ClerkProvider } from '@clerk/clerk-react';
import { useUser } from '@clerk/clerk-react/user';
import { RouteComponentProps, withRouter } from 'react-router';

// Define UserProps interface
interface UserProps extends RouteComponentProps {
  children: React.ReactNode;
}

// Define SignInPage component
const SignInPage: React.FC<UserProps> = ({ history }) => {
  const { isSignedIn, user } = useUser();

  // If user is signed in, redirect to home page
  if (isSignedIn) {
    history.push('/');
  }

  return (
    <div>
      <h1>Sign In</h1>
      <ClerkProvider frontendApi="your-frontend-api">
        {/* Your sign-in form component */}
      </ClerkProvider>
    </div>
  );
};

// Export SignInPage component with withRouter
export default withRouter(SignInPage);