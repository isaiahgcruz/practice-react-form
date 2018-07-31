import React, { Component } from 'react';
import InputComponent from './Input/InputComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formObject: {
        first_name: '',
        last_name: '',
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { formObject } = this.state;
    formObject[event.target.name] = event.target.value;
    this.setState({ formObject });
  }

  render() {
    const { formObject } = this.state;
    const fields = [
      {
        type: 'text',
        name: 'first_name',
      },
      {
        type: 'text',
        name: 'last_name',
      },
    ];

    const inputs = fields.map(field => (
      <InputComponent
        key={field.name}
        type={field.type}
        name={field.name}
        value={formObject[field.name]}
        onChange={this.handleChange}
      />
    ));

    return (
      <div className="App">
        {inputs}
      </div>
    );
  }
}

export default App;
