import React from 'react';

import { default as apiClient } from 'axios';
import { Input, Button } from '@edx/paragon';
import siteLanguageOptions from './languages.js';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <img src={require("./build-this.png")} style={{width:'400px'}} />
      </div>
    );
  }
}

App.defaultProps = {
  username: 'some-username123',
};

export default App;
