import React, { Component } from 'react';
import Layout from './Hoc/Layout/Layout'
import SearchPage from "./Containers/SearchPage/SearchPage";


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
        <SearchPage />
        </Layout>
      </div>
    );
  }
}

export default App;
