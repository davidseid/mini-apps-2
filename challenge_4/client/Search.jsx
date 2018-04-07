import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      keywords: null
    }
  }

  getKeywords(input) {
    this.setState({
      keywords: input
    })
  }

  searchHistory(keywords) {
    console.log('search history by keyword: ', keywords);
    // make axios call to the route with the keyword
    const url = `/events?q=${keywords}`;
    axios.get(url)
      .then((res) => console.log(res.data));
  }

  render() {
    return (
      <div>
        Welcome to History Finder<br/>
        <input onChange={(e) => {this.getKeywords(e.target.value)}} placeholder="Search for history by keyword"></input>
        <button onClick={() => this.searchHistory(this.state.keywords)}>Search</button>
      </div>
    )
  }
}

export default Search;