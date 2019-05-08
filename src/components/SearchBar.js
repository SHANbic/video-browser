import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onHandleChange = e => {
    this.setState({
      term: e.target.value
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment" style={{marginTop:'1rem'}}>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <label>Video search</label>
          <input
            type="text"
            value={this.state.term}
            onChange={this.onHandleChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
