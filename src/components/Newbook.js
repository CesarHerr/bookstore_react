import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBook } from '../redux/books/booksSlice';

function NewBook() {
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const dispatch = useDispatch();

  const getTitle = (e) => {
    setNewTitle(e.target.value);
  };

  const getAuthor = (e) => {
    setNewAuthor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newTitle.trim()) {
      const newBook = {
        item_id: uuidv4(),
        title: newTitle,
        author: newAuthor,
        category: 'Fiction',
      };
      dispatch(createBook(newBook));

      setNewTitle('');
      setNewAuthor('');
    }
  };

  return (
    <>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="bookTitle" aria-label="Add a book name">
          <input
            id="bookTitle"
            name="bookTitle"
            onChange={getTitle}
            type="text"
            placeholder="Book Title"
            value={newTitle}
            required
          />
        </label>
        <label htmlFor="authorName" aria-label="Add an author">
          <input
            id="authorName"
            onChange={getAuthor}
            type="text"
            placeholder="Author"
            value={newAuthor}
            required
          />
        </label>
        <button type="submit">ADD BOOK</button>
      </form>
    </>
  );
}

export default NewBook;
