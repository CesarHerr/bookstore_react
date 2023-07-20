import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';

function Book({
  name, categories, author, id,
}) {
  const dispatch = useDispatch();
  return (
    <li>
      <span>{categories}</span>
      <h2>{name}</h2>
      <p>{author}</p>

      <button type="button" onClick={() => dispatch(deleteBook(id))}>
        Remove
      </button>
    </li>
  );
}

Book.propTypes = {
  name: PropTypes.string.isRequired,
  categories: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
