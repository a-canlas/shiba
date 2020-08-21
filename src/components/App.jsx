import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pictures: null
    };
  }

  getShibes(quantity) {
    const url = `http://shibe.online/api/shibes?count=${quantity}&urls=true&httpsUrls=true`;
    fetch(url)
      .then(data => data.json())
      .then(shibes => {
        this.setState({ pictures: shibes })
      .catch(err => console.error(`Error: ${err}`))
      });
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
