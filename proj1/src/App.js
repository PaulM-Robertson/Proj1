import React, { Component } from 'react';
import './App.module.css';
import BookOfMonth from './containers/BookOfMonth/BookOfMonth';
import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BookOfMonth />
        </Layout>
      </div>
    );
  }
}

export default App;
