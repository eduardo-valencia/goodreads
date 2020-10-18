import React, { Component } from 'react'
import axios from 'axios'
import List from './List'
import Search from './Search'

export class Books extends Component {
  state = {
    books: null,
    query: '',
  }

  setBooks = (books) => this.setState((prevState) => ({ ...prevState, books }))

  fetchBooks = async () => {
    const { query } = this.state
    const { data } = await axios.get(
      `https://booklist-server--brianbui3.repl.co/books/:?text=${query}`
    )
    return data
  }

  fetchAndSetBooks = async () => {
    const books = await this.fetchBooks()
    this.setBooks(books)
  }

  setQuery = (query) => this.setState((prevState) => ({ ...prevState, query }))

  render() {
    const { books, query } = this.state
    return (
      <div>
        <Search
          value={query}
          setQuery={this.setQuery}
          fetchAndSetBooks={this.fetchAndSetBooks}
        />
        {books && <List books={books} />}
      </div>
    )
  }
}

export default Books
