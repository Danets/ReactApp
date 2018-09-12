import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {
        text: 2,
        number: 1
      }
    }
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    this.textInput.current.focus();
  }
  componentDidMount() {
    this.focusTextInput()
  }
  //renderInputs = Object.keys(this.state.inputs).map(input => input)
  render() {
    return (
      <form name="forma" className="signup-form" onSubmit={this.props.click}>
        <input
          ref={this.textInput}
          className="form-control"
          type="text"
          name="firstname"
          value={this.props.value}
          onChange={this.props.change} />
        <button onClick={this.focusTextInput} type="submit" className="btn btn-primary">{this.props.name}</button>
      </form>
    );
  }
}

export default Form;