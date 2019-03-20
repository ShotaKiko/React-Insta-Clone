import React from 'react';


import './App.css';

import dummyData from './dummy-data'
import Post from './Components/PostContainer/Post';
import SearchBar from './Components/SearchBar/SearchBar';

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
        <SearchBar/>
        <Post post={this.state.post}/>
      </div>
    );
  }
}

export default App;
