import React from 'react';


import './App.css';

import dummyData from './dummy-data'
import Post from './Components/PostContainer/Post';
import SearchBar from './Components/SearchBar/SearchBar';

class App extends React.Component {
  constructor() {
    console.log('constructor')
    super();
    this.state = {
      post: []
      // post: dummyData
    };
  }
  
  componentDidMount() {
    this.setState({ post: dummyData })
    console.log('cdm')
  }
  
  render() {
    console.log('render')
    return (
      <div className="container">
      <SearchBar/>
      <div className="AppContainer">
        
        <Post post={this.state.post}/>
      </div>
      </div>
    );
  }
}

export default App;
