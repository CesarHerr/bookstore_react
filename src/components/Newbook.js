import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../redux/books/booksSlice';

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
     dispatch(add(newBook));
      setNewTitle('');
      setNewAuthor('');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={getTitle}
          type="text"
          placeholder="Book Title"
          value={newTitle}
          required
        />
        <input
          onChange={getAuthor}
          type="text"
          placeholder="Author"
          value={newAuthor}
          required
        />
        <button type="submit">ADD BOOK</button>
      </form>
    </>
  );
}

export default NewBook;
