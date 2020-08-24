import React from 'react';

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      quantity: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    e.preventDefault();
    let {value} = e.target;
    this.setState({ quantity: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let {quantity} = this.state;
    this.props.shiba(quantity);
  }

  render() {
    return (
      <React.Fragment>
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <label htmlFor="quantity">Quantity: </label>
          <input type="text" id="quantity" className="form-input" onChange={this.handleChange} size="2" maxLength="1"/>
          <button id="submit-btn" className="submit-btn">Submit</button>
        </form>
      </React.Fragment>
    );
  }
}

export default Form;
