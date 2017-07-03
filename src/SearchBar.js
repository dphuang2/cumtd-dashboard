import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import './SearchBar.css';

const getSuggestionValue = suggestion => suggestion.n;

const renderSuggestion = suggestion => (
  <span>
    {suggestion.n}
  </span>
);

class SearchBar extends Component {

  constructor(props){
    super(props);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
    this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
    this.getSuggestions = this.getSuggestions.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      value: '',
      stop_id: '',
      suggestions: []
    }
  }

  getSuggestions(value){
    console.log("getSuggestions fired");
    var suggestions = [];
    let _self = this;
    fetch('https://www.cumtd.com/autocomplete/stops/v1.0/json/search?query='+value)
    .then(function(response){
      if (response.status !== 200) {  
        return;
      }
      response.json().then(function(data) {
        for(var suggestion in data){
          suggestions.push(data[suggestion]);
        }
        _self.setState({
          suggestions: suggestions
        });
      }); 
    })
  };

  onChange(event, { newValue }){
    console.log("onChange fired");
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested({ value }){
    console.log("onSuggestionsFetchRequested fired");
    this.getSuggestions(value)
  };

  onSuggestionsClearRequested(){
    console.log("onSuggestionsClearRequested fired");
    this.setState({
      suggestions: []
    });
  };

  onSuggestionSelected(event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }){
    const stop_id = suggestion.i;
    this.props.onSearchTextInput(stop_id);
  }

  render() {
    console.log("render() fired");
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Search a stop',
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        onSuggestionSelected={this.onSuggestionSelected}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export default SearchBar;

