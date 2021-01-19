import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import SearchParams from './SearchParams';
import Details from './Details';

const App = () => {
  return (
    <div>
      <h1>Adopt Me</h1>
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
