import React, { Component } from 'react'

export class Search extends Component {
  handleChange = (event) => {
    const { setQuery } = this.props
    setQuery(event.target.value)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { fetchAndSetBooks } = this.props
    return fetchAndSetBooks()
  }

  render() {
    const { query } = this.props
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="search-bar"
          type="text"
          name="text"
          placeholder="Search books..."
          onChange={this.handleChange}
          value={query}
        ></input>
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
    )
  }
}

export default Search
