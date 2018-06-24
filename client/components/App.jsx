import React from 'react';
import Header from './Header';
import Container from './Container'

class App extends React.Component {
  render(){
    return (
      <div className="container">
      <Header />
      <Container />
      </div>
    );
  }
}
export default App


