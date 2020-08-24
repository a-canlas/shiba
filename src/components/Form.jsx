import React from 'react';

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      quantity: null,
      error: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validate() {
    const reg = /[1-9]/;
    let {quantity} = this.state;
    let result = reg.test(quantity);
    if(!result){
      this.setState({ error: 'Please enter a valid number '});
    }
    return result;

  }

  handleChange(e){
    e.preventDefault();
    let {value} = e.target;
    this.setState({ quantity: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let validate = this.validate();
    if(!validate){
      return;
    }
    let { quantity, error } = this.state;
    this.props.shiba(quantity);
    if(error){
      this.setState({ error: '' });
    }
  }

  render() {
    return (
      <React.Fragment>
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <label htmlFor="quantity">Quantity: </label>
          <input type="text" id="quantity" className="form-input" onChange={this.handleChange} size="2" maxLength="1"/>
          <button id="submit-btn" className="submit-btn">Submit</button>
        </form>
        <small>{this.state.error}</small>
      </React.Fragment>
    );
  }
}

export default Form;
