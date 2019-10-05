import React from 'react';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
// import './Navbar.css';


class App extends React.Component{
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Landing/>
      </React.Fragment>
        );
}
}

export default App;
