import PropTypes from 'prop-types';

function Book({ name, categories, author }) {
  return (
    <li>
      <span>{categories}</span>
      <h2>{name}</h2>
      <p>{author}</p>

      <button type="button">Remove</button>
    </li>
  );
}

Book.propTypes = {
  name: PropTypes.string.isRequired,
  categories: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
