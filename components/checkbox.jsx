import React from 'react';
import ReactDOM from 'react-dom';

export default class CheckBox extends React.Component {
  constructor() {
    super();
    this.state = { checked: true };
    this.handleChecked = this.handleChecked.bind(this);
  }

  handleChecked() {
    this.setState({checked: !this.state.checked});
  }

  render() {
    let msg;

    if(this.state.checked) {
      msg = "checked";
    } else {
      msg = "unchecked";
    }

    return(
      <div>
        <input type="checkbox" onChange={ this.handleChecked } defaultChecked={ this.state.checked }/>
        <h3>Checkbox is { msg }</h3>
      </div>
    );
  }
}
