import React from 'react';

import './App.css';
import dummyData from './dummy-data'
// import Post from '../Components/PostContainer';

// import Post from './instagram/Components/PostContainer/Post'
// import Post from './instagram/Components/PostContainer/Post'
import Post from './instagram/Components/PostContainer.js'

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
       <Post/>
      </div>
    );
  }
}

export default App;
