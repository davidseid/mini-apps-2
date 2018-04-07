import React from 'react';

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

  render() {
    return (
      <div>
        Welcome to History Finder<br/>
        <input onChange={(e) => {this.getKeywords(e.target.value)}} placeholder="Search for history by keyword"></input>
      </div>
    )
  }
}

export default Search;