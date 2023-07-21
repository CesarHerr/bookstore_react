import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';
import styles from '../styles/Book.module.scss';

function Book({
  name, categories, author, id,
}) {
  const dispatch = useDispatch();
  return (
    <li className={styles.booksList__list}>
      <ul className={styles['booksList__list--group']}>
        <li>
          <span>{categories}</span>
          <h2>{name}</h2>
          <p>{author}</p>
          <div>
            <button type="button">Comments</button>
            <button type="button" onClick={() => dispatch(deleteBook(id))}>
              Remove
            </button>
            <button type="button">Edit</button>
          </div>
        </li>
        <li className={styles['booksList__list--progress']}>
          <div className={styles.progressCircle} />
          <span>
            <h3>64%</h3>
            <p>Completed</p>
          </span>
        </li>
        <li className={styles.chapterInfo}>
          <span>CURRENT CHAPTER</span>
          <h2>Chapter 17</h2>
          <button type="button">UPDATE PROGRESS</button>
        </li>
      </ul>
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
