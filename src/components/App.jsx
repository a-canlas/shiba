import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pictures: null
    };
  }

  componentDidMount() {
    this.getShibes(3);
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
    return (
    <>
    <h1>Hello World</h1>
    </>
    );
  }
}

export default App;
