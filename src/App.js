import React from 'react';

import { default as apiClient } from 'axios';
import { Input, Button } from '@edx/paragon';
import siteLanguageOptions from './languages.js';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      language: 'en',
      name: null,
    };
  }

  save = (event) => {
    apiClient.post('/dummyurl', {
      language: this.state.language,
      name: this.state.name,
      username: this.props.username,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.set('username', this.props.username);
    apiClient.post('/dummyurl', formData);
  }

  onLanguageChange = (event) => {
    this.setState({
      language: event.target.value,
    });
  }
  onNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  }

  render() {
    return (
      <div className="app">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full name</label>

            <Input
              id="name"
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.onNameChange}
            />
          </div>

        
          <div className="form-group">
            <label htmlFor="language">Site Language</label>

            <Input
              id="language"
              name="language"
              type="select"
              value={this.state.language}
              options={siteLanguageOptions}
              onChange={this.onLanguageChange}
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
