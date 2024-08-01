import PropTypes from 'prop-types';

function BooksListItem({ book }) {
  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.author ? book.author : 'Unbekannt'}</td>
      <td>{book.isbn}</td>
      <td>{book.rating && <span>{'⭑'.repeat(book.rating)}</span>}</td>
    </tr>
  );
}

BooksListItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    isbn: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default BooksListItem;
