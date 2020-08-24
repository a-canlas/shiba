import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <React.Fragment>
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <label htmlFor="quantity">Quantity: </label>
          <input type="number" id="quantity" className="form-input" />
          <button type="submit" id="submit-btn" className="submit-btn">Submit</button>
        </form>
      </React.Fragment>
    );
  }
}

export default Form;
