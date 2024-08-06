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

export default BooksListItem;
