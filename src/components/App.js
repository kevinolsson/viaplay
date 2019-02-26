import React from 'react';
import Header from './Header';
import Video from './Video';
import Footer from './Footer';

class App extends React.Component {
  state = {
    data: {}
  }

  componentDidMount() {
    fetch('https://cors-anywhere.herokuapp.com/https://content.viaplay.se/pc-se/serier/samtliga')
      .then(response => response.json())
      .then(data => this.setState({ data : data._embedded[`viaplay:blocks`][`0`]._embedded[`viaplay:products`] }));
  }

  render() {
    return (
      <>
        <Header />
        <div className="wrapper">
          <ul className="grid">
              {Object.keys(this.state.data).map( key => 
                <Video key={key} details={this.state.data[key]} />
              )}
          </ul>
        </div>
        <Footer />
      </>
    );
  }
}

export default App;