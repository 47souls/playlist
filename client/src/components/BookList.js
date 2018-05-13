import React, { Component } from 'react';

// Apollo stuff
import { graphql } from 'react-apollo';

// Queries
import { getBooksQuery } from '../queries/queries';

// Components
import BookDetails from './BookDetails'

class BookList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selected: null
    };
  }

  displayBooks() {
    let { loading, error, books } = this.props.data;

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return books.map((book) => (
      <li key={book.id} onClick={(e) => { this.setState({ selected: book.id})}}>
        <h3>{book.name}</h3>
      </li>
    ));
  }

  render() {
    return (
      <div>
        <ul id="book-list">
          {this.displayBooks()}
        </ul>
        <BookDetails bookId={ this.state.selected }/>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
