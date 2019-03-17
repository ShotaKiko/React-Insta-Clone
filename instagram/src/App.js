import React from 'react';

import './App.css';
import dummyData from './dummy-data'

// import Post from './instagram/Components/PostContainer/Post'
// import Post from './instagram/Components/PostContainer/Post'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      post: dummyData
    };
  }
  
  render() {
    return (
      <div className="AppContainer">
       hi
      </div>
    );
  }
}

export default App;
