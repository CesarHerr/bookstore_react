import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/books/booksSlice';

function Book({
  name, categories, author, index,
}) {
  const dispatch = useDispatch();
  return (
    <li>
      <span>{categories}</span>
      <h2>{name}</h2>
      <p>{author}</p>

      <button type="button" onClick={() => dispatch(remove(index))}>
        Remove
      </button>
    </li>
  );
}

Book.propTypes = {
  name: PropTypes.string.isRequired,
  categories: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Book;
