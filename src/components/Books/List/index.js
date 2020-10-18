import React, { Component } from 'react'
import Item from './Item'

export class List extends Component {
  renderBook = (bookData, index) => <Item key={index} {...bookData} />

  renderBooks = () => {
    const { books } = this.props
    return books.map(this.renderBook)
  }

  render() {
    const books = this.renderBooks()
    return <ul className="book-list">{books}</ul>
  }
}

export default List
