import React from 'react';
import ShibaCard from './ShibaCard';
import Header from './Header';
import Form from './Form';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pictures: null
    };
    this.generateShibeCards = this.generateShibeCards.bind(this);
    this.getShibes = this.getShibes.bind(this);
  }

  componentDidMount() {
    this.getShibes(3);
  }

  generateShibeCards(){
    const pictures = [...this.state.pictures];
    const shibeCards = pictures.map((pic, index) => {
      return <ShibaCard picture={pic} key={index}/>
    });
    return shibeCards;
  }

  getShibes(quantity) {
    const corsProxy = 'https://cors-anywhere.herokuapp.com/'
    const url = `${corsProxy}http://shibe.online/api/shibes?count=${quantity}&urls=true&httpsUrls=true`;

    fetch(url)
      .then(data => data.json())
      .then(shibes => {
        this.setState({ pictures: shibes})
      })
      .catch(error => {
        console.error(error);
      })
  }

  render() {
    if(this.state.pictures){
      return (
        <React.Fragment>
          <Header />
          <Form shiba={this.getShibes}/>
          <h2>Shiba Delivery!</h2>
          <div className="picture-container">
          {this.generateShibeCards()}
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Header />
          <h2>Rounding up Shibas...</h2>
        </React.Fragment>
      )
    }
  }
}

export default App;
