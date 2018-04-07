import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import ReactPaginate from 'react-paginate';

import Facts from './Facts.jsx';


class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      historicalData: [],
      currentPage: 0
    }
  }

  getKeywords(input) {
    this.setState({
      keywords: input
    })
  }

  handlePageClick = (data) => {
    let selected = data.selected;
    console.log(selected);
    this.setState({currentPage: selected}, () => {
      this.searchHistory(this.state.keywords);
    })
  };

  searchHistory(keywords) {
    console.log('search history by keyword: ', keywords);
    const url = `/events?q=${keywords}&_page=${this.state.currentPage}&_limit=5`;
    // const url = `/events?_page=7&limit=10`;
    $.ajax({
      url      : url,
      dataType : 'json',
      type     : 'GET',

      success: data => {
        this.setState({historicalData: data, pageCount: 10});
      },

      error: (err) => {
        console.error(err);
      }
    });

  }

  render() {
    return (
      <div>
        Welcome to History Finder<br/>
        <input onChange={(e) => {this.getKeywords(e.target.value)}} placeholder="Search for history by keyword"></input>
        <button onClick={() => this.searchHistory(this.state.keywords)}>Search</button>
        <Facts data={this.state.historicalData} />
        <ReactPaginate previousLabel={"previous"}
                      nextLabel={"next"}
                      breakLabel={<a href="">...</a>}
                      breakClassName={"break-me"}
                      pageCount={this.state.pageCount}
                      marginPagesDisplayed={2}
                      pageRangeDisplayed={5}
                      onPageChange={this.handlePageClick}
                      containerClassName={"pagination"}
                      subContainerClassName={"pages pagination"}
                      activeClassName={"active"} />
      </div>
    )
  }
}

export default Search;