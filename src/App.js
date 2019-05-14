import React from 'react';

import { default as apiClient } from 'axios';
import { Input, Button } from '@edx/paragon';
import siteLanguageOptions from './languages.js';


class App extends React.Component {
  state = {
    name: 'hi',
    lang: 'en',
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.set('username', this.props.username);

    apiClient.post('/dummyUrl', formData);
  }

  handleChange = (event) => {
    // Not using this state, but it's cool!
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div className="app">
        <form
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        >
          <div className="form-group">
            <label htmlFor="name">Full name</label>
            <Input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
            />
          </div>

          <div className="form-group">
            <label htmlFor="lang">Site language</label>
            <Input
              type="select"
              id="lang"
              name="lang"
              options={siteLanguageOptions}
              value={this.state.lang}
            />
          </div>

          <Button
            className="btn-primary"
            type="submit"
          >
            Save
          </Button>
        </form>
      </div>
    );
  }
}

App.defaultProps = {
  username: 'some-username123',
};

export default App;
