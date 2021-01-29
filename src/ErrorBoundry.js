import React from 'react';
import { Link, Redirect } from '@reach/router';

class ErrorBoundry extends React.Component {
  state = { hasError: false, redirect: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log('Error caught in ErrorBoundry', error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => {
        this.setState({ redirect: true });
      }, 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
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
