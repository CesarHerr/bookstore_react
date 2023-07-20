import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import { fetchBooks } from '../redux/books/booksSlice';

function BookList() {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <>
      <ul>
        {Object.values(books)
          .flat()
          .map((book, index) => (
            <Book
              key={Object.keys(books)[index]}
              name={book.title}
              author={book.author}
              categories={book.category}
              id={Object.keys(books)[index]}
            />
          ))}
      </ul>
      ,
    </>
  );
}

export default BookList;
