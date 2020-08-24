import React from 'react';
import ShibaCard from './ShibaCard';
import Header from './Header';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pictures: null
    };
    this.generateShibeCards = this.generateShibeCards.bind(this);
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
          <h1>Shiba Delivery!</h1>
          <div className="picture-container">
          {this.generateShibeCards()}
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Header />
          <h1>Rounding up Shibas...</h1>
        </React.Fragment>
      )
    }
  }
}

export default App;
