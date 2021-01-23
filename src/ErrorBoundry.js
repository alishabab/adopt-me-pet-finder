import React from 'react';
import { Link } from '@reach/router';

class ErrorBoundry extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log('Error caught in ErrorBoundry', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>
          Something went wrong Click <Link to="/">Here</Link> to return to
          homepage{' '}
        </h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
