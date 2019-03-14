import React from 'react';

import './App.css';
import dummyData from './dummy-data';

import Post from './Components/PostContainer/Post'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      instaFeed: dummyData
    };
  }
  
  render() {
    return (
      <div className="AppContainer">
        <Post instaFeed={this.state.instaFeed}/>
      </div>
    );
  }
}

export default App;
