import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }
  render() {
    return (
        <span>
            <div>{this.state.term}</div>
            <input
                value={this.state.term}
                onChange={event => this.setState({ term: event.target.value })}
                />
        </span>
    );
  }
}

export { SearchBar };
