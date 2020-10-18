import React, { Component } from 'react'
import { string } from 'prop-types'

export class Item extends Component {
  static propTypes = {
    image: string.isRequired,
    title: string.isRequired,
    author: string.isRequired,
  }

  render() {
    const { image, title, author } = this.props
    return (
      <li>
        <img src={image} alt={title} />
        <h1 className="title">{title}</h1>
        <span className="author">{author}</span>
      </li>
    )
  }
}

export default Item
