import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import LDP from './LDP';
import LdpInput from './LdpInput';
import './style.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'LDP'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <div>
          <LdpInput />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
