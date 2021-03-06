import React, { Component } from 'react';

// Apollo stuff
import { graphql } from 'react-apollo';

// Queries
import { getBookQuery } from '../queries/queries';

class BookDetails extends Component {
  displayBookDetails() {
    const { book } = this.props.data;
    if (book) {
      return(
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>All books by this author</p>
          <ul className="other-books">
            {book.author.books.map(book => {
              return <li key={book.id}>{book.name}</li>
            })}
          </ul>
        </div>
      );
    }

    return (
      <div>No book selected.</div>
    );
  }

  render() {
    console.log(this.props);
    return (
      <div id="book-details">
        {this.displayBookDetails()}
      </div>
    );
  }
}

export default graphql(getBookQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.bookId
      }
    }
  }
})(BookDetails);
