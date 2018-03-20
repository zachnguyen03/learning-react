import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }
  



  render() {
    return (
    <div className ="search-bar">
      <input value = {this.state.term} onChange = {event => this.onInputChange(event.target.value)}/>
      <button className="button-search" onClick= {event => this.handleClick(event)} >Search</button>
    </div>
  );
  };

  onInputChange(term) {
    this.setState({term});
  };

  handleClick(){
    this.props.onSearchTermChange(this.state.term)
  }

}
